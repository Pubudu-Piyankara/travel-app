import Dash from "@/components/Dash";
import Destinations from "@/components/Destinations";
import Festivals from "@/components/Festivals";
import TravelGuide from "@/components/TravelGuide";
import Welcome from "@/components/Welcome";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Welcome />
      <Dash />
      <Destinations />
      <TravelGuide />`
      
      <Festivals />
    </>
  );
};

export default LandingPage;
