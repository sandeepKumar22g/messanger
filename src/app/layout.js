import './globals.css'
import { Inter } from 'next/font/google'

import ToasterContext from "../context/ToasterContext"
import AuthContext from '../context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Messanger clone',
  description: 'Messanger clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
        <ToasterContext />
        {children}
        </AuthContext>
      </body>
    </html>
  )
}
