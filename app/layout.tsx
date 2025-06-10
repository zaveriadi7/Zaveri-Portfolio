import type { Metadata } from "next";
import "./globals.css";
import { Merriweather } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import MobileDock from "@/components/ui/mobile-dock";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // adjust weights as needed
  variable: "--font-merriweather",
});

export const metadata = {
  title: "Aditya Zaveri | Full Stack Developer",
  description:
    "Portfolio of Aditya Zaveri — showcasing projects, skills, and experience.",
  openGraph: {
    title: "Aditya Zaveri | Full Stack Developer",
    description:
      "Portfolio of Aditya Zaveri — showcasing projects, skills, and experience.",
    url: "https://zaveriadi7.github.io/hello/",
    siteName: "Aditya Zaveri Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Zaveri Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={merriweather.variable}>
      <head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="icon"
          type="image/png"
          href=""
          href="data:image/png;base64,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"
        />

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
