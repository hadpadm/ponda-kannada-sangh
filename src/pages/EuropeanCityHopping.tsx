import React from 'react';

const EuropeanCityHopping = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">European City Hopping</h1>
      <img src="https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="European Cities" className="w-full h-96 object-cover rounded-lg mb-8" />
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">14 Days Discovering Europe's Iconic Cities</h2>
        <p className="text-blue-600 mb-4">Immerse yourself in the rich history, diverse cultures, and stunning architecture of Europe's most beloved cities. This 14-day journey will take you through the heart of Western Europe.</p>
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Itinerary Highlights:</h3>
        <ul className="list-disc list-inside text-blue-600 mb-4">
          <li>Explore the romantic streets of Paris</li>
          <li>Discover the historic charm of Rome</li>
          <li>Experience the vibrant culture of Barcelona</li>
          <li>Cruise the canals of Amsterdam</li>
          <li>Indulge in the culinary delights of each city</li>
        </ul>
        <p className="text-blue-800 font-semibold">Price: $3,999 per person</p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">Book Now</button>
      </div>
    </div>
  );
};

export default EuropeanCityHopping;