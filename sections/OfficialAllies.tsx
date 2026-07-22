"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export default function OfficialAllies() {
  const { t } = useLanguage();

  return (
    <section
      id="official-allies"
      className="
        relative
        overflow-hidden
        border-y
        border-black/10
        bg-[#F3EFE7]
        px-6
        py-24
        text-[#151515]
        md:py-32
      "
    >
      {/* AMBIENT BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-32
            -top-40
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#D4AF37]/12
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-52
            -right-32
            h-[560px]
            w-[560px]
            rounded-full
            bg-red-700/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.16),transparent_38%)]
          "
        />
      </div>

      {/* SUBTLE TEXTURE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="mb-20 max-w-4xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.4em] text-[#9D7924]">
            {t.alliesLabel}
          </p>

          <h2 className="mb-8 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#151515] sm:text-5xl md:text-7xl">
            {t.alliesTitle1}
            <br />
            <span className="text-[#A8873B]">{t.alliesTitle2}</span>
          </h2>

          <p className="max-w-3xl text-base leading-relaxed text-black/65 sm:text-lg md:text-xl">
            {t.alliesText}
          </p>
        </div>

        {/* SPONSORS */}

<div className="grid gap-6 md:grid-cols-2">
  {/* SPONSOR 1 */}

  <article
    className="
      group
      relative
      overflow-hidden
      rounded-[36px]
      border
      border-[#C8A96B]/35
      bg-white/65
      p-8
      shadow-[0_24px_80px_rgba(43,31,12,0.08)]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#B48A30]/70
      hover:bg-white/90
      hover:shadow-[0_30px_90px_rgba(43,31,12,0.14)]
      sm:p-10
    "
  >
    <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent opacity-70" />

    <div className="mb-10 flex h-[170px] items-center justify-center px-4 sm:h-[190px]">
      <Image
        src="/sponsors/sponsor-1.png"
        alt="Patrocinador oficial"
        width={320}
        height={180}
        className="
          max-h-[190px]
          w-auto
          max-w-full
          object-contain
          opacity-90
          transition-all
          duration-500
          group-hover:scale-[1.06]
          group-hover:opacity-100
        "
      />
    </div>

    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-[#A8873B]" />

      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8A6B28]">
        Official Partner
      </span>
    </div>

    <h3 className="mb-4 text-2xl font-black tracking-[-0.02em] text-[#18140C]">
      {t.officialSponsor}
    </h3>

    <p className="leading-relaxed text-black/60">
      {t.officialSponsorText}
    </p>
  </article>

  {/* SPONSOR 2 */}

  <article
    className="
      group
      relative
      overflow-hidden
      rounded-[36px]
      border
      border-[#C8A96B]/35
      bg-white/65
      p-8
      shadow-[0_24px_80px_rgba(43,31,12,0.08)]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#B48A30]/70
      hover:bg-white/90
      hover:shadow-[0_30px_90px_rgba(43,31,12,0.14)]
      sm:p-10
    "
  >
    <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent opacity-70" />

    <div className="mb-10 flex h-[170px] items-center justify-center px-4 sm:h-[190px]">
      <Image
        src="/sponsors/sponsor-v2.png"
        alt="Aliado estratégico"
        width={260}
        height={160}
        className="
          max-h-[150px]
          w-auto
          max-w-full
          object-contain
          opacity-90
          transition-all
          duration-500
          group-hover:scale-[1.06]
          group-hover:opacity-100
        "
      />
    </div>

    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-[#A8873B]" />

      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8A6B28]">
        Strategic Alliance
      </span>
    </div>

    <h3 className="mb-4 text-2xl font-black tracking-[-0.02em] text-[#18140C]">
      {t.strategicAlly}
    </h3>

    <p className="leading-relaxed text-black/60">
      {t.strategicAllyText}
    </p>
  </article>
</div>
        {/* CTA */}

        <div className="mt-16 flex flex-col items-center text-center">
          <p className="mb-6 max-w-xl text-sm leading-relaxed text-black/50">
            Vincule su organización a una estructura deportiva con propósito,
            formación e impacto colectivo.
          </p>

          <a
            href="/donaciones#official-allies"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-4
              rounded-full
              bg-[#151515]
              px-8
              py-5
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-white
              shadow-[0_18px_50px_rgba(0,0,0,0.18)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:bg-[#A8873B]
              hover:shadow-[0_22px_60px_rgba(168,135,59,0.3)]
            "
          >
            {t.becomeSponsor}

            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}