import type { Metadata } from 'next'
import { IBM_Plex_Sans as FontSans } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/home/header'
import { ClerkProvider } from '@clerk/nextjs'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'SpeakEasyAI',
  description: 'Convert your video or voice into a Blog Post in seconds with the power of AI!',
  icons: {
    icon: '/icon.ico',
  },
  // metadataBase: new URL(ORIGIN_URL),
  // alternates: {
  //   canonical: ORIGIN_URL,
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
