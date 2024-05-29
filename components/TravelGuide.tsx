import Link from 'next/link';
import React from 'react';

const TravelGuide = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 md:gap-8 lg:py-10">
      <h1 className="flexCenter bold-32">Travel Information</h1>
      
      <section className="flex flex-col gap-4 lg:flex-row lg:gap-20">
        
        <div className="lg:w-2/3">
          <h2 className="text-xl font-semibold">Travel Guide</h2>
          <p className="mt-2 text-gray-600">
            Get comprehensive travel guides to help you plan your perfect trip. Find tips, itineraries, and essential information to make your travel experience seamless and enjoyable.
          </p>
          <Link href="https://www.sltda.gov.lk/storage/common_media/National-Tourism-Policy-of-SriLanka.pdf">
            <p className="text-blue-500 hover:underline mt-4 inline-block">Read the National Tourism Policy of Sri Lanka</p>
          </Link>
        </div>
        
        <div className="lg:w-1/3 bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Notices</h2>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>COVID-19 travel restrictions and guidelines</li>
            <li>Weather advisories and seasonal recommendations</li>
            <li>Local customs and etiquette</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-4 lg:flex-row lg:gap-20 mt-10">
        
        <div className="lg:w-2/3">
          <h2 className="text-xl font-semibold">Essential Information</h2>
          <p className="mt-2 text-gray-600">
            Prepare for your journey with detailed information on visa requirements, health and safety tips, and currency exchange rates. Ensure you have all the necessary documentation and knowledge to make your trip smooth and hassle-free.
          </p>
        </div>

        <div className="lg:w-1/3 bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Latest News</h2>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>New flight routes and airline updates</li>
            <li>Upcoming cultural events and festivals</li>
            <li>Recent changes in travel policies</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-4 lg:flex-row lg:gap-20 mt-10">
        
        <div className="lg:w-2/3">
          <h2 className="text-xl font-semibold">Itineraries and Tips</h2>
          <p className="mt-2 text-gray-600">
            Discover expertly crafted itineraries to maximize your travel experience. Get insider tips on the best places to visit, hidden gems, and how to navigate your destination like a local.
          </p>
        </div>
        
        <div className="lg:w-1/3 bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Travel Updates</h2>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Real-time traffic and transportation updates</li>
            <li>Hotel and accommodation recommendations</li>
            <li>Popular attractions and must-see locations</li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default TravelGuide;
