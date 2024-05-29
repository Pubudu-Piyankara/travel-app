import { festivals } from '@/constants'
import React from 'react'

const Festivals = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 md:gap-8 lg:py-10">
      <h1 className="flexCenter bold-32">Festivals in Sri Lanka</h1>
      <p className="text-center text-gray-600">
        Sri Lanka is a land of vibrant festivals, each reflecting the rich cultural heritage and diverse religious traditions of the island. Here are some of the most celebrated festivals that offer a glimpse into the island unique traditions and communal harmony.
      </p>
      
      <div className="flex flex-col gap-10">
        {festivals.map((festival, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-green-700">{festival.name}</h2>
            <p className="italic text-gray-500">{festival.date}</p>
            <p className="mt-2 text-gray-700">{festival.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Festivals