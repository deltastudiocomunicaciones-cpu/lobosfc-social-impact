"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { Language } from "@/app/data/translations";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const languages: {
    code: Language;
    flag: string;
  }[] = [
    { code: "es", flag: "/flags/es.svg" },
    { code: "en", flag: "/flags/us.svg" },
    { code: "it", flag: "/flags/it.svg" },
    { code: "ar", flag: "/flags/ae.svg" },
  ];

  return (
    <div className="hidden md:flex items-center gap-3">
      {languages.map((item) => (
        <button
          key={item.code}
          onClick={() => setLang(item.code)}
          className={`transition-all hover:scale-110 ${
            lang === item.code
              ? "opacity-100"
              : "opacity-50 hover:opacity-100"
          }`}
        >
          <Image
            src={item.flag}
            alt={item.code}
            width={26}
            height={26}
            className="rounded-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}