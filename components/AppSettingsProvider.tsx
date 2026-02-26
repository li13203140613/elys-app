'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  AppCurrency,
  AppLanguage,
  TRANSLATIONS,
  TranslationPack,
  convertUsdToCurrency,
  formatCurrency,
  getDefaultCurrencyByLanguage,
  normalizeCurrency,
  normalizeLanguage,
} from '@/lib/i18n'

const STORAGE_LANGUAGE_KEY = 'elys_language'
const STORAGE_CURRENCY_KEY = 'elys_currency'

interface AppSettingsContextValue {
  language: AppLanguage
  currency: AppCurrency
  t: TranslationPack
  setLanguage: (language: AppLanguage) => void
  setCurrency: (currency: AppCurrency) => void
  formatPriceFromUsd: (usdAmount: number) => string
}

const AppSettingsContext = createContext<AppSettingsContextValue | undefined>(undefined)

interface AppSettingsProviderProps {
  children: React.ReactNode
  initialLanguage?: AppLanguage
  initialCurrency?: AppCurrency
  forceInitialLocale?: boolean
}

export function AppSettingsProvider({
  children,
  initialLanguage = 'zh-CN',
  initialCurrency = 'cny',
  forceInitialLocale = false,
}: AppSettingsProviderProps) {
  const [language, setLanguageState] = useState<AppLanguage>(initialLanguage)
  const [currency, setCurrencyState] = useState<AppCurrency>(initialCurrency)

  useEffect(() => {
    if (forceInitialLocale) {
      setLanguageState(initialLanguage)
      setCurrencyState(initialCurrency)
      return
    }

    const storedLanguage = typeof window !== 'undefined'
      ? window.localStorage.getItem(STORAGE_LANGUAGE_KEY)
      : null
    const detectedLanguage = normalizeLanguage(storedLanguage || navigator.language)

    const storedCurrency = typeof window !== 'undefined'
      ? window.localStorage.getItem(STORAGE_CURRENCY_KEY)
      : null
    const detectedCurrency = storedCurrency
      ? normalizeCurrency(storedCurrency)
      : getDefaultCurrencyByLanguage(detectedLanguage)

    setLanguageState(detectedLanguage)
    setCurrencyState(detectedCurrency)
  }, [forceInitialLocale, initialCurrency, initialLanguage])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  function setLanguage(languageValue: AppLanguage) {
    setLanguageState(languageValue)
    window.localStorage.setItem(STORAGE_LANGUAGE_KEY, languageValue)

    const autoCurrency = getDefaultCurrencyByLanguage(languageValue)
    setCurrencyState(autoCurrency)
    window.localStorage.setItem(STORAGE_CURRENCY_KEY, autoCurrency)
  }

  function setCurrency(currencyValue: AppCurrency) {
    setCurrencyState(currencyValue)
    window.localStorage.setItem(STORAGE_CURRENCY_KEY, currencyValue)
  }

  const value = useMemo<AppSettingsContextValue>(() => {
    return {
      language,
      currency,
      t: TRANSLATIONS[language],
      setLanguage,
      setCurrency,
      formatPriceFromUsd: (usdAmount: number) => {
        const converted = convertUsdToCurrency(usdAmount, currency)
        return formatCurrency(converted, currency, language)
      },
    }
  }, [language, currency])

  return (
    <AppSettingsContext.Provider value={value}>
      {children}
    </AppSettingsContext.Provider>
  )
}

export function useAppSettings() {
  const ctx = useContext(AppSettingsContext)
  if (!ctx) {
    throw new Error('useAppSettings must be used within AppSettingsProvider')
  }
  return ctx
}
