"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function Donations() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-black text-white px-6 py-32 overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        <p className="uppercase tracking-[0.4em] text-red-500 mb-6">
          {t.donationsLabel}
        </p>

        <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
          {t.donationsTitle1}
          <br />
          {t.donationsTitle2}
        </h2>

        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
          {t.donationsText}
        </p>

        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed mb-14">
          {t.donationsDescription}
        </p>

        <a
          href="/donaciones"
          className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-500 text-white font-bold uppercase tracking-[0.25em] text-sm"
        >
          {t.goToDonations}
        </a>

      </div>

    </section>
  );
}