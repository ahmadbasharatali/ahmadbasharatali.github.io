"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { siteConfig } from "@/lib/data";

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`orb ${className}`}
      animate={{
        x: [0, 30, -20, 15, 0],
        y: [0, -25, 15, -10, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function MouseParallax({ children, intensity = 0.02 }: { children: React.ReactNode; intensity?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const x = useTransform(springX, (v) => v * intensity);
  const y = useTransform(springY, (v) => v * intensity);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div ref={ref} style={{ x, y }}>
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingOrb
          className="w-[500px] h-[500px] bg-accent-cyan/20 top-[-10%] left-[-10%]"
          delay={0}
        />
        <FloatingOrb
          className="w-[400px] h-[400px] bg-accent-purple/20 top-[20%] right-[-5%]"
          delay={2}
        />
        <FloatingOrb
          className="w-[350px] h-[350px] bg-accent-pink/15 bottom-[-5%] left-[30%]"
          delay={4}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Bottom gradient overlay — softer, only covers the bottom portion */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900/80" />

      {/* Main content — centered with flex-grow */}
      <MouseParallax intensity={0.015}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-6 max-w-5xl mx-auto flex-1 flex flex-col justify-center pt-24 pb-32"
        >
          {/* Greeting badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-4"
          >
            <span className="block text-white">Hi, I&apos;m</span>
            <span className="block text-gradient glow-text mt-2">
              {siteConfig.name}
            </span>
          </motion.h1>

          {/* Typed subtitle */}
          <motion.div variants={itemVariants} className="mb-5">
            <span className="text-xl sm:text-2xl md:text-3xl font-mono text-gray-400">
              {typedText}
              {showCursor && <span className="typing-cursor ml-1">&nbsp;</span>}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 212, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-base font-semibold text-gray-300 border border-gray-700 hover:border-gray-500 rounded-full transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </MouseParallax>

      {/* Scroll indicator — fixed at the very bottom, clear of all content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 group"
        >
          <span className="text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 group-hover:border-gray-400 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-accent-cyan"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
