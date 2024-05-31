import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Carousel } from "./ui/carousel";
import { services } from "@/constants";

const Dash = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10  md:gap-8 lg:py-10 ">
      
      <h1 className="flexCenter bold-32">Our Services</h1>
      <section className="flex flex-col gap-4 lg:flex-row lg:gap-20">
      {services.map((service, index) => (
        <div key={index} className="w-full  lg:w-1/3 p-2">
          <Card>
            <CardHeader>
              <service.icon size={30} className="text-yellow-500" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription className="py-4">{service.description}</CardDescription>
            </CardHeader>
            
            <CardFooter className="cursor-pointer">
              <Button title={service.button} variant="btn_gren_thin" type="button" />
            </CardFooter>
          </Card>
        </div>
      ))}
    </section>
    </section>
  );
};

export default Dash;
