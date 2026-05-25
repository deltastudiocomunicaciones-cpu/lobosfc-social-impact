"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function DonationsFlow() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t.flowStep1Title,
      text: t.flowStep1Text,
    },
    {
      title: t.flowStep2Title,
      text: t.flowStep2Text,
    },
    {
      title: t.flowStep3Title,
      text: t.flowStep3Text,
    },
    {
      title: t.flowStep4Title,
      text: t.flowStep4Text,
    },
    {
      title: t.flowStep5Title,
      text: t.flowStep5Text,
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-20">
          <p className="uppercase tracking-[0.4em] text-red-500 mb-6">
            {t.donationFlowLabel}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
            {t.donationFlowTitle1}
            <br />
            {t.donationFlowTitle2}
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {t.donationFlowText}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-[28px] p-6 bg-white/[0.03]"
            >
              <span className="text-red-500 font-black text-3xl">
                0{index + 1}
              </span>

              <h3 className="text-xl font-black mt-8 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}