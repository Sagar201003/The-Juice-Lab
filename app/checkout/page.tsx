"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";

type Step = "shipping" | "payment" | "confirmation";

export default function CheckoutPage() {
  const { items, subtotal, discount, total, clearCart } = useCart();
  const [step, setStep] = useState<Step>("shipping");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    paymentMethod: "card" as "card" | "upi" | "cod",
    upiId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setOrderNumber("TJL-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + Date.now().toString().slice(-4));
      setIsProcessing(false);
      setStep("confirmation");
      clearCart();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2500);
  };

  const shipping = total >= 500 ? 0 : 49;
  const grandTotal = total + shipping;

  const stepIndicator = (
    <div className="flex items-center justify-center gap-0 mb-12">
      {[
        { key: "shipping", label: "Shipping", num: 1 },
        { key: "payment", label: "Payment", num: 2 },
        { key: "confirmation", label: "Confirm", num: 3 },
      ].map((s, i) => {
        const isActive = step === s.key;
        const isCompleted =
          (s.key === "shipping" && (step === "payment" || step === "confirmation")) ||
          (s.key === "payment" && step === "confirmation");
        return (
          <div key={s.key} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                  isCompleted
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                    : isActive
                    ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-white/5 text-white/30 border border-white/10"
                }`}
              >
                {isCompleted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                ) : (
                  s.num
                )}
              </div>
              <span className={`text-xs mt-2 font-medium ${isActive ? "text-white" : "text-white/30"}`}>{s.label}</span>
            </div>
            {i < 2 && (
              <div className={`w-16 md:w-24 h-0.5 mx-2 mb-5 rounded-full transition-colors ${isCompleted ? "bg-green-500" : "bg-white/10"}`}></div>
            )}
          </div>
        );
      })}
    </div>
  );

  // ─── Empty Cart ───
  if (items.length === 0 && step !== "confirmation") {
    return (
      <main className="min-h-screen font-sans text-white bg-black">
        <Navbar />
        <div className="pt-40 pb-20 px-6 max-w-2xl mx-auto text-center space-y-8">
          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-5xl mx-auto">🧃</div>
          <h1 className="text-4xl font-black">Your cart is empty</h1>
          <p className="text-white/50 font-light text-lg">Add some delicious cold-pressed juices before checking out.</p>
          <Link href="/order">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/25">
              Browse Products
            </button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen font-sans text-white bg-black selection:bg-orange-500/30">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto relative">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 to-pink-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        {stepIndicator}

        <AnimatePresence mode="wait">
          {/* ─── STEP 1: SHIPPING ─── */}
          {step === "shipping" && (
            <motion.div
              key="shipping"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10"
            >
              <form onSubmit={handleShippingSubmit} className="lg:col-span-2 space-y-8">
                <h2 className="text-3xl font-bold">Shipping Information</h2>

                <div className="space-y-6 bg-white/[0.03] border border-white/[0.06] rounded-[2rem] p-6 md:p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">First Name *</label>
                      <input name="firstName" value={form.firstName} onChange={handleChange} required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20" placeholder="Sagar" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">Last Name *</label>
                      <input name="lastName" value={form.lastName} onChange={handleChange} required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20" placeholder="Shukla" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">Email *</label>
                      <input name="email" value={form.email} onChange={handleChange} required type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">Phone *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required type="tel" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 ml-1">Full Address *</label>
                    <input name="address" value={form.address} onChange={handleChange} required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20" placeholder="House No., Street, Landmark" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">City *</label>
                      <input name="city" value={form.city} onChange={handleChange} required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20" placeholder="Mumbai" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">State *</label>
                      <input name="state" value={form.state} onChange={handleChange} required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20" placeholder="Maharashtra" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">PIN Code *</label>
                      <input name="pincode" value={form.pincode} onChange={handleChange} required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20" placeholder="400001" />
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full py-4 rounded-full font-bold text-base bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:opacity-90 transform hover:scale-[1.01] transition-all shadow-lg shadow-orange-500/25">
                  Continue to Payment →
                </button>
              </form>

              {/* Order Summary Sidebar */}
              <OrderSummary items={items} subtotal={subtotal} discount={discount} total={total} shipping={shipping} grandTotal={grandTotal} />
            </motion.div>
          )}

          {/* ─── STEP 2: PAYMENT ─── */}
          {step === "payment" && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10"
            >
              <form onSubmit={handlePaymentSubmit} className="lg:col-span-2 space-y-8">
                <div className="flex items-center gap-4">
                  <button type="button" onClick={() => setStep("shipping")} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <h2 className="text-3xl font-bold">Payment Method</h2>
                </div>

                {/* Payment Method Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { key: "card" as const, label: "Credit/Debit Card", icon: "💳" },
                    { key: "upi" as const, label: "UPI", icon: "📱" },
                    { key: "cod" as const, label: "Cash on Delivery", icon: "💵" },
                  ].map((method) => (
                    <div
                      key={method.key}
                      onClick={() => setForm({ ...form, paymentMethod: method.key })}
                      className={`cursor-pointer p-5 rounded-2xl border text-center transition-all duration-300 ${
                        form.paymentMethod === method.key
                          ? "bg-white/10 border-orange-500/50 shadow-[0_0_20px_rgba(255,165,0,0.15)]"
                          : "bg-white/[0.03] border-white/[0.06] hover:border-white/15"
                      }`}
                    >
                      <div className="text-3xl mb-2">{method.icon}</div>
                      <p className="text-sm font-medium">{method.label}</p>
                    </div>
                  ))}
                </div>

                {/* Card Details */}
                {form.paymentMethod === "card" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-5 bg-white/[0.03] border border-white/[0.06] rounded-[2rem] p-6 md:p-8 backdrop-blur-sm"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">Name on Card *</label>
                      <input name="cardName" value={form.cardName} onChange={handleChange} required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20" placeholder="SAGAR SHUKLA" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">Card Number *</label>
                      <input name="cardNumber" value={form.cardNumber} onChange={handleChange} required type="text" maxLength={19} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20 font-mono tracking-wider" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70 ml-1">Expiry *</label>
                        <input name="expiry" value={form.expiry} onChange={handleChange} required type="text" maxLength={5} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20 font-mono" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70 ml-1">CVV *</label>
                        <input name="cvv" value={form.cvv} onChange={handleChange} required type="password" maxLength={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20 font-mono" placeholder="•••" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* UPI */}
                {form.paymentMethod === "upi" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-5 bg-white/[0.03] border border-white/[0.06] rounded-[2rem] p-6 md:p-8 backdrop-blur-sm"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">UPI ID *</label>
                      <input name="upiId" value={form.upiId} onChange={handleChange} required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20" placeholder="yourname@upi" />
                    </div>
                    <p className="text-xs text-white/40 flex items-center gap-2 ml-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      A payment request will be sent to your UPI app for approval.
                    </p>
                  </motion.div>
                )}

                {/* COD */}
                {form.paymentMethod === "cod" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/[0.03] border border-white/[0.06] rounded-[2rem] p-6 md:p-8 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-2xl flex-shrink-0">💵</div>
                      <div>
                        <h4 className="font-bold text-lg">Cash on Delivery</h4>
                        <p className="text-white/50 text-sm font-light mt-1">Pay with cash when your order arrives. An additional ₹20 COD fee applies.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full py-4 rounded-full font-bold text-base text-white transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-3 ${
                    isProcessing
                      ? "bg-white/10 cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90 transform hover:scale-[1.01]"
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Processing Payment...
                    </>
                  ) : (
                    `Pay ₹${grandTotal + (form.paymentMethod === "cod" ? 20 : 0)}`
                  )}
                </button>

                <p className="text-center text-xs text-white/30 flex items-center justify-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Your payment info is encrypted and secure
                </p>
              </form>

              <OrderSummary items={items} subtotal={subtotal} discount={discount} total={total} shipping={shipping} grandTotal={grandTotal} codFee={form.paymentMethod === "cod" ? 20 : 0} />
            </motion.div>
          )}

          {/* ─── STEP 3: CONFIRMATION ─── */}
          {step === "confirmation" && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center space-y-8 relative z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10, delay: 0.3 }}
                className="w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-4xl mx-auto shadow-2xl shadow-green-500/30"
              >
                ✓
              </motion.div>

              <div className="space-y-3">
                <h1 className="text-5xl font-black">Order Confirmed!</h1>
                <p className="text-xl text-white/60 font-light">Thank you for choosing The Juice Lab.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 space-y-4 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-white/50 text-sm">Order Number</span>
                  <span className="font-mono font-bold text-orange-400">{orderNumber}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50 text-sm">Delivery Address</span>
                  <span className="text-sm text-right max-w-[60%]">{form.address}, {form.city} - {form.pincode}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50 text-sm">Payment Method</span>
                  <span className="text-sm capitalize">{form.paymentMethod === "cod" ? "Cash on Delivery" : form.paymentMethod === "upi" ? "UPI" : "Card"}</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <span className="text-white/50 text-sm">Estimated Delivery</span>
                  <span className="text-sm font-semibold text-green-400">1-2 Business Days</span>
                </div>
              </div>

              <p className="text-sm text-white/40">A confirmation email has been sent to <strong className="text-white/60">{form.email}</strong></p>

              <div className="flex gap-4 justify-center pt-4">
                <Link href="/">
                  <button className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/25">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  );
}

// ─── Order Summary Component ───
function OrderSummary({
  items,
  subtotal,
  discount,
  total,
  shipping,
  grandTotal,
  codFee = 0,
}: {
  items: { product: { name: string; price: string; folderPath: string; buyNowSection: { unit: string } }; quantity: number; subscription: boolean }[];
  subtotal: number;
  discount: number;
  total: number;
  shipping: number;
  grandTotal: number;
  codFee?: number;
}) {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-32 p-6 rounded-[2rem] bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm space-y-5">
        <h3 className="font-bold text-lg">Order Summary</h3>

        <div className="space-y-3 max-h-48 overflow-y-auto">
          {items.map((item) => (
            <div key={item.product.name} className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-xl bg-black overflow-hidden flex-shrink-0">
                <img src={`${item.product.folderPath}/bottle.png`} alt={item.product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.product.name}</p>
                <p className="text-xs text-white/40">Qty: {item.quantity}</p>
              </div>
              <span className="text-sm font-medium">₹{parseInt(item.product.price.replace("₹", "")) * item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-sm border-t border-white/10 pt-4">
          <div className="flex justify-between text-white/60">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-orange-400">
              <span>Subscription Discount</span>
              <span>-₹{discount}</span>
            </div>
          )}
          <div className="flex justify-between text-white/60">
            <span>Shipping</span>
            <span>{shipping === 0 ? <span className="text-green-400">FREE</span> : `₹${shipping}`}</span>
          </div>
          {codFee > 0 && (
            <div className="flex justify-between text-white/60">
              <span>COD Fee</span>
              <span>₹{codFee}</span>
            </div>
          )}
          <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-white/10">
            <span>Total</span>
            <span>₹{grandTotal + codFee}</span>
          </div>
        </div>

        {shipping === 0 && (
          <div className="flex items-center gap-2 text-xs text-green-400 bg-green-500/10 rounded-xl px-3 py-2 border border-green-500/20">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
            Free shipping on orders ₹500+
          </div>
        )}
      </div>
    </div>
  );
}
