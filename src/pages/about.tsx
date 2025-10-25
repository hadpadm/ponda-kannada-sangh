import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">About Our Organization</h1>
      <div className="space-y-8">
        {/* About Us Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Who We Are</h2>
          <p className="text-blue-600 leading-relaxed">
            We are a vibrant community celebrating Kannada culture for over 10 years in Mumbai.
            Our mission is to promote cultural unity through festivals, social service, and educational initiatives.
          </p>
        </section>

        {/* Activities Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Activities</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>Regular Kannada festivals including Rajyotsava celebrations.</li>
            <li>Blood donation drives and health camps.</li>
            <li>Tree plantation drives and environmental awareness programs.</li>
            <li>Supported the community during COVID-19 by distributing ration and essentials.</li>
            <li>Active cultural and core teams organizing events throughout the year.</li>
          </ul>
        </section>

        {/* Core Team Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Team</h2>
          <p className="text-blue-600 leading-relaxed">
            Our small but passionate team includes senior members who are accomplished writers and cultural promoters.
            We will soon be sharing articles and stories written by them to inspire and educate our community.
          </p>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-100 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
          <p className="mb-4 text-blue-700">
            Join us in promoting Kannada culture and making a positive impact in our community. Together we can grow stronger!
          </p>
          {/* Example Link: You can change or remove this as per your routing */}
          <a href="/contact" className="inline-block bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
