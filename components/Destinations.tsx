import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { destinations } from "@/constants";
import Button from "./Button";

const Destinations = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 md:gap-8 lg:py-10">
      <h1 className="flexCenter bold-32">Destinations</h1>
      <div>
        <Carousel>
          <CarouselPrevious />
          <CarouselContent>
            {destinations.map((destination, index) => (
              <CarouselItem
                key={index}
                className="relative flex flex-col items-center justify-center w-full h-[500px] p-4 bg-cover bg-center bg-gradient-to-r from-black"
                style={{ backgroundImage: `url(${destination.imageUrl})` }}
              >
                <div className="absolute ml-4 inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-4">
                  
                    <h3 className="px-2 text-2xl font-semibold text-white">
                      {destination.name}
                    </h3>
                    <p className="p-2 mt-2 w-1/3 text-justify  text-gray-300">
                      {destination.description}
                    </p>
                    <Button title="Learn More" variant="btn_green" type="button"/>
                  
                </div>
                {/* <div className="absolute flex items-center justify-center h-2/3 p-4 border-l-2 border-gray-300 my-4 "></div> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Destinations;
