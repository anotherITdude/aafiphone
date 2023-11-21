import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "AAF Iphone 2023",
  description: "AAF Iphone November 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="../public/favicon.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
