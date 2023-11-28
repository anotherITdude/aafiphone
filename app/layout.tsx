import { ToasterProvider } from '@/providers/toast-provider';
import type { Metadata } from 'next'
import './globals.css'


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
    <html lang="en" className="font-al">
      <link rel="icon" href="../public/favicon.png" />
      <body className="">
      <ToasterProvider />
        {children}</body>
    </html>
  );
}
