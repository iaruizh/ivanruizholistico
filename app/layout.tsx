import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Iván Alejandro Ruiz | Terapeuta Holointegrativo · Bogotá',
  description: 'Ingeniero Mecatrónico y Terapeuta Holointegrativo. Fundador de ZANATTE.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
