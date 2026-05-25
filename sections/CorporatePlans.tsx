"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function CorporatePlans() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.bronzeAlly,
      amount: t.from1M,
      benefits: [
        t.benefitCertificate,
        t.benefitImpactReport,
        t.benefitInstitutionalMention,
      ],
    },
    {
      name: t.silverAlly,
      amount: t.from5M,
      benefits: [
        t.benefitCertificate,
        t.benefitImpactReport,
        t.benefitWebsiteVisibility,
        t.benefitSocialMention,
      ],
    },
    {
      name: t.goldAlly,
      amount: t.from10M,
      benefits: [
        t.benefitCertificate,
        t.benefitImpactReport,
        t.benefitBrandVisibility,
        t.benefitCorporateActivation,
      ],
    },
    {
      name: t.packAlly,
      amount: t.from25M,
      benefits: [
        t.benefitStrategicAlliance,
        t.benefitAudiovisualContent,
        t.benefitEventInvitation,
        t.benefitPriorityVisibility,
      ],
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-20">
          <p className="uppercase tracking-[0.4em] text-red-500 mb-6">
            {t.corporateGivingLabel}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
            {t.corporateGivingTitle1}
            <br />
            {t.corporateGivingTitle2}
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {t.corporateGivingText}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-[32px] p-8 bg-white/[0.03] hover:bg-red-600 transition-all duration-500"
            >
              <p className="text-sm uppercase tracking-widest text-white/50 mb-6">
                0{index + 1}
              </p>

              <h3 className="text-2xl font-black mb-3">
                {plan.name}
              </h3>

              <p className="text-red-500 font-bold mb-8">
                {plan.amount}
              </p>

              <ul className="space-y-4 text-gray-400">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="border-t border-white/10 pt-4">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}