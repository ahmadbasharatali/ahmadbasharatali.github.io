"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);

  const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative rounded-2xl glass overflow-hidden card-hover"
      >
        {/* Project image / video thumbnail */}
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-800">
            {/* Decorative pattern */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: isHovered ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-white/5 flex items-center justify-center"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </div>

          {/* Overlay on hover */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent flex items-end justify-center pb-6"
          >
            <div className="flex gap-3">
              {project.hasVideo && (
                <motion.button
                  onClick={() => setShowVideo(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 text-sm font-medium text-white bg-accent-cyan/20 border border-accent-cyan/30 rounded-full backdrop-blur-sm hover:bg-accent-cyan/30 transition-colors"
                >
                  ▶ Demo 1
                </motion.button>
              )}
              {project.hasVideo2 && (
                <motion.button
                  onClick={() => setShowVideo2(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 text-sm font-medium text-white bg-accent-purple/20 border border-accent-purple/30 rounded-full backdrop-blur-sm hover:bg-accent-purple/30 transition-colors"
                >
                  ▶ Demo 2
                </motion.button>
              )}
              {hasLiveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 text-sm font-medium text-white bg-accent-cyan/20 border border-accent-cyan/30 rounded-full backdrop-blur-sm hover:bg-accent-cyan/30 transition-colors"
                >
                  Live
                </motion.a>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  GitHub
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-mono text-gray-400 bg-dark-600/50 rounded-md border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Video Modal 1 */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm"
              >
                ✕ Close
              </button>
              <div className="rounded-2xl overflow-hidden glass">
                <video
                  controls
                  autoPlay
                  className="w-full aspect-video"
                >
                  <source src="/ytgpt1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal 2 */}
      <AnimatePresence>
        {showVideo2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowVideo2(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo2(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm"
              >
                ✕ Close
              </button>
              <div className="rounded-2xl overflow-hidden glass">
                <video
                  controls
                  autoPlay
                  className="w-full aspect-video"
                >
                  <source src="/ytgpt2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-14 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

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
            // Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Projects I'm <span className="text-gradient">Proud Of</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in full-stack development,
            from AI-powered platforms to scalable e-commerce solutions.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}