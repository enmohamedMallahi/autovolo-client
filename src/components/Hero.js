import React from 'react'

const Hero = () => {
  return (

    <section class="flex flex-col justify-between gap-6 md:gap-10 py-4 lg:flex-row">

      <div class="flex flex-col justify-between xl:w-5/12">
        <div></div>

        <div class="sm:text-center lg:py-12 lg:text-left xl:py-24">


          <h1 class="mb-8 text-2xl font-bold text-black  md:mb-12 md:text-4xl">Revolutionary way to build the web</h1>

          <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

            <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
          </div>
        </div>




      </div>



      <div class="h-40 hidden md:block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-60 xl:w-6/12">
        <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
      </div>

    </section>

  )
}

export default Hero