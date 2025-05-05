import type { Metadata } from 'next'
import './globals.css'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust weights as needed
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Aditya Zaveri',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en"  className={merriweather.variable}>
      <body>{children}</body>
    </html>
  )
}
