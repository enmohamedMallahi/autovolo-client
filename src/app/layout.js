import { Inter, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata = {
  title: 'Autovolo | Car Rental Site',
  description: 'Created by mohaXmall',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
