"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig, contactInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-14 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

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
            // Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Upwork CTA */}
          <motion.a
            href={siteConfig.social.upwork}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="block p-8 rounded-2xl bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/20 hover:border-accent-cyan/40 transition-all duration-300 group text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-3xl mx-auto mb-4">
              💼
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
              Hire Me on Upwork
            </h3>
            <p className="text-gray-400 mb-4">
              Check out my profile, reviews, and availability for freelance projects.
            </p>
            <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full group-hover:shadow-lg group-hover:shadow-accent-cyan/25 transition-all duration-300">
              Visit Upwork Profile
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.a>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="p-6 rounded-2xl glass text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center text-xl mx-auto mb-4">
                ✉️
              </div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-400 text-sm hover:text-accent-cyan transition-colors break-all"
              >
                {contactInfo.email}
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-6 rounded-2xl glass text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center text-xl mx-auto mb-4">
                📍
              </div>
              <h3 className="text-white font-semibold mb-1">Location</h3>
              <p className="text-gray-400 text-sm">{contactInfo.location}</p>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 rounded-2xl glass text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center text-xl mx-auto mb-4">
                🟢
              </div>
              <h3 className="text-white font-semibold mb-1">Availability</h3>
              <p className="text-gray-400 text-sm">{contactInfo.availability}</p>
            </motion.div>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            <motion.a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan/30 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan/30 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
            <motion.a
              href={siteConfig.social.upwork}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan/30 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-.865c.389 1.102 1.422 1.862 2.846 1.862 1.423 0 2.584-.979 2.584-2.244 0-1.265-1.161-2.244-2.584-2.244-1.422 0-2.583.979-2.583 2.244 0 .196.022.391.065.582l-.865.228c-.043-.258-.065-.52-.065-.783 0-1.862 1.422-3.391 3.448-3.391 2.027 0 3.449 1.529 3.449 3.391 0 1.862-1.422 3.391-3.449 3.391zM12.001 13.158c-2.027 0-3.449-1.529-3.449-3.391 0-1.862 1.422-3.391 3.449-3.391 2.026 0 3.448 1.529 3.448 3.391 0 1.862-1.422 3.391-3.448 3.391zm0-5.635c-1.422 0-2.583.979-2.583 2.244 0 1.265 1.161 2.244 2.583 2.244 1.423 0 2.584-.979 2.584-2.244 0-1.265-1.161-2.244-2.584-2.244zM5.439 13.158c-2.026 0-3.448-1.529-3.448-3.391V4.132h1.148v5.635c0 1.265 1.161 2.244 2.583 2.244 1.423 0 2.584-.979 2.584-2.244V4.132h1.148v5.635c0 1.862-1.422 3.391-3.449 3.391h-.566z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}