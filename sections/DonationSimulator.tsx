"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const amounts = [500000, 1000000, 3000000, 5000000, 10000000];

function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function DonationSimulator() {
  const { t } = useLanguage();
  const [amount, setAmount] = useState(1000000);

  const taxBenefit = amount * 0.25;

  return (
    <section
      id="donation-simulator"
      className="bg-[#F5F5F5] text-black px-6 py-32"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.4em] text-red-600 mb-6">
            {t.simulatorLabel}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
            {t.simulatorTitle1}
            <br />
            {t.simulatorTitle2}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
            {t.simulatorText}
          </p>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-10 border border-black/10 shadow-sm">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-6">
            {t.selectDonationAmount}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {amounts.map((value) => (
              <button
                key={value}
                onClick={() => setAmount(value)}
                className={`rounded-2xl py-4 font-bold transition-all ${
                  amount === value
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-black"
                }`}
              >
                {formatCOP(value)}
              </button>
            ))}
          </div>

          <label className="block text-sm uppercase tracking-widest text-gray-500 mb-3">
            {t.customAmount}
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border border-black/10 rounded-2xl px-5 py-4 mb-8 outline-none focus:border-red-600"
          />

          <div className="border-t border-black/10 pt-8 space-y-5">
            <div className="flex justify-between gap-6">
              <span className="text-gray-600">{t.yourContribution}</span>
              <strong>{formatCOP(amount)}</strong>
            </div>

            <div className="flex justify-between gap-6">
              <span className="text-gray-600">
                {t.potentialTaxBenefit}
              </span>
              <strong className="text-red-600">
                {formatCOP(taxBenefit)}
              </strong>
            </div>

            <div className="bg-black text-white rounded-3xl p-6 mt-6">
              <p className="text-sm uppercase tracking-widest text-red-500 mb-3">
                {t.estimatedImpact}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {t.simulatorImpactText}
              </p>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              *{t.legalTaxNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}