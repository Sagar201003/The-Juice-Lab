"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    num: "01",
    title: "Orchard Selection",
    desc: "Our quality control starts at the soil level. We only partner with regenerative farms that prioritize sustainable soil health, ensuring maximum nutrient density in every piece of fruit.",
    color: "from-green-500 to-emerald-700",
    image: "/images/mango/50.jpg"
  },
  {
    num: "02",
    title: "Cold Mastication",
    desc: "Traditional centrifugal juicers create friction heat that destroys delicate enzymes. We use slow-moving cold masticating presses to gently squeeze every drop without generating a single degree of heat.",
    color: "from-orange-400 to-red-500",
    image: "/images/chocolate/45.jpg"
  },
  {
    num: "03",
    title: "Oxygen Shielding",
    desc: "From the moment the juice is pressed until the cap goes on, the liquid is shielded in a nitrogen-flushed environment. Zero oxygen exposure means zero oxidation. The juice stays bright, fresh, and biologically alive.",
    color: "from-blue-400 to-indigo-600",
    image: "/images/pomegranate/80.jpg"
  },
  {
    num: "04",
    title: "HPP Immersion",
    desc: "The final sealed bottles are subjected to High Pressure Processing (HPP) in extreme cold water baths. 87,000 psi of pressure kills harmful bacteria while keeping the raw nutritional profile completely intact.",
    color: "from-purple-500 to-pink-600",
    image: "/images/mango/180.jpg"
  }
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-32"
        >
          <span className="uppercase tracking-[0.3em] font-bold text-orange-500 text-sm">Transparency</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">The Process.</h1>
          <p className="text-2xl font-light text-white/60 max-w-2xl mx-auto">We don't make juice. We engineer liquid nutrition through a meticulous 4-step technological marvel.</p>
        </motion.div>

        <div className="space-y-40 relative">
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10 hidden lg:block"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
               <div className={`w-full lg:w-1/2 flex justify-center ${idx % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'} relative`}>
                 <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-16 h-16 rounded-full bg-black border-4 border-white/20 text-orange-500 flex items-center justify-center font-black text-2xl z-20 mx-auto mb-8 lg:mb-0 shadow-[0_0_30px_rgba(255,165,0,0.5)] hidden lg:flex" style={{ left: idx % 2 === 0 ? 'auto' : '-32px', right: idx % 2 === 0 ? '-32px' : 'auto' }}>
                    {step.num}
                 </div>
                 
                 <div className="aspect-[4/3] w-full max-w-lg rounded-3xl overflow-hidden relative shadow-2xl p-1 bg-gradient-to-br border border-white/10 group">
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay transition-opacity duration-700 bg-gradient-to-br group-hover:opacity-40" />
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover object-center rounded-2xl mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000" />
                 </div>
               </div>
               
               <div className={`w-full lg:w-1/2 space-y-6 text-center lg:text-left ${idx % 2 === 1 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <span className={`text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r ${step.color} opacity-80`}>
                    Step {step.num}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold">{step.title}</h2>
                  <p className="text-xl text-white/60 font-light leading-relaxed">
                    {step.desc}
                  </p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="py-40 bg-gradient-to-b from-transparent to-orange-900/20 text-center px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto space-y-10"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">Ready to taste the difference?</h2>
          <a href="/order" className="inline-block px-12 py-5 rounded-full bg-white text-black font-bold text-xl hover:scale-105 active:scale-95 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.4)]">
            Explore the Menu
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
