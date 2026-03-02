'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import uk from './translations/uk.json'
import en from './translations/en.json'

export type Locale = 'uk' | 'en'

type TranslationsType = typeof uk

const translations: Record<Locale, TranslationsType> = { uk, en }

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('uk')

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('lang') as Locale | null
    if (saved === 'uk' || saved === 'en') {
      setLocaleState(saved)
    }
  }, [])

  // Persist and update html lang attribute
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('lang', newLocale)
    document.documentElement.lang = newLocale
  }

  /**
   * Resolve a dot-notation key like "hero.title1" from the translations object.
   * Falls back to the key itself if not found.
   */
  const t = (key: string): string => {
    const parts = key.split('.')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[locale]
    for (const part of parts) {
      if (value === undefined || value === null) return key
      value = value[part]
    }
    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}
