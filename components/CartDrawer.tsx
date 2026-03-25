"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalItems, subtotal, discount, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-gray-950/95 backdrop-blur-2xl border-l border-white/10 z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center text-sm font-bold text-white">
                  {totalItems}
                </div>
                <h2 className="text-xl font-bold text-white">Your Cart</h2>
              </div>
              <button
                onClick={closeCart}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-4xl">🧃</div>
                  <p className="text-white/50 font-light text-lg">Your cart is empty</p>
                  <p className="text-white/30 text-sm">Add some fresh juices to get started!</p>
                  <button onClick={closeCart} className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-medium border border-white/10 transition-colors">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => {
                  const price = parseInt(item.product.price.replace("₹", ""));
                  const itemTotal = price * item.quantity;
                  const itemDiscount = item.subscription ? Math.floor(itemTotal * 0.15) : 0;

                  return (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-colors"
                    >
                      <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-black flex-shrink-0">
                          <img src={`${item.product.folderPath}/bottle.png`} alt={item.product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-white text-sm">{item.product.name}</h4>
                              <p className="text-white/40 text-xs">{item.product.buyNowSection.unit}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.product.id)} className="text-white/30 hover:text-red-400 transition-colors p-1">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                          </div>

                          {item.subscription && (
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-[10px] text-orange-400 font-bold">SUBSCRIBED -15%</span>
                          )}

                          <div className="flex justify-between items-center mt-3">
                            <div className="flex items-center gap-2 bg-black/40 rounded-full px-2 py-1 border border-white/10">
                              <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 transition-colors text-white">−</button>
                              <span className="text-sm font-bold w-5 text-center text-white">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 transition-colors text-white">+</button>
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-white text-sm">₹{itemTotal - itemDiscount}</span>
                              {itemDiscount > 0 && <span className="text-white/30 text-xs line-through ml-2">₹{itemTotal}</span>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-white/10 space-y-4 bg-black/50">
                <div className="space-y-2 text-sm">
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
                  <div className="flex justify-between text-white/40 text-xs">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-white/10">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <Link href="/checkout" onClick={closeCart}>
                  <button className="w-full py-4 rounded-full font-bold text-base bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:opacity-90 transform hover:scale-[1.02] transition-all shadow-lg shadow-orange-500/25">
                    Proceed to Checkout
                  </button>
                </Link>

                <p className="text-center text-xs text-white/30 flex items-center justify-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Secure 256-bit encrypted checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
