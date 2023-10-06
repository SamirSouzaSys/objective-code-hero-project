import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

const myFonts = localFont({
  src: [
    {
      path: './fonts/ptsans-bolditalic-webfont.woff2',
      style: 'normal'
    },
    {
      path: './fonts/ptsans-bold-webfont.woff2',
      style: 'normal'
    },
    {
      path: './fonts/ptsanscaption-bold-webfont.woff2',
      style: 'normal'
    },
    {
      path: './fonts/ptsans-italic-webfont.woff2',
      style: 'normal'
    },
    {
      path: './fonts/ptsanscaption-regular-webfont.woff2',
      style: 'normal'
    },
    {
      path: './fonts/ptsans-regular-webfont.woff2',
      style: 'normal'
    },
  ]
})

export const metadata: Metadata = {
  title: 'Objective Code Hero',
  description: 'Objective Code Hero App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFonts.className}>
      <body>{children}</body>
    </html>
  )
}
