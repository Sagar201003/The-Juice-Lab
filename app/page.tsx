"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    // Scroll to top on mount and flavor switch
    window.scrollTo(0, 0);
    // Set background gradient dynamically
    document.documentElement.style.setProperty("--product-gradient", products[currentIndex].gradient);
  }, [currentIndex]);

  const product = products[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main className="min-h-screen relative font-sans text-white text-base">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full relative origin-top z-0"
        >
          {/* 1. SCROLL EXPERIENCE */}
          <ProductBottleScroll product={product} />

          {/* 2. PRODUCT DETAILS SECTION */}
          <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 tracking-tight">
                {product.detailsSection.title}
              </h3>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mt-6">
                {product.detailsSection.description}
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/10 mt-12">
                {product.stats.map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="text-4xl font-bold mb-2 transform group-hover:scale-110 transition-transform">{stat.val}</div>
                    <div className="text-sm text-white/60 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center p-8 lg:p-16 hover:bg-white/10 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay"></div>
              <div className="w-full h-full rounded-2xl border border-white/20 flex flex-col items-center justify-center text-center p-8 space-y-6 relative z-10 transition-transform duration-500 hover:scale-105">
                 <div className="bg-white/10 p-4 rounded-full mb-2 border border-white/20">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                 </div>
                 <h4 className="text-3xl font-bold tracking-tight">{product.freshnessSection.title}</h4>
                 <p className="text-lg text-white/70 font-light">{product.freshnessSection.description}</p>
                 <div className="flex flex-wrap gap-2 justify-center mt-6">
                    {product.features.map((feat, i) => (
                      <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">{feat}</span>
                    ))}
                 </div>
              </div>
            </motion.div>
          </section>

          {/* 3. COMMERCE / BUY NOW SECTION */}
          <section className="py-32 px-6 bg-black/40 backdrop-blur-xl border-y border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white opacity-5 mix-blend-overlay rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 border border-white/20 rounded-[3rem] p-10 md:p-20 text-center space-y-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-3xl"
              >
                <div className="space-y-4">
                  <h2 className="text-6xl md:text-8xl font-black tracking-tight">{product.name}</h2>
                  <p className="text-3xl justify-center text-white/60 font-light italic">{product.subName}</p>
                </div>
                
                <div className="flex justify-center items-baseline gap-3">
                  <span className="text-7xl font-bold">{product.buyNowSection.price}</span>
                  <span className="text-2xl text-white/50">{product.buyNowSection.unit}</span>
                </div>

                <div className="flex flex-wrap justify-center gap-4 py-4">
                  {product.buyNowSection.processingParams.map((param, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full border border-white/20 shadow-inner">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span className="font-semibold tracking-wide text-sm">{param}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button 
                    onClick={() => addToCart(product)}
                    className="group relative inline-flex items-center justify-center px-16 py-6 font-bold text-2xl text-black transition-all duration-300 bg-white rounded-full hover:scale-105 active:scale-95 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                    style={{ color: product.themeColor }}
                  >
                    <span className="relative z-10">Add to Cart</span>
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-12 border-t border-white/10">
                  <div className="space-y-3">
                     <h5 className="font-bold flex items-center gap-2 text-lg">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect><line x1="16" y1="8" x2="16" y2="8"></line><line x1="8" y1="8" x2="8" y2="8"></line><line x1="12" y1="2" x2="12" y2="8"></line></svg>
                       Delivery Insights
                     </h5>
                     <p className="text-base text-white/60 bg-white/5 p-5 rounded-2xl border border-white/5 leading-relaxed">{product.buyNowSection.deliveryPromise}</p>
                  </div>
                  <div className="space-y-3">
                     <h5 className="font-bold flex items-center gap-2 text-lg">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.21l-5.64-5.64"></path></svg>
                       Quality Guarantee
                     </h5>
                     <p className="text-base text-white/60 bg-white/5 p-5 rounded-2xl border border-white/5 leading-relaxed">{product.buyNowSection.returnPolicy}</p>
                  </div>
                </div>

              </motion.div>
            </div>
          </section>

          {/* 4. NEXT FLAVOR BUTTON (Slanted CTA) */}
          <div 
            onClick={handleNext}
            className="w-full relative py-40 cursor-pointer overflow-hidden group border-t border-white/10 bg-black"
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-10" 
              style={{ background: product.gradient }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10 pointer-events-none"></div>
            
            <div className="relative z-20 flex flex-col items-center justify-center text-center space-y-6 transform group-hover:scale-105 transition-transform duration-700">
              <span className="text-sm uppercase tracking-[0.4em] text-white/50 font-bold">Unleash the next dimension</span>
              <h2 className="text-7xl md:text-[10rem] font-black italic drop-shadow-2xl tracking-tighter mix-blend-overlay text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                Next Flavor
              </h2>
              <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mt-8 animate-bounce">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* FIXED NAVIGATION */}
      <div className="fixed top-1/2 left-8 -translate-y-1/2 z-50 mix-blend-difference hidden lg:block">
        <button 
          onClick={handlePrev}
          className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110 shadow-2xl"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
      </div>
      <div className="fixed top-1/2 right-8 -translate-y-1/2 z-50 mix-blend-difference hidden lg:block">
        <button 
          onClick={handleNext}
          className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110 shadow-2xl"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 p-2 bg-black/60 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          {products.map((p, index) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(index)}
              className={`px-8 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-white text-black shadow-lg scale-105" 
                  : "text-white/60 hover:text-white hover:bg-white/20"
              }`}
            >
              {p.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
