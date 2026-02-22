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
import hero7 from '../assets/hero_banner7.jpg';
import hero8 from '../assets/hero_banner8.jpg';
import hero9 from '../assets/hero_banner9.jpg';
import hero10 from '../assets/hero_banner11.jpg';
import hero11 from '../assets/hero_banner12.jpg';
import hero12 from '../assets/hero_banner13.jpg';
import hero13 from '../assets/hero_banner14.jpg';
import hero14 from '../assets/hero_banner10.jpg';
import hero15 from '../assets/hero_banner15.jpg';
import upadte from '../assets/upadtes.jpg';
import collagee from '../assets/collage.jpg';

const images = [hero1, hero2, hero9, hero10, hero11, hero12, hero13, hero14, hero15,hero3, hero4, hero5, hero6, hero7, hero9, hero10, hero11, hero12, hero13, hero14, hero15];

const Home: React.FC = () => {
  return (
    <div className="bg-blue-50">
      {/* =============== HERO SLIDER =============== */}
<Swiper
  modules={[Autoplay, EffectFade]}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  effect="fade"
  loop={true}
  className="relative"
>
  {images.map((img, idx) => (
    <SwiperSlide key={idx}>
      <div className="relative w-full overflow-hidden bg-gray-900/5">

        <img
          src={img}
          alt={`Hero ${idx + 1}`}
          className="
            w-full
            h-[36vh]
            sm:h-[44vh]
            md:h-[56vh]
            lg:h-[64vh]
            object-cover
            object-center
            transition-transform duration-700 ease-out
          "
          style={{ backgroundColor: '#111827' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/18 to-black/28" />
        </div>

        {/* HERO CONTENT */}
<div className="absolute inset-0 flex items-center justify-center px-6">
  <div className="text-center max-w-3xl">

    {/* H1 — slightly smaller on mobile */}
    <h1
      className="
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        font-extrabold
        text-white drop-shadow-xl
        leading-snug tracking-wide
      "
    >
      Welcome to Ponda Kannada Sangha
    </h1>

    {/* Larger spacing below title */}
    <div className="mt-7"></div>

  

    {/* Push the description MORE down */}
    <div className="mt-8"></div>

    {/* DESCRIPTION */}
    <p
      className="
        text-xs sm:text-sm md:text-base
        text-white/85
        max-w-2xl mx-auto
        leading-relaxed tracking-wide
        drop-shadow-md
      "
    >
      Ponda Kannada Sangh is a cultural organization dedicated to promoting Kannada
      language, culture, and heritage in Ponda.
    </p>

    {/* CTA BUTTON — transparent blue glass effect */}
    <div className="flex justify-center">
      <Link
        to="/kannada_siri"
        className="
          inline-flex items-center gap-2
          bg-blue-600/40 backdrop-blur-md
          hover:bg-blue-600/60
          text-white
          px-5 py-2.5
          rounded-full shadow-lg
          text-sm sm:text-base
          border border-white/20
          transition duration-300
        "
      >
        Dive Into Kannada Legacy
      </Link>
    </div>

  </div>
</div>


      </div>
    </SwiperSlide>
  ))}
</Swiper>


      {/* ================= CARDS / LINKS ================= */}
      <div className="w-full bg-blue-50">
        <div className="mx-auto px-4 py-16 max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cultural Events card */}
            <Link
              to="/photos"
              className="group relative overflow-hidden rounded-2xl transform hover:-translate-y-1 transition duration-300 block"
            >
              <div className="w-full h-64 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={hero8}
                  alt="Cultural Events"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative mt-4 rounded-b-2xl bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">Cultural Events</h3>
                <p className="text-blue-600">Experience heart-warming cultural activities by all proud Kannadigas.</p>
              </div>
            </Link>

            {/* Updates card */}
            <Link
              to="/updates"
              className="group relative overflow-hidden rounded-2xl transform hover:-translate-y-1 transition duration-300 block"
            >
              <div className="w-full h-64 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={upadte}
                  alt="Updates"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative mt-4 rounded-b-2xl bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">Updates</h3>
                <p className="text-blue-600">Stay tuned with us.</p>
              </div>
            </Link>

            {/* Kannada Siri card */}
            <Link
              to="/Kannada_Siri"
              className="group relative overflow-hidden rounded-2xl transform hover:-translate-y-1 transition duration-300 block"
            >
              <div className="w-full h-64 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={collagee}
                  alt="Kannada Siri"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative mt-4 rounded-b-2xl bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">Kannada Siri (ಕನ್ನಡ ಸಿರಿ)</h3>
                <p className="text-blue-600">The cultural wing of Ponda Kannada Sangha.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
