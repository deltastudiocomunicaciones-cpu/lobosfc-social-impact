"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function TaxBenefit() {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t.taxBenefitCard1Title,
      text: t.taxBenefitCard1Text,
    },
    {
      title: t.taxBenefitCard2Title,
      text: t.taxBenefitCard2Text,
    },
    {
      title: t.taxBenefitCard3Title,
      text: t.taxBenefitCard3Text,
    },
  ];

  return (
    <section id="tax-benefit" className="bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-20">
          <p className="uppercase tracking-[0.4em] text-red-500 mb-6">
            {t.taxBenefitLabel}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
            {t.taxBenefitTitle1}
            <br />
            {t.taxBenefitTitle2}
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {t.taxBenefitText}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-3xl p-8 bg-white/[0.03]"
            >
              <span className="text-red-500 font-black text-4xl">
                0{index + 1}
              </span>

              <h3 className="text-2xl font-black mt-8 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-8 md:p-10">
          <p className="uppercase tracking-widest text-red-500 text-sm mb-4">
            {t.legalNote}
          </p>

          <p className="text-gray-300 leading-relaxed">
            {t.taxBenefitLegalText}
          </p>
        </div>
      </div>
    </section>
  );
}