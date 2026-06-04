import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { Toaster } from "@/components/ui/sonner";
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'Priya Kumari Chaudhary | AI/ML Engineer & Agentic AI Developer',
  description: 'Portfolio of Priya Kumari Chaudhary - Third-Year B.Tech AI & Data Science Student, AI/ML Engineer, Agentic AI Developer, and Full-Stack Developer. Currently interning at Aptitude Guru.',
  keywords: ['AI Engineer', 'ML Engineer', 'Agentic AI', 'Full-Stack Developer', 'Data Science', 'Portfolio'],
  authors: [{ name: 'Priya Kumari Chaudhary' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Priya Kumari Chaudhary | AI/ML Engineer & Agentic AI Developer',
    description: 'Building intelligent systems through AI, ML, Agentic AI, Robotics, and Full-Stack Development.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased noise-overlay selection:bg-primary/30 selection:text-primary`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          enableColorScheme
        >
          {children}
          <CustomCursor />
          <Toaster />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
