import React, { useState, useEffect } from 'react';

// Import images from assets
import fest1 from '../assets/fest1.jpg';
import fest2 from '../assets/fest2.jpg';
import fest3 from '../assets/fest3.jpg';

import harate1 from '../assets/harate1.jpg';
import harate2 from '../assets/harate2.jpg';
import harate3 from '../assets/harate3.jpg';

import culture1 from '../assets/culture1.jpg';
import culture2 from '../assets/culture2.jpg';
import culture3 from '../assets/culture3.jpg';

const Photos = () => {
  // Use local images
  const slides = [
    [fest1, fest2, fest3],          // Festivities
    [harate1, harate2, harate3],    // Harate Katte sessions
    [culture1, culture2, culture3], // Cultural events
  ];

  const [currentSlide, setCurrentSlide] = useState([0, 0, 0]);

  const handleNext = (index) => {
    setCurrentSlide((prev) => {
      const newSlides = [...prev];
      newSlides[index] = (newSlides[index] + 1) % slides[index].length;
      return newSlides;
    });
  };

  const handlePrev = (index) => {
    setCurrentSlide((prev) => {
      const newSlides = [...prev];
      newSlides[index] = (newSlides[index] - 1 + slides[index].length) % slides[index].length;
      return newSlides;
    });
  };

  // 🕒 Auto-advance every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev.map((slideIndex, i) => (slideIndex + 1) % slides[i].length)
      );
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
        Ponda Kannada Sangha – Photos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Section 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={slides[0][currentSlide[0]]}
              alt="Festivities"
              className="w-full h-56 object-cover transition duration-700 ease-in-out"
            />
            <button
              onClick={() => handlePrev(0)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-3 py-1 rounded-full opacity-80 hover:opacity-100"
            >
              ◀
            </button>
            <button
              onClick={() => handleNext(0)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-3 py-1 rounded-full opacity-80 hover:opacity-100"
            >
              ▶
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              10 Festivities We Did This Year
            </h3>
            <p className="text-blue-600 mb-4">
              A glimpse into our celebrations filled with devotion, unity, and Kannada pride.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={slides[1][currentSlide[1]]}
              alt="Harate Katte"
              className="w-full h-56 object-cover transition duration-700 ease-in-out"
            />
            <button
              onClick={() => handlePrev(1)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-3 py-1 rounded-full opacity-80 hover:opacity-100"
            >
              ◀
            </button>
            <button
              onClick={() => handleNext(1)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-3 py-1 rounded-full opacity-80 hover:opacity-100"
            >
              ▶
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Harate Katte Sessions & Speeches by Ponda Kannadigurus
            </h3>
            <p className="text-blue-600 mb-4">
              Moments from our interactive discussions, thought-provoking talks, and inspiring speeches.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={slides[2][currentSlide[2]]}
              alt="Cultural Events"
              className="w-full h-56 object-cover transition duration-700 ease-in-out"
            />
            <button
              onClick={() => handlePrev(2)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-3 py-1 rounded-full opacity-80 hover:opacity-100"
            >
              ◀
            </button>
            <button
              onClick={() => handleNext(2)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-3 py-1 rounded-full opacity-80 hover:opacity-100"
            >
              ▶
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Cultural Events We Have Done
            </h3>
            <p className="text-blue-600 mb-4">
              A vibrant showcase of our traditional music, dance, and Kannada cultural heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
