"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function Manifesto() {
  const { t } = useLanguage();

  return (
    <section
      id="mission"
      className="relative bg-black text-white px-6 py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.4em] text-red-500 mb-6">
            {t.manifestoLabel}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none">
            {t.manifestoTitle1}
            <br />
            {t.manifestoTitle2}
          </h2>
        </div>

        <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
          <p>{t.manifestoP1}</p>

          <p>{t.manifestoP2}</p>

          <p className="text-white font-semibold">
            {t.manifestoP3}
          </p>
        </div>
      </div>
    </section>
  );
}