import Image from "next/image";
import Link from "next/link";
import logo from "../public/image/logo.jpg";
import menu from "../public/image/menu.svg";
import { NAVBAR_DATA } from "../constants";
import React, { useEffect } from "react";
import { GiSriLanka } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  
  return (
    <div className="relative w-full h- shadow-2xl rounded-md bg-black/50 ">
      
      {/* bg-gradient-to-b from-black/90 via-slate-600 */}
      <nav className="flex justify-between items-center w-full fixed top-0 left-0 right-0 z-50 py-5 bg-gradient-to-b from-black/90 padding-container">
        <Link href="/" className="flex flex-row">
          <GiSriLanka className="text-4xl text-white cursor-pointer" />
          <h1 className="flex text-white justify-center items-center">Eager</h1>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex flex-row">
          {NAVBAR_DATA.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        {/* want weather user loged or not. if there is not loged user show sign in option otherwise show the logged user detailed */}
        <div className="lg:flexCenter hidden">
          <Link
            href='/login'
            className="border-green-50 bg-green-500 px-8 py-2 text-white rounded-full "
          >
            Sign In
          </Link>
        </div>
        <IoMenu width={50} height={50} className="text-white lg:hidden" />
      </nav>
      
    </div>
  );
};

export default Navbar;
