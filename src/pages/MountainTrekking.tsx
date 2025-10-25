import React from 'react';

const MountainTrekking = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Mountain Trekking Expedition</h1>
      <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mountain Trekking" className="w-full h-96 object-cover rounded-lg mb-8" />
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">10 Days in the Himalayas</h2>
        <p className="text-blue-600 mb-4">Challenge yourself with an unforgettable trekking experience in the majestic Himalayas. This 10-day expedition will test your limits and reward you with breathtaking views.</p>
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Itinerary Highlights:</h3>
        <ul className="list-disc list-inside text-blue-600 mb-4">
          <li>Trek through diverse landscapes and terrains</li>
          <li>Reach high-altitude passes with stunning panoramic views</li>
          <li>Experience local Sherpa culture and hospitality</li>
          <li>Visit ancient monasteries and sacred sites</li>
          <li>Witness breathtaking sunrises and sunsets over the mountains</li>
        </ul>
        <p className="text-blue-800 font-semibold">Price: $2,299 per person</p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">Book Now</button>
      </div>
    </div>
  );
};

export default MountainTrekking;