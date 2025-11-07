import React from "react";

const KannadaSiri = () => {
  return (
    <div className="container mx-auto px-4 py-16" id="kannada-siri">
      {/* 🌄 Hero Section */}
      <div className="relative w-full h-80 md:h-[400px] mb-12 rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://via.placeholder.com/1200x400" // replace later with your Kannada Siri image
          alt="Kannada Siri Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            Kannada Siri (ಕನ್ನಡ ಸಿರಿ)
          </h1>
        </div>
      </div>

      {/* 📜 Description Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
          Cultural Wing of Ponda Kannada Sangh
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Kannada Siri (ಕನ್ನಡ ಸಿರಿ)</strong> is the cultural wing of Ponda
          Kannada Sangh, established with the aim of nurturing and promoting the
          Kannada language, art, and traditions among the people of Ponda and
          Goa. It serves as a vibrant platform for Kannadigas to come together,
          celebrate their heritage, and share the joy of Kannada culture with
          the wider community.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
          <li>
            Kannada Siri conducts Kannada language classes every weekend,
            helping individuals learn, read, and speak Kannada confidently.
          </li>
          <li>
            Members are encouraged to speak Kannada—at least with fellow
            Kannadigas—to preserve the language and keep it alive in daily
            communication.
          </li>
          <li>
            The organization celebrates Kannada culture through a variety of
            events such as dance performances, traditional food festivals, and
            cultural gatherings, showcasing the essence and richness of
            Karnataka’s heritage.
          </li>
          <li>
            The monthly <strong>“Harate Katte”</strong> brings people together in
            a relaxed environment to talk, laugh, share ideas, and relieve
            stress from daily work life, creating a strong sense of togetherness
            and belonging.
          </li>
          <li>
            Kannada Siri also arranges small field trips and outdoor activities
            to strengthen community bonding and provide members with joyful,
            shared experiences.
          </li>
          <li>
            In addition, it promotes online creative initiatives such as
            reel-making and digital campaigns to spread awareness and
            appreciation of Kannada language and culture among younger
            generations.
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Through these consistent and heartfelt efforts,{" "}
          <strong>Kannada Siri (ಕನ್ನಡ ಸಿರಿ)</strong> continues to build a
          close-knit, happy, and culturally rich Kannada community in Ponda and
          across Goa — fostering pride, unity, and joy in being part of the
          Kannada heritage.
        </p>
      </div>
    </div>
  );
};

export default KannadaSiri;
