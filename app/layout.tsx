import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShabbyMinds - AI & Web Solutions",
  description:
    "Your trusted partner for premium white label technology solutions. Transform your business with our enterprise-grade AI and web development services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-foreground antialiased`}>{children}</body>
    </html>
  )
}
