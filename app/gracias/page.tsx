import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

export default function GraciasPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="min-h-screen flex items-center px-6 pt-40 pb-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-red-500 mb-6">
            Donación recibida
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
            Gracias por
            <br />
            ser parte del impacto.
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Tu aporte ayuda a fortalecer el desarrollo juvenil, la disciplina y
            las oportunidades sociales a través del fútbol.
          </p>

          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 transition-all uppercase tracking-[0.2em] text-sm font-bold"
          >
            Volver al inicio

<button
  onClick={async () => {
    const savedDonation =
      localStorage.getItem("lobosDonationData");

    if (!savedDonation) {
      alert("No se encontró información de la donación.");
      return;
    }

    const donationData = JSON.parse(savedDonation);

    const response = await fetch(
      "/api/generate-certificate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: donationData.name,
          company: donationData.company,
          document: donationData.document,
          amount: donationData.amount,
          reference: `LOBOS-${Date.now()}`,
          date: new Date().toLocaleDateString("es-CO"),
        }),
      }
    );

    if (!response.ok) {
      alert("No se pudo generar el certificado.");
      return;
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "certificado-lobosfc.pdf";

    document.body.appendChild(a);

    a.click();

    a.remove();

    window.URL.revokeObjectURL(url);
  }}

  className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-600/10 transition-all uppercase tracking-[0.2em] text-sm font-bold"
>
  Descargar certificado
</button>
            
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}