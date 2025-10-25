import React from 'react';

const TropicalParadise = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Tropical Paradise Escape</h1>
      <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Tropical Paradise" className="w-full h-96 object-cover rounded-lg mb-8" />
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">7 Days in Bali</h2>
        <p className="text-blue-600 mb-4">Experience the ultimate tropical getaway in the beautiful island of Bali. This 7-day adventure combines relaxation, culture, and excitement.</p>
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Itinerary Highlights:</h3>
        <ul className="list-disc list-inside text-blue-600 mb-4">
          <li>Explore stunning beaches and hidden coves</li>
          <li>Visit ancient temples and immerse in local culture</li>
          <li>Enjoy thrilling water sports and activities</li>
          <li>Discover lush rice terraces and tropical forests</li>
          <li>Indulge in delicious Balinese cuisine</li>
        </ul>
        <p className="text-blue-800 font-semibold">Price: $1,499 per person</p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">Book Now</button>
      </div>
    </div>
  );
};

export default TropicalParadise;