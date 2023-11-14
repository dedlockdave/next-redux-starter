/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react"

export default function Carousel({ sections }) {
  const [current, setCurrent] = useState(0)

  const onNext = () => {
    setCurrent((current + 1) % sections.length)
    console.log("next slider item is shown")
  }

  const onPrev = () => {
    setCurrent((current - 1 + sections.length) % sections.length)
    console.log("previous slider item is shown")
  }

  // useEffect(() => {
  // }, [current])

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-lg h-96 sm:h-120 xl:h-160 2xl:h-192">
        {sections.map((item, index) => (
          <div
            key={index}
            className={
              index === current
                ? "duration-700 ease-in-out"
                : "hidden duration-700 ease-in-out"
            }
          >
            <img
              src={item.src}
              className="absolute w-full h-full object-cover"
              alt="carousel-img"
            />
            <div className="absolute inset-x-0 bottom-16 bg-white bg-opacity-40 backdrop-blur-md py-4">
              <span className="block text-xl text-black1 text-center">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {sections.map((_, index) => (
          <button
            key={index}
            type="button"
            className={
              index === current
                ? "w-3 h-3 rounded-full bg-accent1" // highlight current slide
                : "w-3 h-3 rounded-full bg-gray-500" // normal color
            }
            aria-current={index === current}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={onPrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={onNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}
