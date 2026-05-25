"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export default function OfficialAllies() {
  const { t } = useLanguage();

  return (
      <section
       id="official-allies"
       className="bg-[#111111] text-white px-6 py-24 md:py-32 border-t border-white/10 relative overflow-hidden">

{/* BACKGROUND GLOW */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.12),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="max-w-4xl mb-20">

          <p className="uppercase tracking-[0.4em] text-[#D4AF37] mb-6">
           {t.alliesLabel}
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none mb-8">
            {t.alliesTitle1}
            <br />
            {t.alliesTitle2}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
           {t.alliesText}
          </p>

        </div>

        {/* SPONSORS */}

        <div className="grid md:grid-cols-2 gap-6">

          {/* SPONSOR 1 */}

          <div className="group bg-[#1A1408] border border-[#C8A96B]/30 rounded-[36px] p-10 hover:border-[#D4AF37] transition-all duration-500">

            <div className="h-[120px] flex items-center justify-center mb-8">

              <Image
                src="/sponsors/sponsor-1.png"
                alt="Sponsor 1"
                width={220}
                height={120}
                className="object-contain opacity-80 group-hover:opacity-100 transition-all"
              />

            </div>

            <h3 className="text-2xl font-black mb-4 text-[#F5D78E]">
              {t.officialSponsor}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {t.officialSponsorText}
            </p>

          </div>

          {/* SPONSOR 2 */}

          <div className="group bg-[#1A1408] border border-[#C8A96B]/30 rounded-[36px] p-10 hover:border-[#D4AF37] transition-all duration-500">

            <div className="h-[120px] flex items-center justify-center mb-8">

              <Image
                src="/sponsors/sponsor-2.png"
                alt="Sponsor 2"
                width={120}
                height={80}
                className="object-contain opacity-80 group-hover:opacity-100 transition-all"
              />

            </div>

            <h3 className="text-2xl font-black mb-4 text-[#F5D78E]">
              {t.strategicAlly}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {t.strategicAllyText}
            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-16 text-center">

          <a
           href="/donaciones#official-allies"
            className="inline-flex items-center justify-center px-8 py-5 rounded-full bg-[#C8A96B] hover:bg-[#D4AF37] text-black transition-all duration-500 uppercase tracking-[0.2em] text-sm font-bold"
          >
            {t.becomeSponsor}
          </a>

        </div>

      </div>

    </section>
  );
}