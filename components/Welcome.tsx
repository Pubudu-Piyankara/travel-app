import React from "react";

const Welcome = () => {
  return (
    <section className="h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/video/banner_sigiriya.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="absolute flex flex-col w-full h-screen items-center justify-center text-center text-gray-300 py-20 px-4">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl text-white md:text-6xl font-bold mb-4">
            Welcome to Explore Sri Lanka
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Your ultimate travel companion to discover the beauty and diversity
            of Sri Lanka. From breathtaking landscapes to vibrant cultural
            experiences, we provide you with the best guides, tips, and insights
            to make your journey unforgettable.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 sm:justify-center">
              Get Started
            </button>
            <button className="bg-transparent border border-white hover:border-gray-300 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Welcome;
