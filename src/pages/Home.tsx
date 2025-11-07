// src/pages/Home.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import hero1 from '../assets/hero_banner1.jpg';
import hero2 from '../assets/hero_banner2.jpg';
import hero3 from '../assets/hero_banner3.jpg';
import hero4 from '../assets/hero_banner4.jpg';
import hero5 from '../assets/hero_banner5.jpg';
import hero6 from '../assets/hero_banner6.jpg';

const images = [hero1, hero2, hero3, hero4, hero5, hero6];

const Home: React.FC = () => {
  return (
    <div className="bg-blue-50">
      {/* Hero Banner with background image slideshow */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="relative h-[60vh]"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
            {/* Overlay and content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
              <div className="text-center text-white max-w-3xl">
                <h1 className="text-5xl font-bold mb-6">
                  Welcome to Ponda Kannada Sangha
                </h1>

                {/* 10% smaller and slightly transparent */}
                <p className="text-lg mb-8 text-white/80">
                  Ponda Kannada Sangh is a cultural organization dedicated to promoting Kannada language, culture, and heritage in Ponda.
                </p>

                {/* Use react-router Link to navigate to the Kannada Siri route */}
                <Link
                  to="/kannada_siri"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300"
                  aria-label="Dive Into Kannada Legacy"
                >
                  Dive Into Kannada Legacy
                  <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static Cards Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 🎭 Cultural Events → Photos page */}
          <Link
            to="/photos"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition duration-300 block"
          >
            <img
              src={hero4}
              alt="Cultural Events"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Cultural Events
              </h3>
              <p className="text-blue-600">
                Experience heart-warming cultural activities by all proud Kannadigas.
              </p>
            </div>
          </Link>

          {/* 📰 Updates → Updates page */}
          <Link
            to="/updates"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition duration-300 block"
          >
            <img src={hero5} alt="Updates" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Updates</h3>
              <p className="text-blue-600">Stay tuned with us.</p>
            </div>
          </Link>

          {/* 📢 Notice (not linked yet) */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={hero6} alt="Notice" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Notice</h3>
              <p className="text-blue-600">Stay informed with us.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
