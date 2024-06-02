"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  const [user, setUser] = useState({} as SignUpUser);
  return (
    <div className="flex flex-row mb-4 h-screen">
      <div className="flex w-full h-screen ml-[-500px]">
        <Image
          src="/image/Galle-lighthouse.jpg"
          alt="logo"
          width={1000}
          height={1000}
          className=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <form className="flex flex-col ">
          <label>Name</label>
          <input
            type="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="border border-gray-400 p-2 m-2 rounded-full"
          />
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border border-gray-400 p-2 m-2 rounded-full"
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border border-gray-400 p-2 m-2 rounded-full"
          />
        </form>
        <button className="border border-gray-400 p-2 m-2 rounded-full">
          Sign Up
        </button>
        <Link href="/login" className="text-blue-400">Already have account</Link>
      </div>
    </div>
  );
};

export default SignUp;
