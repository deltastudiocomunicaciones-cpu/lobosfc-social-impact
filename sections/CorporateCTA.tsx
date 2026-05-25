"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function CorporateCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#050505] text-white px-6 py-32 overflow-hidden">

      {/* GLOW */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18),transparent_45%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.4em] text-red-500 mb-6">
          {t.corporateLabel}
        </p>

        <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
          {t.corporateTitle1}
          <br />
          {t.corporateTitle2}
        </h2>

        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-14">
          {t.corporateText}
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <a
  href="https://wa.me/573043795035?text=Hola%20LobosFC%20Foundation,%20quiero%20informaci%C3%B3n%20sobre%20alianzas%20y%20donaciones."
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-5 rounded-full border border-white/15 hover:border-red-600 hover:bg-red-600 transition-all duration-500 uppercase tracking-[0.2em] text-sm font-bold"
>
  {t.talkToTeam}
</a>

          <a
            href="/donaciones#checkout"
            className="px-8 py-5 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-500 uppercase tracking-[0.2em] text-sm font-bold"
          >
            {t.startDonation}
          </a>

        </div>

      </div>

    </section>
  );
}