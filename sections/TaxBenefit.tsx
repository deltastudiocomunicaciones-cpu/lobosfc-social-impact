"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { rteConfig } from "@/app/data/rte";

export default function TaxBenefit() {
  const { t, lang } = useLanguage();

  if (!rteConfig.rteQualified) {
    const copy = {
      es: { label: "Proceso institucional", title: "Calificación RTE en preparación.", text: "La Corporación Deportiva Lobos Fútbol Club está preparando su solicitud de calificación al Régimen Tributario Especial. Hasta que exista un acto administrativo favorable y vigente, este portal no promete descuentos ni beneficios tributarios asociados a las donaciones.", button: "Consultar RTE 2026" },
      en: { label: "Institutional process", title: "RTE qualification in preparation.", text: "Lobos Fútbol Club Sports Corporation is preparing its application for qualification under Colombia’s Special Tax Regime. Until a favorable and valid administrative act exists, this portal does not promise tax discounts or benefits related to donations.", button: "View RTE 2026" },
      it: { label: "Processo istituzionale", title: "Qualificazione RTE in preparazione.", text: "La Corporazione sta preparando la richiesta di qualificazione al Regime Tributario Speciale colombiano. Fino all’esistenza di un atto amministrativo favorevole e vigente, il portale non promette agevolazioni fiscali.", button: "Consulta RTE 2026" },
      ar: { label: "الإجراء المؤسسي", title: "طلب التأهيل الضريبي قيد الإعداد.", text: "تُعِد المؤسسة طلب التأهيل ضمن النظام الضريبي الخاص في كولومبيا. وإلى حين صدور قرار إداري ساري ومؤيد، لا تَعِد هذه المنصة بأي خصومات أو مزايا ضريبية مرتبطة بالتبرعات.", button: "عرض ملف 2026" },
    }[lang];

    return <section id="tax-benefit" className="bg-black text-white px-6 py-28"><div className="max-w-7xl mx-auto border border-white/10 rounded-[36px] p-8 md:p-14 bg-white/[0.03]"><p className="uppercase tracking-[0.4em] text-amber-400 text-xs mb-6">{copy.label}</p><div className="grid md:grid-cols-[1fr_0.8fr] gap-12 items-end"><h2 className="text-4xl md:text-6xl font-black leading-none">{copy.title}</h2><div><p className="text-gray-300 leading-relaxed">{copy.text}</p><a href="/transparencia/rte-2026" className="inline-flex mt-8 border border-white/30 px-6 py-4 rounded-full uppercase tracking-[0.18em] text-xs font-bold hover:bg-white hover:text-black transition-all">{copy.button} →</a></div></div></div></section>;
  }

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
