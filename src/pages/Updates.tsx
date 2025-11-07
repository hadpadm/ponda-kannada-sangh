import React from 'react';
import { Megaphone } from 'lucide-react'; // using a relevant icon for updates

const Updates = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Latest Updates</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Update 1 - Sailesh Patil */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://images.unsplash.com/photo-1614287542760-27be3a2c2d2d?auto=format&fit=crop&w=1350&q=80"
              alt="Sailesh Patil"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Sailesh Patil</h3>
              <div className="flex text-green-600 items-center gap-2">
                <Megaphone size={18} />
                <span className="font-medium">Update for Rajyotsava</span>
              </div>
            </div>
          </div>
          <p className="text-blue-700 leading-relaxed">
            “We are planning to celebrate <span className="font-semibold text-blue-900">Kannada Rajyotsava</span> grandly this year!  
            There will be cultural programs, community gatherings, traditional performances,  
            and lots of exciting activities that highlight our Kannada spirit.  
            Let’s come together to make this event memorable for all Ponda Kannadigas!”
          </p>
        </div>

        {/* Update 2 - Pavan Hebbare */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328a1e8b?auto=format&fit=crop&w=1350&q=80"
              alt="Pavan Hebbare"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Pavan Hebbare</h3>
              <div className="flex text-green-600 items-center gap-2">
                <Megaphone size={18} />
                <span className="font-medium">Sustainable Initiatives</span>
              </div>
            </div>
          </div>
          <p className="text-blue-700 leading-relaxed">
            “For this year’s <span className="font-semibold text-blue-900">Rajyotsava celebrations</span>,  
            we plan to keep things eco-friendly — including a <span className="font-semibold">health camp</span>  
            for our members, and a <span className="font-semibold">‘Gift a Plant’</span> drive to promote green living.  
            Let’s celebrate Kannada pride while taking care of our health and environment!”
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300"
        >
          View More Community Updates
        </a>
      </div>
    </div>
  );
};

export default Updates;
