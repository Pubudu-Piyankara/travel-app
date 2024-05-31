import Image from "next/image";
import Link from "next/link";
import logo from "../public/image/logo.jpg";
import menu from "../public/image/menu.svg";
import { NAVBAR_DATA } from "../constants";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="relative w-full h-screen shadow-2xl rounded-md bg-black/50">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/video/banner_sigiriya.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* bg-gradient-to-b from-black/90 via-slate-600 */}
      <nav
        className="flex justify-between items-center w-full fixed top-0 left-0 right-0 z-50 py-5 bg-gradient-to-b from-black/90 padding-container"
      >
        
        <Link href="/">
          <Image src={logo} alt="logo" width={50} height={50} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex flex-row">
          {NAVBAR_DATA.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button title="Sign In" variant="btn_green" type="button" />
        </div>
        <Image
          src={menu}
          alt="menu"
          width={30}
          height={30}
          className="lg:hidden"
        />
      </nav>
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
    </div>
  );
};

export default Navbar;
 