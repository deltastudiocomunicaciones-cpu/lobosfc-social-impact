"use client";

import { useLanguage } from "@/app/context/LanguageContext";

const areas = [
  { title: "Régimen Tributario Especial — RTE", status: "Calificación 2026", href: "/transparencia/rte-2026" },
  { title: "Información institucional", status: "En preparación", href: "/transparencia" },
  { title: "Información financiera", status: "En preparación", href: "/transparencia" },
  { title: "Gestión e impacto", status: "Próxima publicación", href: "/transparencia" },
];

export default function Transparency() {
  const { t } = useLanguage();

  return (
    <section
      id="transparency"
      className="bg-[#F5F5F5] text-black px-6 py-32"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="uppercase tracking-[0.4em] text-red-600 mb-6">
            {t.transparencyLabel}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
            {t.transparencyTitle1}
            <br />
            {t.transparencyTitle2}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
            {t.transparencyText}
          </p>
        </div>

        <div className="grid gap-4">
          {areas.map((area) => (
            <a
              key={area.title}
              href={area.href}
              className="bg-white border border-black/10 rounded-2xl px-6 py-5 flex justify-between items-center hover:border-red-600 transition-all"
            >
              <span className="font-semibold">{area.title}</span>
              <span className="text-red-600 text-xs uppercase tracking-wider font-bold text-right">{area.status} →</span>
            </a>
          ))}
          <a href="/transparencia" className="mt-4 inline-flex justify-center rounded-full bg-black text-white px-7 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-red-600 transition-all">Abrir portal de Transparencia</a>
        </div>
      </div>
    </section>
  );
}
