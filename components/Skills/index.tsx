"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-accent-cyan">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple relative"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-accent-cyan/50" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillCard({ category, items, index }: { category: string; items: { name: string; level: number }[]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 rounded-2xl glass card-hover group overflow-hidden"
    >
      {/* Hover glow effect */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 pointer-events-none"
      />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-cyan/10 to-transparent rounded-bl-3xl" />

      <h3 className="text-lg font-heading font-semibold text-white mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
        {category}
      </h3>

      <div className="space-y-4">
        {items.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={index * 0.15 + i * 0.08}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-14 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="section-divider mb-10" />

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent-cyan font-mono text-sm mb-4">
            // Skills & Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, databases, DevOps, and AI —
            constantly evolving with the industry.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <SkillCard key={group.category} category={group.category} items={group.items} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
