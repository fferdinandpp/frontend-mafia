"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: { id: number; image: string }[];
  defaultImage: string;
  createdAt: string;
  viewCount?: number;
  autoplayInterval?: number;
  name: string;
}

const ImageGallery = ({
  images,
  defaultImage,
  createdAt,
  viewCount,
  autoplayInterval = 4000,
  name,
}: ImageGalleryProps) => {
  const allImages = React.useMemo(() => {
    const combined = [{ id: -1, image: defaultImage }, ...images];
    return combined.filter(
      (v, i, a) => a.findIndex((t) => t.image === v.image) === i
    );
  }, [defaultImage, images]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const initialIndex = allImages.findIndex(
      (img) => img.image === defaultImage
    );
    setCurrentIndex(initialIndex >= 0 ? initialIndex : 0);
  }, [defaultImage, allImages]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  }, [allImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length
    );
  }, [allImages.length]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        handleNext();
      }, autoplayInterval);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isPaused, handleNext, autoplayInterval]);

  return (
    <div
      className="bg-[#0B3CAA] rounded-lg w-full mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="relative w-full overflow-hidden rounded-t-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {allImages.map((image) => (
            <div key={image.id} className="relative w-full flex-shrink-0">
              <Image
                // loading="lazy"
                priority={image.image === defaultImage}
                width={379}
                height={474}
                src={image.image || ""}
                alt={name}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          ))}
        </div>

        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-all duration-300 hover:scale-110"
            aria-label={name}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-all duration-300 hover:scale-110"
            aria-label={name}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      </div>

      <div className="flex mt-4 gap-2 flex-wrap py-4 px-5">
        {allImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-300 hover:scale-105 ${
              currentIndex === index
                ? "border-cyan-500 scale-105"
                : "border-transparent"
            }`}
          >
            <Image
              loading="lazy"
              fill
              src={image.image || "/placeholder.png"}
              alt={name}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full items-center px-5 pb-4">
        <h2 className="text-white text-xl font-semibold">{createdAt}</h2>
        <h2 className="text-white text-lg">{viewCount} Views</h2>
      </div>
    </div>
  );
};

export default ImageGallery;
