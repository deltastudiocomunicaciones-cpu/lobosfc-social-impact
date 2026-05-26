"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function WompiCheckout() {
  const { t } = useLanguage();

  return (
    <section
      id="checkout"
      className="bg-black text-white px-6 py-32"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.4em] text-red-500 mb-6">
            {t.checkoutLabel}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
            {t.checkoutTitle1}
            <br />
            {t.checkoutTitle2}
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t.checkoutText}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT */}

          <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-10">

            <p className="uppercase tracking-widest text-sm text-red-500 mb-8">
              {t.donationSummary}
            </p>

            <div className="space-y-6">

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">
                  {t.donationType}
                </span>

                <span className="font-semibold">
                  {t.corporateContribution}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">
                  {t.estimatedAmount}
                </span>

                <span className="font-semibold">
                  $5.000.000 COP
                </span>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-[#F5F5F5] text-black rounded-[40px] p-8 md:p-10">

            <p className="uppercase tracking-widest text-sm text-gray-500 mb-8">
              {t.paymentMethod}
            </p>

            <div className="space-y-4 mb-10">

              <div className="border border-black/10 rounded-2xl px-6 py-5 flex justify-between items-center">
                <span>{t.creditCard}</span>
                <span>Visa · Mastercard</span>
              </div>

              <div className="border border-black/10 rounded-2xl px-6 py-5 flex justify-between items-center">
                <span>{t.pseTransfer}</span>
                <span>Banks Colombia</span>
              </div>

              <div className="border border-black/10 rounded-2xl px-6 py-5 flex justify-between items-center">
                <span>Nequi</span>
                <span>{t.instantPayment}</span>
              </div>

            </div>

            <a
  href="https://checkout.wompi.co/p/1b9c8e5f-8a0c-4b3d-9c3e-2a1f0e5d6c7f"
  target="_blank"
  rel="noopener noreferrer"
  className="flex w-full items-center justify-center bg-red-600 hover:bg-red-700 transition-all py-5 rounded-full text-white font-bold uppercase tracking-[0.25em] text-sm"
>
<a
  href="TU_LINK_REAL_DE_WOMPI"
  target="_blank"
  rel="noopener noreferrer"
  className="flex w-full items-center justify-center bg-red-600 hover:bg-red-700 transition-all py-5 rounded-full text-white font-bold uppercase tracking-[0.25em] text-sm"
>
  {t.continuePayment}
</a> 
  className="flex w-full items-center justify-center bg-red-600 hover:bg-red-700 transition-all py-5 rounded-full text-white font-bold uppercase tracking-[0.25em] text-sm"

  {t.continuePayment}
</a>

          </div>

        </div>

      </div>
    </section>
  );
}