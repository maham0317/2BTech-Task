import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <section class="bg-white py-16">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <div class="md:col-span-1">
        <h2 class="text-4xl font-bold sticky top-20">Portfolio</h2>
      </div>

      <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <div class="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 1"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-white text-lg font-semibold">Project 1</p>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 2"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-white text-lg font-semibold">Project 2</p>
          </div>
        </div>


      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Portfolio
