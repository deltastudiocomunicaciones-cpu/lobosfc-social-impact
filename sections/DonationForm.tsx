"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { section } from "framer-motion/m";

export default function DonationForm() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    company: "",
    document: "",
    email: "",
    phone: "",
    amount: "1000000",
    certificate: "yes",
  });

  function updateField(field: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <section id="donor-form" className="bg-[#F5F5F5] text-black px-6 py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="uppercase tracking-[0.4em] text-red-600 mb-6">
            Datos del donante
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
            Registra tu
            <br />
            contribución.
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
            Esta información permite preparar el soporte institucional,
            trazabilidad contable y acompañamiento para certificados de donación.
          </p>
        </div>

        <form className="bg-white border border-black/10 rounded-[40px] p-8 md:p-10 shadow-sm space-y-5">
          <input
            type="text"
            placeholder="Nombre completo"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600"
          />

          <input
            type="text"
            placeholder="Empresa / razón social"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            className="w-full border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600"
          />

          <input
            type="text"
            placeholder="NIT / Cédula"
            value={form.document}
            onChange={(e) => updateField("document", e.target.value)}
            className="w-full border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600"
          />

          <input
            type="tel"
            placeholder="Teléfono / WhatsApp"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="w-full border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600"
          />

          <select
            value={form.amount}
            onChange={(e) => updateField("amount", e.target.value)}
            className="w-full border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600 bg-white"
          >
            <option value="1000000">$1.000.000 COP</option>
            <option value="5000000">$5.000.000 COP</option>
            <option value="10000000">$10.000.000 COP</option>
            <option value="25000000">$25.000.000 COP</option>
          </select>

          <select
            value={form.certificate}
            onChange={(e) => updateField("certificate", e.target.value)}
            className="w-full border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-red-600 bg-white"
          >
            <option value="yes">Sí deseo certificado de donación</option>
            <option value="no">No necesito certificado</option>
          </select>

          <p className="text-xs text-gray-500 leading-relaxed">
            Al enviar esta información autorizas el tratamiento de datos para
            fines administrativos, contables y de seguimiento de la donación.
          </p>

          <button
  type="button"
  onClick={() => {
    localStorage.setItem("lobosDonationData", JSON.stringify(form));
    window.location.href = "#checkout";
  }}
  className="flex w-full items-center justify-center bg-red-600 hover:bg-red-700 transition-all py-5 rounded-full text-white font-bold uppercase tracking-[0.25em] text-sm"
>
  Continuar
</button>
        
        </form>
      </div>
    </section>
  );
}