"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.4em] text-red-500 mb-6"
        >
          {t.heroLabel}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-none"
        >
          {t.heroTitle1}
          <br />
          {t.heroTitle2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          {t.heroText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="/donaciones#checkout"
            className="bg-red-600 hover:bg-red-700 transition-all px-8 py-4 rounded-full font-semibold text-lg text-white"
          >
            {t.donateNow}
          </a>

          <a
            href="/#mission"
            className="border border-white/20 hover:border-white transition-all px-8 py-4 rounded-full font-semibold text-lg text-white"
          >
            {t.ourMission}
          </a>
        </motion.div>
      </div>
    </section>
  );
}