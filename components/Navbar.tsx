"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/image/logo.jpg";
import menu from "../public/image/menu.svg";
import { NAVBAR_DATA } from "../constants";
import React, { useEffect, useState } from "react";
import { GiSriLanka } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import defaultPic from "../public/image/person-1.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogOut from "@/app/logout/page";
import Profile from "@/app/profile/page";

const Navbar = () => {
  const [userData, setUserData] = useState({} as SignUpUser);

  useEffect(() => {
    // Fetch user details from the server
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/user");
        const data = await res.json();
        setUserData(data.data);
        console.log("tijsn data", data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="relative w-full h- shadow-2xl rounded-md bg-black/50 ">
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
        <Profile/>
        {/* Conditional rendering based on user data */}
        {userData ? (
          <div className="text-white lg:flexCenter">
            <h1></h1>
            <section className="bg-transparent">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image src={defaultPic} alt={"profilePic "} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="border-green-50 bg-green-500 px-8 py-2 text-white rounded-full">
                    {userData.name}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  
                  <DropdownMenuItem><LogOut/></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </section>
          </div>
        ) : (
          <div className="text-white lg:flexCenter">
            <Link
              href="/login"
              className="border-green-50 bg-green-500 px-8 py-2 text-white rounded-full"
            >
              Sign In
            </Link>
          </div>
        )}
        <IoMenu width={50} height={50} className="text-white lg:hidden" />
      </nav>
    </div>
  );
};

export default Navbar;
