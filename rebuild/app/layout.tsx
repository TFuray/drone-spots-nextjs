import NavBar from '@/components/navBar/NavBar'
import { Theme, ThemePanel } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from './auth/Provider'
import './globals.css'
import './theme-config.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Drone Spots',
  description: 'Find The Best Spots'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={inter.variable}>
      <body className={`${inter.className} `}>
        <AuthProvider>
          <Theme>
            <NavBar />
            {children}
          </Theme>
        </AuthProvider>
      </body>
    </html>
  )
}
