"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = [
  { name: "Artificial Intelligence", level: 95, color: "from-blue-500 to-cyan-400" },
  { name: "Machine Learning", level: 92, color: "from-purple-500 to-pink-500" },
  { name: "Deep Learning", level: 90, color: "from-orange-500 to-red-500" },
  { name: "Computer Vision", level: 88, color: "from-green-400 to-emerald-500" },
  { name: "LLMs & RAG", level: 85, color: "from-violet-500 to-purple-400" },
  { name: "Web Development", level: 90, color: "from-amber-400 to-orange-500" },
];

const expertise = [
  { icon: "🧠", title: "AI & ML", desc: "Building intelligent systems with cutting-edge machine learning algorithms and neural architectures." },
  { icon: "👁️", title: "Computer Vision", desc: "Image recognition, object detection, and visual understanding using state-of-the-art deep learning models." },
  { icon: "🤖", title: "LLMs & RAG", desc: "Fine-tuning large language models and building retrieval-augmented generation pipelines for intelligent applications." },
  { icon: "🌐", title: "Web Development", desc: "Crafting premium, performant web experiences with Next.js, React, TypeScript, and modern frameworks." },
  { icon: "📊", title: "Deep Learning", desc: "Designing and training deep neural networks — CNNs, GANs, Transformers — for complex real-world problems." },
  { icon: "⚡", title: "Full Stack AI", desc: "End-to-end AI product development from research prototypes to production-ready deployed solutions." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function DeveloperPage() {
  return (
    <main className="min-h-screen relative font-sans text-white bg-black selection:bg-orange-500/30 overflow-hidden">
      <Navbar />

      {/* Ambient Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-transparent rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-orange-500/15 via-pink-500/10 to-transparent rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[60%] left-[50%] w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-24 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-6 order-2 md:order-1"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest uppercase text-white/60 backdrop-blur-sm">
                🚀 Full Stack AI Engineer
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
                Sagar<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
                  Shukla
                </span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed font-light max-w-lg">
                An AI/ML enthusiast and full-stack developer passionate about building intelligent, production-ready systems — from deep learning research to premium web experiences.
              </p>

              {/* Education */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-lg mt-0.5">🎓</span>
                  <div>
                    <p className="font-semibold text-sm">M.Tech in AI & ML <span className="text-white/40 font-normal">(Pursuing)</span></p>
                    <p className="text-white/50 text-sm font-light">COEP Technological University, Pune</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-lg mt-0.5">🎓</span>
                  <div>
                    <p className="font-semibold text-sm">B.E. in Computer Engineering</p>
                    <p className="text-white/50 text-sm font-light">FCRIT, Navi Mumbai</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="mailto:shuklasagar201003@gmail.com" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25">
                  Get in Touch
                </a>
                <a href="/contact" className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm backdrop-blur-md border border-white/10 transition-all">
                  View Contact
                </a>
              </div>
            </motion.div>

            {/* Photo side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative group">
                {/* Glow ring animation */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-700 animate-pulse"></div>
                <div className="relative p-1.5 rounded-[2rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
                  <div className="rounded-[1.5rem] overflow-hidden bg-gray-900">
                    <img 
                      src="/images/developer.jpg" 
                      alt="Sagar Shukla" 
                      className="w-72 h-80 md:w-80 md:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -bottom-4 -right-4 bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 shadow-2xl"
                >
                  <p className="text-xs text-white/50 font-medium">Currently @</p>
                  <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">COEP Tech, Pune</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Expertise Grid ─── */}
      <section className="py-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Expertise.</span>
            </h2>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              From training neural networks to shipping pixel-perfect user interfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-[1.5rem] bg-white/[0.03] border border-white/[0.06] hover:border-white/15 backdrop-blur-sm transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-300">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Skills Bars ─── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Proficiency.</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm text-white/80">{skill.name}</span>
                  <span className="text-xs text-white/40 font-mono">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tech Stack Marquee ─── */}
      <section className="py-20 px-6 relative z-10 border-y border-white/5">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-medium mb-10">Tech Stack & Tools</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Python", "PyTorch", "TensorFlow", "OpenCV", "Hugging Face",
              "LangChain", "Next.js", "React", "TypeScript", "Tailwind CSS",
              "Node.js", "Docker", "Git", "PostgreSQL", "FastAPI"
            ].map((tool, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-white/60 font-medium hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-28 px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Let's Build Something<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">Extraordinary.</span>
          </h2>
          <p className="text-lg text-white/50 font-light max-w-xl mx-auto">
            Always open to discussing AI research, new projects, creative ideas, or collaborative opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:shuklasagar201003@gmail.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold hover:opacity-90 transition-opacity shadow-xl shadow-orange-500/25 text-sm">
              📧 Email Me
            </a>
            <a href="/contact" className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all text-sm">
              💬 Contact Page
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
