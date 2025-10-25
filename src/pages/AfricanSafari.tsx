import React from 'react';

const AfricanSafari = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">African Safari Adventure</h1>
      <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="African Safari" className="w-full h-96 object-cover rounded-lg mb-8" />
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">8 Days in Tanzania</h2>
        <p className="text-blue-600 mb-4">Embark on an incredible journey through the wilds of Tanzania. This 8-day safari will bring you face-to-face with Africa's most magnificent wildlife.</p>
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Itinerary Highlights:</h3>
        <ul className="list-disc list-inside text-blue-600 mb-4">
          <li>Witness the Great Migration in the Serengeti</li>
          <li>Explore the Ngorongoro Crater, a UNESCO World Heritage site</li>
          <li>Spot the Big Five: lion, leopard, rhinoceros, elephant, and Cape buffalo</li>
          <li>Visit a Maasai village and learn about their culture</li>
          <li>Enjoy stunning sunsets over the African savanna</li>
        </ul>
        <p className="text-blue-800 font-semibold">Price: $3,499 per person</p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">Book Now</button>
      </div>
    </div>
  );
};

export default AfricanSafari;