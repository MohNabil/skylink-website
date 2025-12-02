import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SkyLink - Empowering Businesses through Digital Innovation",
  description:
    "SkyLink delivers innovative, custom-built technology solutions including ERP systems, healthcare IT, electronic archiving, and digital transformation services across the Arab region, United States, and global markets.",
  keywords:
    "ERP systems, hospital information systems, electronic archiving, custom software development, healthcare IT, digital transformation, SkyLink",
  authors: [{ name: "SkyLink Team" }],
  openGraph: {
    title: "SkyLink - Empowering Businesses through Digital Innovation",
    description:
      "Delivering tailored, high-performance software and digital solutions that empower businesses across industries through innovation, quality, and exceptional customer service.",
    url: "https://skylink.com",
    siteName: "SkyLink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyLink - Empowering Businesses through Digital Innovation",
    description:
      "Custom-built technology solutions for businesses worldwide, specializing in ERP platforms, healthcare IT systems, and digital transformation.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
