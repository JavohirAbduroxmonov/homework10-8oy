"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function CarouselComponent({ items }) {
  const router = useRouter();

  const chunkArray = (items, chunkSize) => {
    const chunkedArr = [];
    for (let i = 0; i < items.length; i += chunkSize) {
      const chunk = items.slice(i, i + chunkSize);
      chunkedArr.push(chunk);
    }
    return chunkedArr;
  };

  const chunkedItems = chunkArray(items, 4);
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={800}>
        {chunkedItems.map((chunk, index) => (
          <div
            key={index}
            className="grid grid-cols-4 h-full  items-center justify-center bg-gray-400 bg-opacity-20 dark:bg-gray-700 dark:text-white"
          >
            {chunk.map((item) => (
              <div key={item.cca2} onClick={() => router.push(`/${item.cca2}`)}>
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={item.flags.svg}
                    width={80}
                    height={80}
                    alt={item.name.common}
                  />
                  <div>
                    <p className="text-xl font-bold">{item.name.common}</p>
                    <p className="">
                      {String(item.population).replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                      )}
                      <span className="text-xl"> people</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
