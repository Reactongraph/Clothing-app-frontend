"use client";
import React from "react";

import { Carousel } from "flowbite-react";

type Props = {};

export default function HomeCarousel({}: Props) {
  return (
    <Carousel
      id="default-carousel"
      className="relative w-full my-12 h-[40vh]"
      slideInterval={1000}
    >
      <img
        src="/faballey.avif"
        alt="..."
      />
      <img
        src="/faballey1.avif"
        alt="..."
      />
      <img
        src="/faballey2.avif"
        alt="..."
      />
      <img
        src="/faballey3.avif"
        alt="..."
      />
    </Carousel>
  );
}
