"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function DonationCertificate() {
  const { t } = useLanguage();

  const certificates = [
    t.certificateCard1,
    t.certificateCard2,
    t.certificateCard3,
    t.certificateCard4,
    t.certificateCard5,
    t.certificateCard6,
  ];

  return (
    <section className="bg-[#F5F5F5] text-black px-6 py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        <div>

          <p className="uppercase tracking-[0.4em] text-red-600 mb-6">
            {t.certificateLabel}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
            {t.certificateTitle1}
            <br />
            {t.certificateTitle2}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mb-10">
            {t.certificateText}
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            {t.certificateLegal}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          {certificates.map((item, index) => (

            <div
              key={index}
              className="bg-white border border-black/10 rounded-[28px] p-8 flex items-center justify-center text-center font-semibold shadow-sm hover:border-red-600 transition-all"
            >
              {item}
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}