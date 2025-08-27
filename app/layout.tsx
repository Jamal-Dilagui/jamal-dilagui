import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jamal-Eddine Dilagui - Front-End Developer | React.js & Next.js',
  description: 'Front-End Developer specializing in React.js, Next.js, and modern web technologies. Based in Marrakech, Morocco. Creating premium, responsive web experiences.',
  keywords: 'Front-End Developer, React.js, Next.js, JavaScript, TypeScript, Web Development, Marrakech, Morocco',
  authors: [{ name: 'Jamal-Eddine Dilagui' }],
  creator: 'Jamal-Eddine Dilagui',
  publisher: 'Jamal-Eddine Dilagui',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jamal-eddine-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jamal-Eddine Dilagui - Front-End Developer',
    description: 'Front-End Developer specializing in React.js, Next.js, and modern web technologies.',
    url: 'https://jamal-eddine-portfolio.vercel.app',
    siteName: 'Jamal-Eddine Dilagui Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jamal-Eddine Dilagui - Front-End Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jamal-Eddine Dilagui - Front-End Developer',
    description: 'Front-End Developer specializing in React.js, Next.js, and modern web technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
