"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: t.mission, href: "/#mission" },
    { label: t.programs, href: "/#programs" },
    { label: t.impact, href: "/#impact" },
    { label: t.transparency, href: "/#transparency" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-5">
        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-5 md:px-8 py-3 flex items-center justify-between">

          <a href="/" className="flex items-center gap-3 min-w-fit">
            <Image
              src="/logos/logo-lobos.png"
              alt="Logo LobosFC"
              width={100}
              height={100}
              className="w-[42px] md:w-[65px] h-auto object-contain"
              priority
            />

           <div className="hidden md:flex flex-col leading-none">
  <span className="text-white font-black tracking-[0.18em] uppercase text-xs">
    {t.foundationName}
  </span>

  <span className="text-white/40 text-[10px] uppercase tracking-[0.22em] mt-2">
    {t.socialImpactPlatform}
  </span>
</div>
          </a>

          <div className="hidden md:flex items-center gap-8 ml-auto">
            <nav className="flex items-center gap-9 text-[12px] uppercase tracking-[0.25em] text-white/75">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-red-500 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <LanguageSwitcher />

            <a
              href="/donaciones"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-500"
            >
              <span className="uppercase tracking-[0.2em] text-xs font-bold text-white">
                {t.donate}
              </span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Open menu"
          >
            <span className="w-6 h-[2px] bg-white rounded-full" />
            <span className="w-6 h-[2px] bg-white rounded-full" />
            <span className="w-6 h-[2px] bg-white rounded-full" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-4"
          >
            <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-[28px] p-6 text-white">
              <nav className="flex flex-col gap-5 uppercase tracking-[0.25em] text-sm text-white/80">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-red-500 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/70">
                  {(["es", "en", "it", "ar"] as const).map((item) => (
  <button
    key={item}
    onClick={() => {
      setLang(item);
      setIsOpen(false);
    }}
    className={`hover:text-red-500 transition-all ${
      lang === item ? "text-red-500" : ""
    }`}
  >
    {item}
  </button>
))}
                </div>

                <a
                  href="/donaciones"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-600"
                >
                  <span className="uppercase tracking-[0.2em] text-xs font-bold text-white">
                    {t.donate}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}