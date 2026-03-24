"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative font-sans text-white bg-black selection:bg-orange-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-[80vh] flex flex-col justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-orange-500/20 via-orange-400/10 to-transparent rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none"
          >
            The Future of <br/>
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Freshness.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-3xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We started with a simple question: Why does bottled juice taste so dead? The answer led us to redefine the entire industry.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-white/5 border-y border-white/10 backdrop-blur-xl relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Zero Heat. <br/>Zero Compromise.</h2>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              Traditional juice companies use heat pasteurization to extend shelf life. This boils away the vitamins, kills the enzymes, and dulls the flavor. 
            </p>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              We use <strong className="text-white font-bold">HPP (High Pressure Processing)</strong>. By applying 87,000 psi of cold pressure—equivalent to the bottom of the deepest ocean—we neutralize bacteria while preserving 100% of the raw nutrients and vibrant taste.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square rounded-[3rem] bg-gradient-to-tr from-white/10 to-transparent border border-white/20 p-2 flex items-center justify-center relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[50px]"></div>
            <img src="/images/mango/120.jpg" alt="Cold Pressure process" className="w-[120%] h-[120%] object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 mix-blend-screen opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-sm font-bold tracking-widest uppercase text-orange-400 mb-2">The Science</p>
              <h3 className="text-3xl font-bold">Cold Pressure Extraction</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Our Core Formats.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
             { title: "Source", desc: "We partner directly with farmers, cutting out middlemen to ensure peak ripeness before harvest. We only accept the top 1% of yield.", icon: "🌱" },
             { title: "Process", desc: "Cold-blended in a zero-oxygen environment. No blades generating friction heat. Just pure, slow, masticating extraction.", icon: "⚙️" },
             { title: "Sustain", desc: "Our bottles are made from 100% rPET (recycled plastic), and our cooling packs are biodegradable. We aim for zero footprint.", icon: "🌍" }
          ].map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-xl"
            >
              <div className="text-5xl mb-6">{val.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{val.title}</h3>
              <p className="text-white/60 leading-relaxed text-lg font-light">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
