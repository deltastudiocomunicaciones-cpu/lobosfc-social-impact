"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      title: t.sportsFormation,
      text: t.sportsFormationText,
    },
    {
      title: t.characterAcademy,
      text: t.characterAcademyText,
    },
    {
      title: t.scholarshipPathways,
      text: t.scholarshipPathwaysText,
    },
    {
      title: t.familyCommunity,
      text: t.familyCommunityText,
    },
  ];

  return (
    <section
      id="programs"
      className="relative bg-black text-white px-6 py-32 overflow-hidden"
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.12),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="max-w-4xl mb-24">

          <p className="uppercase tracking-[0.4em] text-red-500 mb-6">
            {t.programsLabel}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
            {t.programsTitle1}
            <br />
            {t.programsTitle2}
          </h2>

        </div>

        {/* PROGRAMS */}

        <div className="grid md:grid-cols-2 gap-6">

          {programs.map((program, index) => (

            <div
              key={index}
              className="border border-white/10 bg-white/[0.03] rounded-[36px] p-10 hover:bg-red-600 transition-all duration-500"
            >

              <span className="text-red-500 text-5xl font-black">
                0{index + 1}
              </span>

              <h3 className="text-3xl font-black mt-10 mb-6">
                {program.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                {program.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}