"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutStats } from "@/lib/data";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center p-6 rounded-2xl glass card-hover"
    >
      <div className="text-3xl sm:text-4xl font-heading font-bold text-gradient mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-400 font-medium">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-14 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="section-divider mb-10" />

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-accent-cyan font-mono text-sm mb-4"
            >
              // About Me
            </motion.span>

            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Passionate about building{" "}
              <span className="text-gradient">exceptional</span> digital experiences
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer with over 5 years of experience crafting
                web applications that are not only functional but delightful to use.
                My journey spans from building responsive frontends with React to
                architecting scalable backend systems with Node.js and Golang.
              </p>
              <p>
                I thrive at the intersection of design and engineering — turning
                complex problems into elegant, user-friendly solutions. Whether
                it&apos;s developing AI-powered applications, optimizing database
                performance, or containerizing microservices with Docker, I bring
                dedication and attention to detail to every project.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll me exploring new technologies,
                contributing to open-source, or sharing knowledge with the developer
                community.
              </p>
            </div>

            {/* Tech highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {["React.js", "Node.js", "Golang", "PostgreSQL", "Docker", "AI/ML"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 text-xs font-mono text-accent-cyan border border-accent-cyan/20 rounded-full bg-accent-cyan/5"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutStats.map((stat, i) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}

            {/* CTA card */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/20 flex items-center gap-4 group hover:border-accent-cyan/40 hover:from-accent-cyan/15 hover:to-accent-purple/15 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-2xl shrink-0">
                💬
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold group-hover:text-gradient transition-all duration-300">Let&apos;s Work Together</div>
                <div className="text-sm text-gray-400">Have a project in mind? I&apos;d love to hear about it.</div>
              </div>
              <svg className="w-5 h-5 text-gray-500 group-hover:text-accent-cyan group-hover:translate-x-1 transition-all duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
