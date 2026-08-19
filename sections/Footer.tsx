"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050505] text-white px-6 py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">

        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">
            {t.foundationName}
          </h2>

          <p className="text-gray-400 max-w-xl leading-relaxed">
            {t.footerText}
          </p>
        </div>

        <div>
          <h3 className="uppercase tracking-widest text-sm text-red-500 mb-6">
  {t.footerCorporation}
</h3>

          <ul className="space-y-3 text-gray-400">
            <li><Link href="/#mission" className="hover:text-red-500 transition-all">{t.mission}</Link></li>
            <li><Link href="/#programs" className="hover:text-red-500 transition-all">{t.programs}</Link></li>
            <li><Link href="/#impact" className="hover:text-red-500 transition-all">{t.impact}</Link></li>
            <li><Link href="/transparencia" className="hover:text-red-500 transition-all">{t.transparency}</Link></li>
            <li><Link href="/transparencia/rte-2026" className="hover:text-red-500 transition-all">RTE 2026</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase tracking-widest text-sm text-red-500 mb-6">
            {t.footerConnect}
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li><a href="/donaciones#checkout" className="hover:text-red-500 transition-all">{t.donate}</a></li>
            <li>
              <a
                href="https://wa.me/573001234567?text=Hola%20LobosFC%20Foundation,%20quiero%20informaci%C3%B3n%20sobre%20donaciones."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-all"
              >
                {t.whatsapp}
              </a>
            </li>
            <li>
              <a
                href="https://corporacionlobosfc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-all"
              >
                Corporación Lobos FC
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase tracking-widest text-sm text-red-500 mb-6">
            Sponsors
          </h3>

          <ul className="space-y-3 text-gray-400"><li>
                
           </li>
             <a
              href="https://misadi.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-all" >

            
            SADI
            </a>

            <li></li>
            <a
                href="https://wolves-territory.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-all" >

                Wolves Territory
                </a>

            

            <li>
              <Link
              href="/#official-allies"
              className="hover:text-red-500 transition-all block mt-6"
            >
            {t.becomeSponsor}
             </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
        <div><p>© 2026 {t.foundationName}. {t.footerRights}</p><p className="mt-2">NIT 901696551</p></div>
        <div className="md:text-right"><Link href="/transparencia/rte-2026" className="hover:text-white transition-all">Régimen Tributario Especial — RTE 2026</Link><p className="mt-2">{t.footerPowered}</p></div>
      </div>
    </footer>
  );
}
