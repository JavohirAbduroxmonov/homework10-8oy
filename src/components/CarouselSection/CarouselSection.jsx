"use client";
import React from "react";
import CarouselComponent from "./CarouselComponent";
import { useSelector } from "react-redux";

export default function CarouselSection() {
  const { data, watchList } = useSelector((state) => state.data);

  const CarouselItems = data.filter((item) => {
    if (watchList.includes(item.cca2)) {
      return item;
    }
  });
  return (
    <section className="max-w-[900px] mx-auto text-center text-white">
      
    
    </section>
  );
}
