"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-heading font-bold">
              <span className="text-gradient">{"<"}</span>
              <span className="text-white">{siteConfig.name.split(" ")[0]}</span>
              <span className="text-gradient">{" />"}</span>
            </a>
            <p className="text-sm text-gray-500 mt-2">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <span className="text-gray-700">·</span>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Built with love */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600 font-mono">
            Built with <span className="text-accent-pink">♥</span> using Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
