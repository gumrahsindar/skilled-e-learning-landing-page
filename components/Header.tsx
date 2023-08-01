import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='section-padding pt-4 tablet:pt-6'>
      {/* logo & button */}
      <nav className='mb-10 tablet:mb-24 laptop:mb-44 flex justify-between items-center'>
        <div className='relative h-6 w-24 laptop:h-8 laptop:w-32'>
          <Image src='/logo-dark.svg' fill alt='logo' />
        </div>
        <Link
          href='#'
          className='rounded-3xl px-6 laptop:px-8 py-2.5 laptop:py-4 font-bold text-sm laptop:text-base bg-midnightBlue text-white hover:bg-lavenderBlue duration-200 z-50'
        >
          Get Started
        </Link>
      </nav>

      {/* hero container */}
      <div className='relative flex flex-col tablet:flex-row tablet:justify-between tablet:overflow-x-clip-hidden'>
        {/* hero text & button */}
        <div className='mb-12 max-w-sm desktop:max-w-lg laptop:mb-0 flex flex-col'>
          <h1 className='mb-7 text-midnightBlue font-extrabold text-3xl desktop:text-4xl'>
            Maximize skill, minimize budget
          </h1>
          <p className='mb-6 text-slateGray text-sm desktop:text-base'>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <Link
            href='#'
            className='rounded-full w-fit px-10 laptop:px-8 py-4 laptop:py-5 font-bold text-white text-sm laptop:text-base bg-gradient-to-b from-atomicTangerine to-pinkFlamingo hover:opacity-60 duration-200'
          >
            Get Started
          </Link>
        </div>

        {/* hero image */}
        <div className='-z-10'>
          {/* mobile image */}
          <Image
            src='/image-hero-mobile@2x.webp'
            width={650}
            height={650}
            alt='hero mobile image'
            className='mx-auto scale-125 tablet:hidden'
          />
          {/* tablet image */}

          <Image
            src='/image-hero-tablet@2x.webp'
            width={650}
            height={650}
            alt='hero tablet image'
            className='max-w-fit absolute -right-[20rem] -bottom-20 hidden tablet:block laptop:hidden'
          />
          <Image
            src='/image-hero-desktop@2x.webp'
            width={1000}
            height={1000}
            alt='hero desktop image'
            className='max-w-fit absolute -right-[32rem] -bottom-52 hidden tablet:hidden laptop:block'
          />
        </div>
      </div>
    </header>
  )
}
export default Header