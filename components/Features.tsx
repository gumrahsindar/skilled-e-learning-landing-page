import featuresData from '@/constants/featuesData'
import Link from 'next/link'

const Features = () => {
  return (
    <section
      id="features"
      className="section-padding mt-10 bg-gradient-to-t from-[#F0F1FF] to-white pb-20 tablet:-mt-20 tablet:pb-24 laptop:mt-10 desktop:pb-36"
    >
      {/* grid container */}
      <div className="grid gap-y-12 tablet:grid-cols-2 tablet:gap-x-3 tablet:gap-y-16 laptop:grid-cols-3 desktop:gap-x-8 desktop:gap-y-20">
        {/* grid items */}
        <div className="rounded-lg bg-gradient-to-t from-pinkFlamingo to-atomicTangerine px-7 py-6 text-lg font-extrabold text-white tablet:px-8 tablet:pt-14 desktop:text-2xl">
          Check out our most popular courses!
        </div>
        {featuresData.map((features) => (
          <div
            key={features.id}
            className="relative flex h-full flex-col rounded-lg bg-white px-7 pb-8 pt-14 tablet:px-8"
          >
            <img src={features.icon} alt={features.title} className="absolute -top-7" />
            <h2 className="mb-4 text-[1.25rem] font-extrabold desktop:text-lg">{features.title}</h2>
            <p className="mb-6 flex-1 text-sm text-slateGray laptop:text-base">{features.description}</p>
            <Link href="#" className="text-base font-bold text-persianRose duration-200 hover:opacity-60">
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Features
