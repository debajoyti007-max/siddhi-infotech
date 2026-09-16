import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "bn" | "en" | "hi"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "bn",
  setLang: () => {},
})

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("siddhi_infotech_lang")
    if (saved === "en" || saved === "hi" || saved === "bn") {
      return saved
    }
    return "bn" // Bengali is default as requested!
  })

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem("siddhi_infotech_lang", newLang)
    document.documentElement.lang = newLang
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)