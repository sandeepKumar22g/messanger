import './globals.css'
import { Inter } from 'next/font/google'

import ToasterContext from "../context/ToasterContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Messanger clone',
  description: 'Messanger clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  )
}
