"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LogInPage = () => {
  const [user, setUser] = useState({} as LogInUser);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const actionLogin = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", user);
      console.log("success", res.data);
      toast.success("Login successful");
      router.push("/");
      
  } catch (error: any) {
      console.log("Login error", error.message )
    }
  };
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
          <button className="border border-gray-400 p-2 m-2 rounded-full btn_green" onClick={actionLogin} disabled = {loading}>
            {loading ? "Loading..." : "Login"}
          </button>
          <Link href="/signup" className="text-blue-400">
            Do not you have account?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
