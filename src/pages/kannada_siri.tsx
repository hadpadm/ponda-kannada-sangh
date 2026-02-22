// src/pages/KannadaSiri.tsx
import React, { useState } from 'react';

/* Swiper is optional here; this version uses a simple manual slideshow */
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

import kannada_siri1 from '../assets/kannada_siri1.jpg';
import kannada_siri2 from '../assets/kannada_siri2.jpg';
import kannada_siri3 from '../assets/kannada_siri3.jpg';
import kannada_siri4 from '../assets/kannada_siri4.jpg';
import kannada_siri5 from '../assets/kannada_siri5.jpg';
import kannada_siri6 from '../assets/kannada_siri6.jpg';
import kannada_siri7 from '../assets/kannada_siri7.jpg';
import kannada_siri8 from '../assets/kannada_siri8.jpg';
import kannada_siri9 from '../assets/kannada_siri9.jpg';
import kannada_siri10 from '../assets/kannada_siri10.jpg';




const heroImages = [
  { src: kannada_siri1, alt: 'Kannada Siri - Portraits collage', pos: 'center 35%' },
  { src: kannada_siri2, alt: 'Kannada Siri - Group performance', pos: 'center 40%' },
  { src: kannada_siri3, alt: 'Kannada Siri - Cultural portrait', pos: 'center 50%' },
  { src: kannada_siri4, alt: 'Kannada Siri - Event moments', pos: 'center 45%' },
  { src: kannada_siri5, alt: 'Kannada Siri - Celebrations', pos: 'center 50%' },
];

/* Additional gallery images (you can add more) */
const gallery = [
  kannada_siri6,
  kannada_siri7,
  kannada_siri3,
  kannada_siri8,
  kannada_siri9,
  kannada_siri10,

];

const KannadaSiri: React.FC = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  const nextHero = () => setHeroIndex((i) => (i + 1) % heroImages.length);
  const prevHero = () => setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length);

  const openModal = (src: string) => {
    setModalImg(src);
    setModalOpen(true);
    // optionally lock scroll: document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
    // document.body.style.overflow = '';
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* HERO */}
      <header className="relative">
        <div className="relative">
          <img
            src={heroImages[heroIndex].src}
            alt={heroImages[heroIndex].alt}
            style={{ objectPosition: heroImages[heroIndex].pos }}
            className="w-full h-[56vh] md:h-[64vh] lg:h-[72vh] object-cover object-center transition-transform duration-700"
          />
          {/* Soft gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40 pointer-events-none" />

          {/* Controls */}
          <button
            onClick={prevHero}
            aria-label="Previous hero"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-blue-700 w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:scale-105 transition"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={nextHero}
            aria-label="Next hero"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-blue-700 w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:scale-105 transition"
          >
            <ArrowRight size={16} />
          </button>

          {/* Centered title/content */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
                Kannada Siri
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
                Celebrating Karnataka’s heart — language, art and traditions — right here in Ponda.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setHeroIndex(0)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full inline-flex items-center gap-2"
                >
                  Explore Programs
                </button>
                <button
                  onClick={() => (window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }))}
                  className="ml-3 bg-white/90 text-blue-700 px-4 py-2 rounded-full inline-flex items-center gap-2"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT / DESCRIPTION */}
      <main className="container mx-auto px-4 py-12 -mt-8">
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 text-center mb-6">
            Cultural Wing of Ponda Kannada Sangha
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Kannada Siri (ಕನ್ನಡ ಸಿರಿ)</strong> is the cultural wing of Ponda Kannada Sangh,
                nurturing and promoting Kannada language, arts, and traditions across Ponda and Goa.
                We bring people together to celebrate heritage, learn, and create joyful cultural moments.
              </p>

              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Weekend language classes — learning Kannada in a friendly group environment.</li>
                <li>Monthly <strong>Harate Katte</strong> — community conversations and storytelling.</li>
                <li>Stage performances — classical dance, folk music, and theatre.</li>
                <li>Workshops and youth programs — reels, digital storytelling & creative arts.</li>
              </ul>

              <p>
                Join us to share, learn, and celebrate — whether you are a learner, performer, or a culture lover.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 shadow-inner">
                <h4 className="font-semibold text-blue-800 mb-2">Next Events</h4>
                <ul className="text-gray-700 list-inside list-disc space-y-1 text-sm">
                  <li>Kannada Language Workshop </li>
                  <li>Harate Katte — Second Saturday, community hall</li>
                  <li>Annual Cultural Night — dates announced</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 shadow-inner">
                <h4 className="font-semibold text-blue-800 mb-2">How to Join</h4>
                <p className="text-gray-700 text-sm">
                  Visit our Contact page or click the <strong>Become a Member</strong> button at the top to fill the membership form.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
<section className="mt-10">
  <h3 className="text-xl md:text-2xl text-blue-800 font-semibold mb-6 text-center">
    Moments from Kannada Siri
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {gallery.map((src, i) => (
      <figure
        key={i}
        className="relative rounded-xl overflow-hidden group cursor-pointer bg-gray-100"
        onClick={() => openModal(src)}
        aria-hidden
      >
        {/* Card image wrapper keeps consistent height while allowing contain */}
        <div className="w-full h-56 md:h-64 flex items-center justify-center bg-gray-100">
          <img
            src={src}
            alt={`Kannada Siri photo ${i + 1}`}
            // IMPORTANT: use object-contain so the entire photo (faces etc.) is visible
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
            // If a specific image needs focal shift, add inline style:
            // style={{ objectPosition: 'center 35%' }}
          />
        </div>

        <figcaption className="absolute inset-0 flex items-end p-4 pointer-events-none">
          <div className="bg-gradient-to-t from-black/50 to-transparent px-3 py-2 rounded-md text-white text-sm">
            View photo
          </div>
        </figcaption>
      </figure>
    ))}
  </div>
</section>

      </main>

      {/* Modal / Lightbox */}
      {modalOpen && modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/60" onClick={closeModal} />
          <div className="relative max-w-4xl w-full rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 z-20 bg-white/90 rounded-full w-9 h-9 flex items-center justify-center shadow"
              aria-label="Close photo"
            >
              <X size={16} />
            </button>
            <img src={modalImg} alt="Full view" className="w-full h-[70vh] object-contain bg-black" />
            <div className="p-3 bg-white text-right">
              <button
                onClick={() => {
                  const idx = gallery.indexOf(modalImg);
                  const next = gallery[(idx + 1) % gallery.length];
                  setModalImg(next);
                }}
                className="mr-2 px-3 py-1 rounded bg-blue-600 text-white"
              >
                Next
              </button>
              <button onClick={closeModal} className="px-3 py-1 rounded border">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KannadaSiri;
