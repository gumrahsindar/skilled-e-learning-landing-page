import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skilled e-learning platform',
  description: 'Maximiza skill, minimize budget',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={`container max-w-[90rem] overflow-hidden ${jakarta.className}`}>{children}</div>
      </body>
    </html>
  )
}
