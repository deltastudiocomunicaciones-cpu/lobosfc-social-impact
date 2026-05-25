"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, Language } from "@/app/data/translations";

type TranslationType = (typeof translations)["en"];

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationType;
};

const defaultLang: Language = "es";

const LanguageContext = createContext<LanguageContextType>({
  lang: defaultLang,
  setLang: () => {},
  t: translations[defaultLang],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(defaultLang);

  useEffect(() => {
    const savedLang = localStorage.getItem("lobosfc-lang");

    if (
      savedLang === "es" ||
      savedLang === "en" ||
      savedLang === "it" ||
      savedLang === "ar"
    ) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lobosfc-lang", newLang);
  };

  const t = translations[lang] ?? translations[defaultLang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}