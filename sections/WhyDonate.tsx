"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function WhyDonate() {
  const { t } = useLanguage();

  const sectors = [
    t.sector1,
    t.sector2,
    t.sector3,
    t.sector4,
    t.sector5,
    t.sector6,
    t.sector7,
    t.sector8,
  ];

  return (
    <section className="bg-[#F5F5F5] text-black px-4 md:px-6 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT WITH IMAGE BEHIND TEXT */}
        <div className="relative h-[720px] md:h-[760px] overflow-hidden rounded-[28px] md:rounded-[40px] p-8 md:p-12 flex items-start">

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100]">
            <img
              src="https://i.imgur.com/dqSL5eK.jpeg"
              alt="Jugador Lobos FC"
              className="h-full object-contain translate-x-14"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F5]/80 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <p className="uppercase tracking-[0.4em] text-red-600 mb-6">
              {t.whyDonateLabel}
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
              {t.whyDonateTitle1}
              <br />
              {t.whyDonateTitle2}
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mb-10">
              {t.whyDonateText1}
            </p>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              {t.whyDonateText2}
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-[40px] border border-black/10 p-8 md:p-10 shadow-sm">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-8">
            {t.highImpactCompanies}
          </p>

          <div className="grid gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-black/10 pb-4"
              >
                <span className="font-semibold">{sector}</span>

                <span className="text-red-600 font-black">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-black/10">
            <p className="uppercase tracking-widest text-sm text-red-600 mb-4">
              {t.strategicVision}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {t.strategicVisionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}