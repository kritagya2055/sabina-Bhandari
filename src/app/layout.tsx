import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Free Business Growth Strategy Session',
  description: 'Book your free business growth strategy session with Kritagya today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
