import type { Metadata } from 'next'
import './globals.css'
import { Merriweather } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import MobileDock from '@/components/ui/mobile-dock'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust weights as needed
  variable: '--font-merriweather',
})

export const metadata = {
  title: 'Aditya Zaveri | Full Stack Developer',
  description: 'Portfolio of Aditya Zaveri — showcasing projects, skills, and experience.',
  openGraph: {
    title: 'Aditya Zaveri | Full Stack Developer',
    description: 'Portfolio of Aditya Zaveri — showcasing projects, skills, and experience.',
    url: 'https://zaveriadi7.github.io/hello/',
    siteName: 'Aditya Zaveri Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aditya Zaveri Portfolio'
      }
    ],
    type: 'website'
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={merriweather.variable}>
      <head>
        {/* <link rel="icon" href="/favicon.ico" /> */}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aditya Zaveri",
              url: "https://adityazaveri.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/aditya-zaveri/",
                "https://github.com/zaveriadi7",
              ],
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "Classplus",
              },
            }),
          }}
        />
      </head>
      <body className="transition-colors duration-700 ease-in-out">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          enableTransitionOnChange
        >
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          {children}
          <MobileDock />
        </ThemeProvider>
      </body>
    </html>
  );
}
