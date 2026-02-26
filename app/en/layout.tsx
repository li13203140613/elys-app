import { AppSettingsProvider } from '@/components/AppSettingsProvider'

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppSettingsProvider
      initialLanguage="en"
      initialCurrency="usd"
      forceInitialLocale
    >
      {children}
    </AppSettingsProvider>
  )
}
