import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduPlatform - Learn English & Engineering Drawing',
  description: 'Professional online courses in English language learning and Engineering Drawing. Master grammar, vocabulary, conversation, technical drawing, AutoCAD and more with expert instructors.',
  keywords: 'English courses, Engineering Drawing, AutoCAD, Grammar, Vocabulary, Technical Drawing, Online Learning',
  authors: [{ name: 'EduPlatform' }],
  openGraph: {
    title: 'EduPlatform - Learn English & Engineering Drawing',
    description: 'Professional online courses in English language learning and Engineering Drawing',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduPlatform - Learn English & Engineering Drawing',
    description: 'Professional online courses in English language learning and Engineering Drawing',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}