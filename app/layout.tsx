import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GIDA Warriors - Gaming & Entertainment Legacy",
  description: "Passion, Brotherhood, and Adventure. Explore the legacy of GIDA Warriors.",
  generator: "v0.app",
   icons: {
    icon: "/Users/prathammishra/Desktop/neek/my-app/public/kd.jpeg", // Path relative to the /public folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}

      </body>
    </html>
  )
}
