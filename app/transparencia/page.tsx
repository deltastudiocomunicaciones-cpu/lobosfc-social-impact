import Link from "next/link";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

const areas = [
  { number: "01", title: "Régimen Tributario Especial — RTE", text: "Solicitudes, documentos y posteriores actualizaciones del Registro Web.", href: "/transparencia/rte", label: "Consultar RTE" },
  { number: "02", title: "Información institucional", text: "Estatutos, certificados y documentación jurídica pública.", label: "Documentación en preparación" },
  { number: "03", title: "Información financiera", text: "Estados financieros e informes que deban ser objeto de publicación.", label: "Documentación en preparación" },
  { number: "04", title: "Gestión e impacto", text: "Informes oficiales de gestión, resultados e impacto cuando estén aprobados.", label: "Próxima publicación" },
];

export default function TransparenciaPage() {
  return <main className="bg-[#f3f1ec] text-black min-h-screen"><Navbar />
    <section className="pt-48 pb-24 px-6 border-b border-black/10"><div className="max-w-7xl mx-auto"><p className="uppercase tracking-[0.4em] text-red-600 text-sm mb-6">Acceso público</p><h1 className="text-6xl md:text-[9rem] font-black tracking-[-0.07em] leading-[0.8]">Transparencia</h1><p className="mt-12 text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">Información institucional, financiera y tributaria de la Corporación Deportiva Lobos Fútbol Club.</p></div></section>
    <section className="px-6 py-20"><div className="max-w-7xl mx-auto"><p className="text-xl md:text-3xl leading-relaxed max-w-5xl">Ponemos a disposición de la comunidad la información institucional y documental de la Corporación, fortaleciendo nuestros principios de transparencia, acceso a la información y adecuada gestión de los recursos destinados al cumplimiento de nuestro objeto social.</p></div></section>
    <section className="px-6 pb-32"><div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-px bg-black/10">{areas.map(area => <article key={area.number} className="bg-white p-8 md:p-12 min-h-[330px] flex flex-col"><span className="text-xs text-gray-400 tracking-[0.25em]">{area.number}</span><h2 className="text-3xl font-black mt-10 mb-5">{area.title}</h2><p className="text-gray-600 leading-relaxed max-w-lg">{area.text}</p>{area.href ? <Link className="mt-auto pt-10 uppercase tracking-[0.2em] text-xs font-bold text-red-600" href={area.href}>{area.label} →</Link> : <span className="mt-auto pt-10 uppercase tracking-[0.2em] text-xs font-bold text-gray-400">{area.label}</span>}</article>)}</div></section><Footer /></main>;
}
