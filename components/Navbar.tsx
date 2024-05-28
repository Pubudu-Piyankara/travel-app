import Image from "next/image";
import Link from "next/link";
import logo from "../public/image/logo.jpg";
import menu from "../public/image/menu.svg";
import { NAVBAR_DATA } from "../constants";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="relative w-full h-96 shadow-2xl rounded-md bg-black/50">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover "
      >
        <source src="/video/banner_sigiriya.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <nav
        className="flex justify-between  padding-container
    relative z-30  py-5 bg-gradient-to-b from-black/90"
      >
        <Link href="/">
          <Image src={""} alt="logo" width={50} height={50} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex flex-row">
          {NAVBAR_DATA.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="regular-16 text-white flexCenter pb-1 transition-all hover:font-bold"
            >
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
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative z-30 text-white font-serif font-extralight bg-black/30 p-5 rounded-full">
          <p>Discover the Beauty of Sri Lanka.</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
