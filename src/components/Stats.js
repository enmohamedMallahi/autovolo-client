import React from 'react'

const Stats = () => {
  return (

    <section className="mx-auto max-w-screen-xl py-8 px-4 md:px-8 lg:px-16">
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Discover Our Achievements</h2>

        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Learn more about our success and how we've made a difference in the car rental industry.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
        {/* Stat 1: Vehicles Available */}
        <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">100+</div>
          <div className="text-sm font-semibold sm:text-base">Vehicles Available</div>
        </div>

        {/* Stat 2: Satisfied Customers */}
        <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">500+</div>
          <div className="text-sm font-semibold sm:text-base">Satisfied Customers</div>
        </div>

        {/* Stat 3: Years in Service */}
        <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">10+</div>
          <div className="text-sm font-semibold sm:text-base">Years in Service</div>
        </div>

        {/* Stat 4: Quality Service */}
        <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">Award-Winning</div>
          <div className="text-sm font-semibold sm:text-base">Quality Service</div>
        </div>
      </div>
    </section>


  )
}

export default Stats