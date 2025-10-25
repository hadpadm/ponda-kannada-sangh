import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Ponda Kannada Sangha</h3>
            <p>Promoting kannadigara culture.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="/itinerary" className="hover:text-blue-300">Notice</a></li>
              <li><a href="/blog" className="hover:text-blue-300">Contact</a></li>
              <li><a href="/shop" className="hover:text-blue-300">Updates</a></li>
              <li><a href="/reviews" className="hover:text-blue-300">Donate</a></li>
              <li><a href="/team" className="hover:text-blue-300">Our Team</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><Facebook /></a>
              <a href="#" className="hover:text-blue-300"><Instagram /></a>
              <a href="#" className="hover:text-blue-300"><Twitter /></a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">External Links</h4>
            <ul>
            {/*  <li><a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">TripAdvisor Reviews</a></li>
              <li><a href="https://www.google.com/travel/guide" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Google Travel Guide</a></li>
           */}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Ponda Kannada Sangha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;