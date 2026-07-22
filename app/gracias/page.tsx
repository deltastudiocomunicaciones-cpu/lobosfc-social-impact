"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

type DonationData = {
  name?: string;
  company?: string;
  document?: string;
  amount?: number | string;
};

export default function GraciasPage() {
  const [generatingCertificate, setGeneratingCertificate] = useState(false);

  const handleDownloadCertificate = async () => {
    try {
      setGeneratingCertificate(true);

      const savedDonation = localStorage.getItem("lobosDonationData");

      if (!savedDonation) {
        alert("No se encontró información de la donación.");
        return;
      }

      const donationData: DonationData = JSON.parse(savedDonation);

      const response = await fetch("/api/generate-certificate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: donationData.name || "",
          company: donationData.company || "",
          document: donationData.document || "",
          amount: donationData.amount || 0,
          reference: `LOBOS-${Date.now()}`,
          date: new Date().toLocaleDateString("es-CO"),
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo generar el certificado.");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");

      downloadLink.href = url;
      downloadLink.download = "certificado-donacion-lobosfc.pdf";

      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al generar el certificado:", error);
      alert("No se pudo generar el certificado.");
    } finally {
      setGeneratingCertificate(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex min-h-screen items-center px-6 pb-24 pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 uppercase tracking-[0.4em] text-red-500">
            Donación recibida
          </p>

          <h1 className="mb-8 text-5xl font-black leading-none md:text-8xl">
            Gracias por
            <br />
            ser parte del impacto.
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-2xl">
            Tu aporte ayuda a fortalecer el desarrollo juvenil, la disciplina y
            las oportunidades sociales a través del fútbol.
          </p>

          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-red-700"
            >
              Volver al inicio
            </Link>

            <button
              type="button"
              onClick={handleDownloadCertificate}
              disabled={generatingCertificate}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:border-red-500 hover:bg-red-600/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {generatingCertificate
                ? "Generando certificado..."
                : "Descargar certificado"}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}