// src/components/OurTeam.jsx
import React from 'react';

// Placeholder (must exist at src/assets/team/placeholder.jpg)
import placeholder from '../assets/team/placeholder.jpg';

/* Core Team */
// (commented out — add image files & imports later if needed)
// import saileshPatil from '../assets/team/sailesh-patil.jpg';
// import sureshHadpad from '../assets/team/suresh-hadpad.jpg';
// import revansiddayaHiremath from '../assets/team/revansiddaya-hiremath.jpg';
// import virupakshaSir from '../assets/team/virupaksha-sir.jpg';

/* Cultural Team - imports match filenames shown in your screenshot */
import smtDhaneshwariPatil from '../assets/team/Smt dhaneshwari patil.jpg';
import smtMahalaxmiNaveen from '../assets/team/Smt mahalaxmi Naveen.jpg';
import smtNandiniKanbur from '../assets/team/Smt Nandini kanbur.jpg';
import smtRashmiShetty from '../assets/team/Smt rashmi Shetty.jpg';
import smtSeemaPrasad from '../assets/team/Smt Seema Prasad.jpg';
import smtShailajaKanavi from '../assets/team/Smt Shailaja kanavi.jpg';
import smtShardhaManirakar from '../assets/team/Smt Shardha manirakar.jpg';
import smtSmithaShirganavar from '../assets/team/Smt Smitha Shirganavar.jpg';
import smtSujataPattar from '../assets/team/Smt Sujata Pattar.jpg';
import smtChennammaHiremath from '../assets/team/Smt.Chennamma Hiremath.jpg';
import smtSandhyaGanesh from '../assets/team/Smt.Sandhya ganesh.jpg';
/* team meeting images (if you want to show them anywhere) */
import teamMeeting1 from '../assets/team/team meeting1.jpg';
import teamMeeting2 from '../assets/team/team meeting2.jpg';

/* Senior Members / Ex-Presidents */
// import basavarajNaik from '../assets/team/basavaraj-naik.jpg';
// import shivannaDesai from '../assets/team/shivanna-desai.jpg';
// import rameshKulkarni from '../assets/team/ramesh-kulkarni.jpg';

// fallback-safe helper: typed param to avoid "any" warning
const getImg = (img) => (img ? img : placeholder);

const OurTeam = () => {
  const coreTeam = [
    // Add core team members here when you have their images
    // { name: 'Shri. Sailesh Patil', role: 'President', img: saileshPatil },
  ];

  const culturalTeam = [
    { name: 'Smt. Mahalaxmi Naveen', role: 'Stage & Event Coordinator', img: smtMahalaxmiNaveen },
    { name: 'Smt. Sandhya Ganesh', role: 'Stage & Event Coordinator', img: smtSandhyaGanesh },
    { name: 'Smt. Nandini Kanbur', role: 'Cultural Committee Member', img: smtNandiniKanbur },
    { name: 'Smt. Shardha Manirakar', role: 'Cultural Events Organiser', img: smtShardhaManirakar },
    { name: 'Smt. Sujata Pattar', role: 'Cultural Committee Member', img: smtSujataPattar },
    { name: 'Smt. Rashmi Shetty', role: 'Cultural Committee Member', img: smtRashmiShetty },
    { name: 'Smt. Chennamma Hiremath', role: 'Cultural Committee Member', img: smtChennammaHiremath },
    { name: 'Smt. Smitha Shirganavar', role: 'Cultural & Core Committee Member', img: smtSmithaShirganavar },
    { name: 'Smt. Seema Prasad', role: 'Cultural Committee Member', img: smtSeemaPrasad },
    { name: 'Smt. Shailaja Kanavi', role: 'Cultural Committee Member', img: smtShailajaKanavi },
    { name: 'Smt. Dhaneshwari Patil', role: 'Cultural Committee Member', img: smtDhaneshwariPatil },
    // If you add more images later, add them here
  ];

  const seniorMembers = [
    // Add senior members here when images available
    // { name: 'Basavaraj Naik', role: 'Ex-President', img: basavarajNaik },
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
          {coreTeam.length === 0 && (
            <p className="text-center col-span-full text-gray-600">Core team photos coming soon.</p>
          )}
          {coreTeam.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <img src={getImg(member.img)} alt={member.name} className="w-full h-full object-cover" />
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
                <img src={getImg(member.img)} alt={member.name} className="w-full h-full object-cover" />
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
          {seniorMembers.length === 0 && (
            <p className="text-center col-span-full text-gray-600">Senior members will be added soon.</p>
          )}
          {seniorMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <img src={getImg(member.img)} alt={member.name} className="w-full h-full object-cover" />
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
