"use client"
import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Cairo } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ConsultationModal } from "@/components/consultation-modal"
import { ConsultationTriggerButton } from "@/components/consultation-trigger-button"
import { useConsultationModal } from "@/hooks/use-consultation-modal"
import "./globals.css"

const geistSans = GeistSans
const geistMono = GeistMono

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
})

function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, openModal, closeModal } = useConsultationModal()

  return (
    <>
      {children}
      <ConsultationTriggerButton onClick={openModal} />
      <ConsultationModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans antialiased ${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cairo.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
