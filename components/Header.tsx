import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="section-padding pt-4 tablet:h-[750px] tablet:pt-6">
      {/* logo & button */}
      <nav className="mb-10 flex items-center justify-between tablet:mb-24 laptop:mb-44">
        <div className="relative h-6 w-24 laptop:h-8 laptop:w-32">
          <Image src="/logo-dark.svg" fill alt="logo" />
        </div>
        <Link
          href="#"
          className="z-20 rounded-full bg-midnightBlue px-6 py-2.5 text-sm font-bold text-white duration-200 hover:bg-lavenderBlue laptop:px-8 laptop:py-4 laptop:text-base"
        >
          Get Started
        </Link>
      </nav>

      {/* hero container */}
      <div className="relative z-10 flex flex-col tablet:flex-row tablet:justify-between">
        {/* hero text & button */}
        <div className="z-50 mb-12 flex max-w-sm flex-col laptop:mb-0 desktop:max-w-lg">
          <h1 className="mb-7 text-3xl font-extrabold text-midnightBlue desktop:text-4xl">
            Maximize skill, minimize budget
          </h1>
          <p className="mb-6 text-sm text-slateGray desktop:text-base">
            Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life
            you want.
          </p>
          <Link
            href="#"
            className="w-fit rounded-full bg-gradient-to-b from-atomicTangerine to-pinkFlamingo px-10 py-4 text-sm font-bold text-white duration-200 hover:opacity-60 laptop:px-8 laptop:py-5 laptop:text-base"
          >
            Get Started
          </Link>
        </div>

        {/* mobile image */}
        <Image
          src="/image-hero-mobile@2x.webp"
          width={650}
          height={650}
          alt="hero mobile image"
          className="mx-auto scale-125 tablet:hidden"
        />

        <div>
          {/* tablet image */}

          <Image
            src="/image-hero-tablet@2x.webp"
            width={650}
            height={650}
            alt="hero tablet image"
            className="absolute -bottom-20 -right-[20rem] hidden tablet:block laptop:hidden"
          />
          <Image
            src="/image-hero-desktop@2x.webp"
            width={950}
            height={1000}
            alt="hero desktop image"
            className="absolute -bottom-28 -right-[32rem] hidden min-w-[52rem] tablet:hidden laptop:block"
          />
        </div>
      </div>
    </header>
  )
}
export default Header
