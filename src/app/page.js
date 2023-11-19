import Navbar from '@/components/Navbar'
import Searcher from '@/components/Searcher'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      {/* <nav className="py-4 border flex items-center justify-center">
        <Link className="cursor-pointer" href="/">
          <img src="https://www.1servicecar.com/images/logo.png" alt="" />
        </Link>
      </nav> */}

      <Searcher />
    </>
  )
}
