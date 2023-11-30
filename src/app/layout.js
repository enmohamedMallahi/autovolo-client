import { Inter, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import CookieAlert from '@/components/CookiesAlert'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata = {
  title: 'Autovolo | Car Rental Site',
  description: 'Created by mohaXmall',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <CookieAlert />
        {children}
        <Footer />
      </body>
    </html>
  )
}
