"use client";

import { useLanguage } from "@/app/context/LanguageContext";

const documents = [
  "RUT",
  "Cámara de comercio",
  "Estatutos",
  "Junta directiva",
  "Estados financieros",
  "Informes de gestión",
  "Política de datos",
  "Documentos RTE",
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
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white border border-black/10 rounded-2xl px-6 py-5 flex justify-between items-center hover:border-red-600 transition-all"
            >
              <span className="font-semibold">{doc}</span>
              <span className="text-red-600 font-bold">PDF</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}