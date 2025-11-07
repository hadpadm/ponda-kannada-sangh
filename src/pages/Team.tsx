// src/components/OurTeam.jsx
import React from 'react';


import placeholder from '../assets/team/placeholder.jpg';

/* Core Team */
import saileshPatil from '../assets/team/sailesh-patil.jpg';
import sureshHadpad from '../assets/team/suresh-hadpad.jpg';
import revansiddayaHiremath from '../assets/team/revansiddaya-hiremath.jpg';
import virupakshaSir from '../assets/team/virupaksha-sir.jpg';

/* Cultural Team */
import smtDhaneshwariPatil from '../assets/team/Smt dhaneshwari patil.jpg';
import smtMahalaxmiNaveen from '../assets/team/Smt mahalaxmi Naveen.jpg';
import smtNandiniKanbur from '../assets/team/Smt Nandini kanbur.jpg';
import smtRashmiShetty from '../assets/team/Smt rashmi Shetty.jpg';
import smtSeemaPrasad from '../assets/team/Smt Seema Prasad.jpg';
import smtShailajaKanavi from '../assets/team/Smt Shailaja kanavi.jpg';
import smtShardhaManirakar from '../assets/team/Smt Shardha manirakar.jpg';
import smtSmithiaShirganavar from '../assets/team/Smt Smitha Shirganavar.jpg';
import smtSujataPattar from '../assets/team/Smt Sujata Pattar.jpg';
import smtChennammaHiremath from '../assets/team/Smt Chennamma Hiremath.jpg';
import smtSandhyaGanesh from '../assets/team/Smt.Sandhya ganesh.jpg';

/* Senior Members / Ex-Presidents */
import basavarajNaik from '../assets/team/basavaraj-naik.jpg';
import shivannaDesai from '../assets/team/shivanna-desai.jpg';
import rameshKulkarni from '../assets/team/ramesh-kulkarni.jpg';

// --- types & helpers for Team.tsx ---
type Member = {
  name: string;
  role: string;
  img?: string; // image import resolves to string in Vite
};

// fallback-safe helper: typed param to avoid "any" warning
const getImg = (img?: string): string => img || placeholder;
// ------------------------------------


const OurTeam = () => {
  const coreTeam = [
    { name: 'Sailesh Patil', role: 'President', img: saileshPatil },
    { name: 'Suresh Hadpad', role: 'President', img: sureshHadpad },
    { name: 'Revansiddaya Hiremath', role: 'Secretary', img: revansiddayaHiremath },
    { name: 'Virupaksha Sir', role: 'Advisor', img: virupakshaSir },
  ];

const culturalTeam = [
 // { name: 'Shri. Pavan Hebbare', role: 'Cultural Coordinator', img: pavanHebbare }, // no image yet
  { name: 'Smt. Mahalaxmi Naveen', role: 'Stage & Event Coordinator', img: smtMahalaxmiNaveen },
  { name: 'Smt. Sandhya Ganesh', role: 'Stage & Event Coordinator', img: smtSandhyaGanesh },
  //{ name: 'Shri. Manjunath', role: 'Cultural Coordinator', img: manjunath }, // no image yet
  { name: 'Smt. Nandini Kanbur', role: 'Cultural Committee Member', img: smtNandiniKanbur },
  { name: 'Smt. Shardha Manirakar', role: 'Cultural Events Organiser', img: smtShardhaManirakar },
  { name: 'Smt. Sujata Pattar', role: 'Cultural Committee Member', img: smtSujataPattar },
  { name: 'Smt. Rashmi Shetty', role: 'Cultural Committee Member', img: smtRashmiShetty },
  { name: 'Smt. Chennamma Hiremath', role: 'Cultural Committee Member', img: smtChennammaHiremath },
  { name: 'Smt. Smitha Shirganavar', role: 'Cultural & Core Committee Member', img: smtSmithiaShirganavar },
 // { name: 'Shri. Vinayak Talwar', role: 'Cultural Committee Member', img: vinayakTalwar }, // no image yet
  { name: 'Smt. Seema Prasad', role: 'Cultural Committee Member', img: smtSeemaPrasad },
  { name: 'Smt. Shailaja Kanavi', role: 'Cultural Committee Member', img: smtShailajaKanavi },
  { name: 'Smt. Dhaneshwari Patil', role: 'Cultural Committee Member', img: smtDhaneshwariPatil },
 // { name: 'Kerala Girl', role: 'Cultural Events Organiser', img: keralaGirl }, // no image yet
 // { name: 'Bad Singing Madam', role: 'Cultural Committee Member', img: badSingingMadam }, // no image yet
 // { name: 'Shri. Shivaji', role: 'Cultural Committee Member', img: shivaji }, // no image yet
];



  const seniorMembers = [
    { name: 'Basavaraj Naik', role: 'Ex-President', img: basavarajNaik },
    { name: 'Shivanna Desai', role: 'Ex-President', img: shivannaDesai },
    { name: 'Ramesh Kulkarni', role: 'Ex-President', img: rameshKulkarni },
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
                <img
                  src={getImg(member.img)}
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
                  src={getImg(member.img)}
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
                  src={getImg(member.img)}
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
