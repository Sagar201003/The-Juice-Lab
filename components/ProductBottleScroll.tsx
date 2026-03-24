"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductBottleScrollProps {
  product: Product;
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, 240]);

  // Opacities and Y positions for 4 text blocks
  const op1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const op2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  const op3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  const op4 = useTransform(scrollYProgress, [0.8, 0.9, 1, 1], [0, 1, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.8, 1], [100, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images: HTMLImageElement[] = [];

    // Preload images
    for (let i = 1; i <= 240; i++) {
        const img = new Image();
        img.src = `${product.folderPath}/${i}.jpg`;
        images[i] = img;
    }
    
    let animationFrameId: number;

    const render = (index: number) => {
      const img = images[index];
      if (img && img.complete && img.naturalHeight !== 0) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio  = Math.min( hRatio, vRatio );
        const centerShift_x = ( canvas.width - img.width*ratio ) / 2;
        const centerShift_y = ( canvas.height - img.height*ratio ) / 2;  
        
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.drawImage(img, 0,0, img.width, img.height,
                           centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);  
      } else if (img && !img.complete) {
        // Render when it loads
        img.onload = () => {
          render(index);
        }
      }
    };
    
    const unsubscribe = frameIndex.on("change", (latest) => {
      animationFrameId = requestAnimationFrame(() => {
        render(Math.floor(latest));
      });
    });
    
    // Initial render attempt fallback
    render(1);

    const handleResize = () => {
      render(Math.floor(frameIndex.get()));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [product.folderPath, frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-transparent">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none transition-all duration-1000"
        />
        
        {/* TEXT OVERLAYS - Included in the sticky container as specified */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 p-8">
            <motion.div style={{ opacity: op1, y: y1 }} className="absolute text-center max-w-5xl px-4 flex flex-col items-center justify-center">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white drop-shadow-2xl tracking-tight mb-6">{product.section1.title}</h1>
              <p className="text-2xl md:text-4xl text-white/90 font-light drop-shadow-xl">{product.section1.subtitle}</p>
            </motion.div>
            
            <motion.div style={{ opacity: op2, y: y2 }} className="absolute text-center max-w-4xl px-4 flex flex-col items-center justify-center">
              <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl tracking-tighter mb-6">{product.section2.title}</h2>
              <p className="text-xl md:text-3xl text-white/90 font-light drop-shadow-xl">{product.section2.subtitle}</p>
            </motion.div>
            
            <motion.div style={{ opacity: op3, y: y3 }} className="absolute text-center max-w-4xl px-4 flex flex-col items-center justify-center">
              <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl tracking-tighter mb-6">{product.section3.title}</h2>
              <p className="text-xl md:text-3xl text-white/90 font-light drop-shadow-xl">{product.section3.subtitle}</p>
            </motion.div>
            
            <motion.div style={{ opacity: op4, y: y4 }} className="absolute text-center max-w-4xl px-4 flex flex-col items-center justify-center">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white drop-shadow-2xl tracking-tighter mb-6">{product.section4.title}</h2>
              <p className="text-2xl md:text-4xl text-white/90 font-light drop-shadow-xl">{product.section4.subtitle}</p>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
