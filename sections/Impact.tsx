"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function Impact() {
  const { t } = useLanguage();

  const stats = [
    {
      value: "250+",
      label: t.youngAthletes,
    },
    {
      value: "12",
      label: t.categories,
    },
    {
      value: "80+",
      label: t.trainings,
    },
    {
      value: "4",
      label: t.communityPrograms,
    },
  ];

  return (
    <section
      id="impact"
      className="bg-[#F5F5F5] text-black px-6 py-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* TOP */}

        <div className="max-w-4xl mb-24">

          <p className="uppercase tracking-[0.4em] text-red-600 mb-6">
            {t.impactLabel}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
            {t.impactTitle1}
            <br />
            {t.impactTitle2}
          </h2>

        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white border border-black/10 rounded-[32px] p-10"
            >

              <span className="text-5xl md:text-6xl font-black text-red-600">
                {item.value}
              </span>

              <p className="mt-6 text-gray-700 uppercase tracking-[0.2em] text-sm leading-relaxed">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}