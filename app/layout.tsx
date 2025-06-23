import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hiren Lekhadiya - Software Engineer Portfolio",
  description:
    "Professional portfolio of Hiren Lekhadiya, a Software Engineer with 5+ years of experience in React.js, Node.js, and MongoDB. Proven track record in building scalable web applications.",
  keywords: "software engineer, fullstack developer, React.js, Node.js, MongoDB, web development, portfolio",
  authors: [{ name: "Hiren Lekhadiya" }],
  openGraph: {
    title: "Hiren Lekhadiya - Software Engineer Portfolio",
    description: "Professional portfolio showcasing fullstack development expertise with React, Node.js, and MongoDB",
    type: "website",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={false}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
