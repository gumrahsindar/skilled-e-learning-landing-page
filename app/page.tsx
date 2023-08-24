import Features from '@/components/Features'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Features />
      </main>
      <footer id="footer" className="section-padding flex h-[7.5rem] items-center justify-between bg-midnightBlue">
        <div className="relative h-6 w-24 laptop:h-8 laptop:w-32">
          <Image src="/logo-light.svg" fill alt="logo" />
        </div>
        <Link
          href="#"
          className="hover:gradient rounded-full bg-gradient-to-t from-dodgerBlue to-pinkFlamingo px-6 py-2.5 text-sm  font-bold text-white duration-200 laptop:px-8 laptop:py-4 laptop:text-base"
        >
          Get Started
        </Link>
      </footer>
    </>
  )
}
