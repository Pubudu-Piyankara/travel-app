"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Dash from "@/components/Dash";
import Destinations from "@/components/Destinations";
import Festivals from "@/components/Festivals";
import TravelGuide from "@/components/TravelGuide";
import Welcome from "@/components/Welcome";
import { Toaster } from 'react-hot-toast';

export default function Home() {

  return (
    <>
      <Toaster />
      <Welcome />
      <Dash />
      <Destinations />
      <TravelGuide />
      <hr />
      <Festivals />
    </>
  );
}
