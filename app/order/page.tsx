"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function OrderPage() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);
  const [subscription, setSubscription] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity, subscription);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const price = parseInt(selectedProduct.price.replace('₹', ''));
  const subtotal = price * quantity;
  const discountAmount = subscription ? Math.floor(subtotal * 0.15) : 0;
  const total = subtotal - discountAmount;

  return (
    <main className="min-h-screen font-sans text-white bg-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row gap-16 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/20 to-pink-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen mix-blend-overlay"></div>
        
        {/* Left Side - Product Selection */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-12 relative z-10"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">Craft your <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">Order.</span></h1>
            <p className="text-xl text-white/60 font-light">Select your preferred flavor and quantity. Cold-pressed exactly when you order.</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">1. Choose Flavor</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {products.map((p) => (
                <div 
                  key={p.id}
                  onClick={() => setSelectedProduct(p)}
                  className={`cursor-pointer p-4 rounded-3xl border transition-all duration-300 ${
                    selectedProduct.id === p.id 
                    ? "bg-white/10 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.1)] scale-105" 
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="aspect-square rounded-2xl mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-50 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100" style={{ background: p.gradient }}></div>
                    <img src={`${p.folderPath}/bottle.png`} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-lg leading-tight">{p.name}</h4>
                  <p className="text-sm text-white/50">{p.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
             <h3 className="text-2xl font-bold">2. Quantity & Frequency</h3>
             <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-4 bg-black/50 rounded-full px-4 py-2 border border-white/10">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">-</button>
                  <span className="text-xl font-bold w-6 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">+</button>
                </div>
                <div className="flex-1">
                   <div 
                     onClick={() => setSubscription(!subscription)}
                     className={`cursor-pointer flex items-center justify-between p-4 rounded-2xl border transition-all ${subscription ? 'bg-orange-500/20 border-orange-500/50' : 'bg-transparent border-white/10 hover:border-white/30'}`}
                   >
                     <div>
                       <div className="font-bold flex items-center gap-2">Subscribe & Save 15% <span className="px-2 py-0.5 rounded-full bg-orange-500 text-xs text-white">PRO</span></div>
                       <div className="text-sm text-white/60">Delivered fresh every week</div>
                     </div>
                     <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${subscription ? 'border-orange-500 bg-orange-500' : 'border-white/30'}`}>
                        {subscription && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Right Side - Checkout Form / Summary */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 relative z-10"
        >
          <div className="sticky top-32 p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
              <h2 className="text-3xl font-bold mb-8">Summary</h2>
              
              <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-8">
                <div className="w-24 h-24 rounded-2xl overflow-hidden relative bg-black">
                   <img src={`${selectedProduct.folderPath}/bottle.png`} alt={selectedProduct.name} className="w-full h-full object-cover object-center" />
                </div>
                <div>
                   <h3 className="text-2xl font-black">{selectedProduct.name}</h3>
                   <p className="text-white/60">{selectedProduct.subName}</p>
                   <p className="mt-2 text-sm text-orange-400">{selectedProduct.buyNowSection.unit}</p>
                </div>
              </div>

              <div className="space-y-4 text-lg mb-8">
                <div className="flex justify-between">
                  <span className="text-white/60">Subtotal ({quantity} items)</span>
                  <span>₹{subtotal}</span>
                </div>
                {subscription && (
                  <div className="flex justify-between text-orange-400">
                    <span>Subscription Discount (15%)</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-white/60">Shipping</span>
                  <span>{total >= 500 ? <span className="text-green-400">FREE</span> : '₹49'}</span>
                </div>
                
                <div className="flex justify-between text-2xl font-bold pt-4 border-t border-white/10 mt-4">
                  <span>Total</span>
                  <span>₹{total + (total >= 500 ? 0 : 49)}</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={handleAddToCart}
                className={`w-full py-5 rounded-full font-bold text-xl transition-all shadow-lg mb-4 ${
                  addedToCart
                    ? "bg-green-500 text-white shadow-green-500/25"
                    : "bg-white text-black hover:opacity-90 transform hover:scale-[1.02] shadow-white/10"
                }`}
              >
                {addedToCart ? "✓ Added to Cart!" : "Add to Cart"}
              </button>

              {/* Proceed to Checkout */}
              <Link href="/checkout">
                <button 
                  onClick={() => {
                    if (!addedToCart) {
                      addToCart(selectedProduct, quantity, subscription);
                    }
                  }}
                  className="w-full py-5 rounded-full font-bold text-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:opacity-90 transform hover:scale-[1.02] transition-all shadow-lg shadow-orange-500/25"
                >
                  Proceed to Checkout
                </button>
              </Link>

              <p className="text-center text-sm text-white/40 mt-6 flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Secure 256-bit encrypted checkout
              </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
