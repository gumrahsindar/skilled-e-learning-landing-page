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
      <footer
        id='footer'
        className='section-padding h-[7.5rem] flex items-center justify-between bg-midnightBlue'
      >
        <div className='relative h-6 w-24 laptop:h-8 laptop:w-32'>
          <Image src='/logo-light.svg' fill alt='logo' />
        </div>
        <Link
          href='#'
          className='rounded-full px-6 laptop:px-8 py-2.5 laptop:py-4 font-bold text-sm laptop:text-base  text-white bg-gradient-to-t from-dodgerBlue to-pinkFlamingo hover:gradient duration-200'
        >
          Get Started
        </Link>
      </footer>
    </>
  )
}
