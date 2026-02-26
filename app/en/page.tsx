import type { Metadata } from 'next'
import HomePage from '../page'

export const metadata: Metadata = {
  title: 'Elys Invitation Code - Buy Official Access Code',
  description:
    'Buy official Elys invitation codes with USD checkout and instant delivery after payment.',
  keywords: [
    'elys invitation code',
    'elys invite code',
    'elys app invitation code',
    'buy elys invitation code',
  ],
  alternates: {
    canonical: '/en',
  },
  openGraph: {
    title: 'Elys Invitation Code - Buy Official Access Code',
    description: 'Official Elys invitation code checkout page with instant delivery.',
    url: 'https://www.elys-app.com/en',
    siteName: 'Elys Invitation Code',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elys Invitation Code - Buy Official Access Code',
    description: 'Official Elys invitation code checkout page with instant delivery.',
  },
}

export default function EnglishPage() {
  return <HomePage />
}
