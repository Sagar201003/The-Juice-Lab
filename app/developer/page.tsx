"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DeveloperPage() {
  return (
    <main className="min-h-screen relative font-sans text-white bg-black selection:bg-orange-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden flex flex-col justify-center min-h-[60vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
          >
            Meet the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Developer.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about crafting premium digital experiences with modern web technologies.
          </motion.p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Sagar Shukla</h2>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              I specialize in building high-performance, visually stunning web applications. The Juice Lab is built using a modern stack designed for speed, interactivity, and a premium user experience.
            </p>
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-orange-400">Tech Stack Used:</h3>
              <ul className="space-y-2 text-white/80 font-light">
                <li className="flex items-center gap-3"><span className="text-blue-400">⚛</span> Next.js 14 (App Router)</li>
                <li className="flex items-center gap-3"><span className="text-blue-500">📘</span> TypeScript</li>
                <li className="flex items-center gap-3"><span className="text-teal-400">🌊</span> Tailwind CSS</li>
                <li className="flex items-center gap-3"><span className="text-pink-500">✨</span> Framer Motion</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative p-1 rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30"
          >
            <div className="bg-gray-900 rounded-[22px] p-8 h-full flex flex-col justify-center items-center text-center space-y-4 border border-white/5">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-5xl shadow-2xl overflow-hidden">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold mt-4">Connect with me</h3>
              <p className="text-white/50 text-sm">Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
              <a href="mailto:shuklasagar201003@gmail.com" className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/20 transition-all">
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
