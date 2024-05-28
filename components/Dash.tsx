import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Carousel } from "./ui/carousel";
import { destinations } from "@/constants";

const Dash = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="max-container padding-container py-10">
      <Carousel
        className="carousel-root"
      >
        {destinations.map((destination, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <Card>
              <CardHeader>
                <CardTitle>{destination.title}</CardTitle>
                <CardDescription>{destination.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button title="Read More" variant="btn_green" type="button" />
              </CardContent>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
    </section>
  );
};

export default Dash;
