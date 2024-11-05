import type { Metadata } from 'next'

import './globals.css'

import { GeistSans } from 'geist/font'

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'vissih',
  description: 'Built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={GeistSans.className}>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
