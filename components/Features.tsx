import featuresData from '@/constants/featuesData'
import Link from 'next/link'

const Features = () => {
  return (
    <section
      id='features'
      className='section-padding mt-10 tablet:-mt-20 laptop:mt-10 pb-20 tablet:pb-24 desktop:pb-36 bg-gradient-to-t from-[#F0F1FF] to-white'
    >
      {/* grid container */}
      <div className='grid gap-y-12 tablet:gap-x-3 tablet:gap-y-16 desktop:gap-x-8 desktop:gap-y-20 tablet:grid-cols-2 laptop:grid-cols-3'>
        {/* grid items */}
        <div className='rounded-lg bg-gradient-to-t from-pinkFlamingo to-atomicTangerine px-7 tablet:px-8 py-6 font-extrabold text-lg text-white tablet:pt-14 desktop:text-2xl'>
          Check out our most popular courses!
        </div>
        {featuresData.map((features) => (
          <div
            key={features.id}
            className='flex flex-col h-full relative bg-white rounded-lg px-7 tablet:px-8 pt-14 pb-8'
          >
            <img
              src={features.icon}
              alt={features.title}
              className='absolute -top-7'
            />
            <h2 className='mb-4 font-extrabold text-[1.25rem] desktop:text-lg'>
              {features.title}
            </h2>
            <p className='flex-1 mb-6 text-slateGray text-sm laptop:text-base'>
              {features.description}
            </p>
            <Link
              href='#'
              className='font-bold text-persianRose text-base hover:opacity-60 duration-200'
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Features
