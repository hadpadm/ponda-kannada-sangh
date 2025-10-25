import React from 'react';

const OurTeam = () => {
  const coreTeam = [
    { name: 'Sailesh Patil', role: 'President' },
    { name: 'Suresh Hadpad', role: 'Vice President' },
    { name: 'Revansiddaya Hiremath', role: 'Secretary' },
    { name: 'Virupaksha Sir', role: 'Advisor' },
  ];

  const culturalTeam = [
    { name: 'Pavan Kumar', role: 'Cultural Coordinator' },
    { name: 'Mahalaxmi', role: 'Cultural Committee Member' },
    { name: 'Sandya', role: 'Cultural Committee Member' },
    { name: 'Manjunath', role: 'Stage & Event Coordinator' },
  ];

  const seniorMembers = [
    { name: 'Basavaraj Naik', role: 'Ex-President' },
    { name: 'Shivanna Desai', role: 'Ex-President' },
    { name: 'Ramesh Kulkarni', role: 'Ex-President' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-12 text-center">Our Team</h1>

      {/* 🌟 Core Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b-2 border-blue-300 inline-block">
          Core Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {coreTeam.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                {/* placeholder circle image */}
                <img
                  src="https://via.placeholder.com/150"
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🎭 Cultural Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b-2 border-blue-300 inline-block">
          Cultural Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {culturalTeam.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="https://via.placeholder.com/150"
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 👴 Senior Members */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b-2 border-blue-300 inline-block">
          Senior Members / Ex-Presidents
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {seniorMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="https://via.placeholder.com/150"
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
