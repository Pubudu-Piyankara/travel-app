"use client";
import React, { ReactHTMLElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


const SignUpPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      toast.error("All fields are required");
      return;
    }
    
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/signup", user);
      console.log("success", res.data);
      toast.success("Sign Up successful");
      router.push("/login");
    } catch (error: any) {
      console.log("Sign Up Failed", error);
      toast.error("Sign Up Failed/ User already exists");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col">
      <Toaster />
      <div className="flex flex-row mb-4 h-screen gap-80">
        <div>
          <Image
            src="/image/Aberdeen.jpg"
            alt="logo"
            width={1000}
            height={1000}
            className="w-auto h-screen"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <form className="flex flex-col" onSubmit={signUp}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="border border-gray-400 p-2 m-2 rounded-full"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="border border-gray-400 p-2 m-2 rounded-full"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="border border-gray-400 p-2 m-2 rounded-full"
            />
            <button
              type="submit"
              className="border border-gray-400 p-2 m-2 rounded-full btn_green"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          <Link href="/login" className="text-blue-400">
            Already have an account?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
