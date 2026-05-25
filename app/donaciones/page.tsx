"use client";

import { useLanguage } from "@/app/context/LanguageContext";

import Navbar from "@/sections/Navbar";
import DonationSimulator from "@/sections/DonationSimulator";
import TaxBenefit from "@/sections/TaxBenefit";
import DonationCertificate from "@/sections/DonationCertificate";
import CorporatePlans from "@/sections/CorporatePlans";
import WhyDonate from "@/sections/WhyDonate";
import DonationsFlow from "@/sections/DonationsFlow";
import CorporateCTA from "@/sections/CorporateCTA";
import WompiCheckout from "@/sections/WompiCheckout";
import Footer from "@/sections/Footer";

export default function DonacionesPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-black text-white">
      <Navbar />

      <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
  <div className="absolute inset-0">
    <img
      src="/images/santi-hero.jpg"
      alt="LobosFC Corporation"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/60" />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
  </div>

  <div className="relative z-10 w-full px-6 pt-40 pb-24">
    <div className="max-w-7xl mx-auto">
      <p className="uppercase tracking-[0.4em] text-red-500 mb-6">
        {t.donationHeroLabel}
      </p>

      <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-none mb-8 max-w-5xl">
        {t.donationHeroTitle1}
        <br />
        {t.donationHeroTitle2}
      </h1>

      <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
        {t.donationHeroText}
      </p>
    </div>
  </div>
</section>

      <DonationSimulator />
      <TaxBenefit />
      <DonationCertificate />
      <CorporatePlans />
      <WhyDonate />
      <DonationsFlow />
      <CorporateCTA />
      <WompiCheckout />
      <Footer />
    </main>
  );
}