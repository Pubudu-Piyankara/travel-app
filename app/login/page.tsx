"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const [user, setUser] = useState({} as LogInUser);
  return (
    <section className="flex flex-col">
      <div className="flex flex-row mb-4 h-screen gap-96">
        <div>
          <Image
            src="/image/perahera.jpg"
            alt="logo"
            width={1000}
            height={1000}
            className="w-auto h-screen"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <form className="flex flex-col ">
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
          <button className="border border-gray-400 p-2 m-2 rounded-full btn_green">
            Login
          </button>
          <Link href="/signup" className="text-blue-400">
            Do not you have account?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
