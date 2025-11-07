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
In the heart of Goa, where languages and cultures meet, a few Kannadiga hearts beat in unison.
It was 1986 — when a handful of visionaries, each contributing just ₹10, planted the seed of what would one day become the Ponda Kannada Sangha.

There were no grand meetings or feasts back then — only vadapav, chai, and endless discussions about keeping Kannada alive. Using letters through postmen and simple phone calls, people were invited, gathered, and united by one dream — to keep the Kannada language and spirit thriving in Goa.

Guided by devoted elders like Shri Hiremath, Renke Saheb, and later Badiger Sir, the Sangha grew from a humble gathering into a proud cultural organization.
From small halls to Goa Doordarshan appearances, and from early cultural meets to hosting Karnataka Kala Mattu Samskruti events — the journey was both poetic and powerful.

Voices like Vrunda Vishwanathan and Dandin Sir added color and grace to those early programs.
And when the Sangha celebrated its Silver Jubilee 25 years later, with every member contributing ₹100 each, it wasn’t just a celebration — it was a salute to decades of unity, passion, and Kannada pride.

From ten rupees to timeless memories,
from letters to legacy —
this is our story.
This is Ponda Kannada Sangha.

Today, after decades of service, our Sangha continues to uphold its mission — to celebrate Kannada identity, strengthen cultural bonds, and nurture community spirit across Goa.
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
            Our strength lies in our people — passionate members, senior cultural leaders, and new-age volunteers who keep the Sangha spirit alive.
Among us are writers, speakers, and cultural promoters who carry forward the rich tradition of Kannada.
Soon, we’ll share their articles, stories, and reflections, inspiring everyone to take pride in our language and culture.
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
