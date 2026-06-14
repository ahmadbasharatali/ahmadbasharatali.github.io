"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";

function TimelineItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={`relative flex items-start gap-8 mb-12 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Timeline dot */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
          className="w-4 h-4 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple ring-4 ring-dark-900"
        />
      </div>

      {/* Content card */}
      <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}>
        <div className="p-6 rounded-2xl glass card-hover group">
          {/* Period badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-mono text-accent-cyan bg-accent-cyan/10 rounded-full border border-accent-cyan/20">
              {experience.period}
            </span>
          </div>

          <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
            {experience.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {experience.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-mono text-gray-500 bg-dark-600/30 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-14 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-20" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="section-divider mb-10" />

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent-cyan font-mono text-sm mb-4">
            // Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey through the world of software development,
            from junior developer to leading technical initiatives.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/30 via-accent-purple/30 to-transparent" />

          {experiences.map((exp, i) => (
            <TimelineItem key={`${exp.title}-${exp.period}`} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
