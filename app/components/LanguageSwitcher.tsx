"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { Language } from "@/app/data/translations";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const languages: Language[] = ["es", "en", "it", "ar"];

  return (
    <div className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/70">
      {languages.map((item) => (
        <button
          key={item}
          onClick={() => setLang(item)}
          className={`transition-all hover:text-red-500 ${
            lang === item ? "text-red-500" : ""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}