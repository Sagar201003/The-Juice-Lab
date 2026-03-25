"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative font-sans text-white bg-black selection:bg-orange-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-500/20 via-pink-500/10 to-transparent rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tight leading-none"
          >
            Let's <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Connect.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white/70 max-w-2xl mx-auto font-light"
          >
            Have a question about our cold-pressed process or wholesale opportunities? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-white/60 font-light mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/80 font-light">
                  <span className="text-orange-400 text-xl">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-white/80 font-light">
                  <span className="text-orange-400 text-xl">✉️</span>
                  <span>hello@thejuicelab.com</span>
                </div>
                <div className="flex items-center gap-4 text-white/80 font-light">
                  <span className="text-orange-400 text-xl">📍</span>
                  <span>123 Fresh Lane, Health City, CA 90210</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-2">Business Hours</h4>
              <p className="text-sm text-white/60 font-light">Monday - Friday: 8am - 6pm<br/>Weekend: 10am - 4pm</p>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-6 bg-white/5 p-8 md:p-10 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1">First Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1">Last Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-1">Email Address</label>
              <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-1">Message</label>
              <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/25">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
