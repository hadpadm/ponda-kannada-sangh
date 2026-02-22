// src/pages/Photos.tsx
import React, { useEffect, useState, useCallback } from 'react';

/* <-- replace these with your actual imports */
import fest1 from '../assets/fest1.jpg';
import fest2 from '../assets/fest2.jpg';
import fest3 from '../assets/fest3.jpg';
import fest4 from '../assets/fest4.jpg';

import sankranti1 from '../assets/sankartaniti2.jpg';
import sankranti2 from '../assets/sankaranti3.jpg';
import sankranti3 from '../assets/sankranti3.jpg';

import mahila1 from '../assets/mahila1.jpg';
import mahila2 from '../assets/mahila2.jpg';
import mahila3 from '../assets/mahila3.jpg';
import mahila4 from '../assets/mahila4.jpg';

import harate1 from '../assets/harate1.jpg';
import harate2 from '../assets/harate2.jpg';
import harate3 from '../assets/harate3.jpg';
import harate4 from '../assets/harate4.jpg';
import harate5 from '../assets/harate5.jpg';
import harate6 from '../assets/harate6.jpg';
import harate7 from '../assets/harate7.jpg';

import hero8 from '../assets/hero_banner7.jpg';
import hero9 from '../assets/hero_banner9.jpg';
import hero10 from '../assets/hero_banner11.jpg';
import hero11 from '../assets/hero_banner12.jpg';
import hero12 from '../assets/hero_banner13.jpg';
import hero13 from '../assets/hero_banner14.jpg';
import hero14 from '../assets/hero_banner10.jpg';
import hero15 from '../assets/hero_banner15.jpg';

/**
 * Modern Photos page with multi-photo festival cards + modal gallery
 *
 * - Each festival object has: title, subtitle, images[]
 * - Card auto-advances images every 4s, with prev/next buttons
 * - Clicking the card opens a modal gallery with thumbnails and keyboard navigation
 */

type Festival = {
  id: string;
  title: string;
  subtitle?: string;
  images: string[];
};

const FESTIVALS: Festival[] = [
  {
    id: 'festivals',
    title: 'Festivals & Celebrations',
    subtitle: 'Sharvana Sambhrama, Sankranti, Bhogi Utsav and more.',
    images: [fest1, fest2, fest3, fest4],
  },
  {
    id: 'sankranti',
    title: 'Sankranti & Bhogi Utsav',
    subtitle: 'Harvest blessings and community feasts.',
    images: [sankranti1, sankranti2, sankranti3],
  },
  {
    id: 'mahila',
    title: 'Mahila Dinacharya',
    subtitle: 'Women’s day programs and felicitation ceremonies.',
    images: [mahila1, mahila2, mahila3, mahila4],
  },
  {
    id: 'harate',
    title: 'Harate Katte',
    subtitle: 'Community conversations, speeches and storytelling.',
    images: [harate1, harate2, harate3, harate4, harate5, harate6, harate7],
  },
  {
    id: 'students',
    title: 'Kannada Rajoysthava 2026',
    subtitle: 'Celebrating pride of kannadigas',
    images: [ hero8, hero9, hero10, hero11, hero12, hero13, hero14, hero15],
  },
];

const Photos: React.FC = () => {
  // index for each festival card (auto-advance)
  const [cardIndexes, setCardIndexes] = useState<number[]>(
    FESTIVALS.map(() => 0)
  );

  // modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFestival, setActiveFestival] = useState<Festival | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  // auto-advance cards every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndexes((prev) => prev.map((v, i) => (v + 1) % FESTIVALS[i].images.length));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // go next/prev for card (non-modal)
  const cardNext = (i: number) =>
    setCardIndexes((prev) => {
      const copy = [...prev];
      copy[i] = (copy[i] + 1) % FESTIVALS[i].images.length;
      return copy;
    });

  const cardPrev = (i: number) =>
    setCardIndexes((prev) => {
      const copy = [...prev];
      copy[i] = (copy[i] - 1 + FESTIVALS[i].images.length) % FESTIVALS[i].images.length;
      return copy;
    });

  // open modal for festival
  const openGallery = (festival: Festival, startIndex = 0) => {
    setActiveFestival(festival);
    setModalIndex(startIndex);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setModalOpen(false);
    setActiveFestival(null);
    setModalIndex(0);
    document.body.style.overflow = '';
  };

  // modal navigation (keyboard friendly)
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!modalOpen || !activeFestival) return;
      if (e.key === 'ArrowRight') {
        setModalIndex((i) => (i + 1) % activeFestival.images.length);
      } else if (e.key === 'ArrowLeft') {
        setModalIndex((i) => (i - 1 + activeFestival.images.length) % activeFestival.images.length);
      } else if (e.key === 'Escape') {
        closeGallery();
      }
    },
    [modalOpen, activeFestival]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div className="bg-blue-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-4">
          Ponda Kannada Sangha — Moments & Festivals
        </h1>

        <p className="text-center text-blue-600 max-w-3xl mx-auto mb-12">
          Explore our festivals and community moments. Click any card to view a gallery of photos for that event.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FESTIVALS.map((fest, idx) => {
            const idxInCard = cardIndexes[idx] ?? 0;
            const hero = fest.images[idxInCard];

            return (
              <article
                key={fest.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
                onClick={() => openGallery(fest, idxInCard)}
                role="button"
                aria-label={`Open gallery for ${fest.title}`}
              >
                {/* image area */}
                <div className="relative">
                  <img
                    src={hero}
                    alt={`${fest.title} photo ${idxInCard + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* overlay for readable text and small badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* card controls (these stop click from bubbling to open gallery) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      cardPrev(idx);
                    }}
                    aria-label={`Previous ${fest.title}`}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition"
                  >
                    ◀
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      cardNext(idx);
                    }}
                    aria-label={`Next ${fest.title}`}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition"
                  >
                    ▶
                  </button>

                  {/* bottom overlay text */}
                  <div className="absolute left-5 bottom-5 flex items-end space-x-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-600/90 text-white rounded-full shadow">
                      ▶
                    </span>
                    <div className="text-white">
                      <h3 className="text-lg font-semibold leading-tight">{fest.title}</h3>
                      <p className="text-sm opacity-90 max-w-[18rem]">{fest.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* description area */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">{fest.title}</h4>
                  <p className="text-blue-600 text-sm">{fest.subtitle}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {fest.images.length} photos
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openGallery(fest, idxInCard);
                      }}
                      className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition"
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal / lightbox */}
      {modalOpen && activeFestival && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/60" onClick={closeGallery} />

          <div className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-xl">
            {/* header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div>
                <h3 className="text-lg font-semibold text-blue-800">{activeFestival.title}</h3>
                <p className="text-sm text-gray-600">{activeFestival.subtitle}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-600 pr-4">
                  {modalIndex + 1} / {activeFestival.images.length}
                </div>
                <button
                  onClick={closeGallery}
                  className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
                  aria-label="Close gallery"
                >
                  Close
                </button>
              </div>
            </div>

            {/* main image */}
            <div className="bg-black/5 flex items-center justify-center">
              <img
                src={activeFestival.images[modalIndex]}
                alt={`${activeFestival.title} ${modalIndex + 1}`}
                className="w-full max-h-[70vh] object-contain bg-black"
              />
            </div>

            {/* controls */}
            <div className="flex items-center justify-between px-4 py-3 border-t">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setModalIndex((i) => (i - 1 + activeFestival.images.length) % activeFestival.images.length)}
                  className="px-3 py-2 rounded bg-white shadow hover:bg-gray-50"
                  aria-label="Previous image"
                >
                  ◀
                </button>
                <button
                  onClick={() => setModalIndex((i) => (i + 1) % activeFestival.images.length)}
                  className="px-3 py-2 rounded bg-white shadow hover:bg-gray-50"
                  aria-label="Next image"
                >
                  ▶
                </button>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto py-2">
                {/* thumbnails */}
                {activeFestival.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setModalIndex(i)}
                    className={`rounded-md overflow-hidden border ${i === modalIndex ? 'ring-2 ring-blue-500' : 'border-transparent'}`}
                    aria-label={`Open photo ${i + 1}`}
                  >
                    <img src={src} alt={`thumb ${i + 1}`} className="w-24 h-16 object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
