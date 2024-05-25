import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.jpg";
import { NAVBAR_DATA } from "../constants";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav
      className="border-green-600 flexBetween max-container padding-container
    relative z-30 py-5"
    >
      <Link href="/">
        <Image src={logo} alt="logo" width={50} height={50} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex flex-row">
        {NAVBAR_DATA.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 flexCenter pb-1 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button title="Sign In" variant="btn_dark_green" type="button" />
      </div>
      <Image src='menu.svg' alt='menu' width={30} height={30} className='lg:hidden' />
    </nav>
  );
};

export default Navbar;
