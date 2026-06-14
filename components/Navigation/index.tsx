"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks, siteConfig } from "@/lib/data";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-900/80 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
        style={{
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-xl font-heading font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-gradient">{"<"}</span>
              <span className="text-white">{siteConfig.name.split(" ")[0]}</span>
              <span className="text-gradient">{" />"}</span>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navigationLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-purple group-hover:w-3/4 transition-all duration-300" />
                </motion.button>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#contact");
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="ml-4 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300 hover:scale-105"
              >
                Let&apos;s Talk
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-white rounded-full"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-0.5 bg-white rounded-full"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-white rounded-full"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-900/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navigationLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="text-3xl font-heading font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#contact");
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-4 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full"
              >
                Let&apos;s Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
