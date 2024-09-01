'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = Array(8)
    .fill(1)
    .map((_, index) => `/images/slide-${index + 1}.png`)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    )
  }

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    )
  }, [slides.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [currentIndex, nextSlide])

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-64 md:h-[80dvh]"
            style={{ position: 'relative' }}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              height={1000}
              width={1000}
              className="object-center object-cover w-full h-full"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 text-2xl all-center bg-gray-50 text-gray-950 p-2 rounded-full"
      >
        <Image
          src={'./icons/arrow-c-left.svg'}
          height={40}
          width={40}
          alt="left-arrow"
        />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 text-2xl all-center bg-gray-50 text-gray-950 p-2 rounded-full"
      >
        <Image
          src={'./icons/arrow-c-right.svg'}
          height={40}
          width={40}
          alt="right-arrow"
        />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={classNames(`h-2 md:h-3 rounded-full bg-gray-50`, {
              'w-6 md:w-8': index === currentIndex,
              'w-2 md:w-3': index !== currentIndex,
            })}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
