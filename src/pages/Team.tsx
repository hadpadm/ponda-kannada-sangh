// src/pages/Team.tsx
import React from 'react';
import placeholder from '../assets/team/placeholder.jpg';

/* Cultural Team images */
import smtDhaneshwariPatil from '../assets/team/smt-dhaneshwari-patil.jpg';
import smtMahalaxmiNaveen from '../assets/team/smt-mahalaxmi-naveen.jpg';
import smtNandiniKanbur from '../assets/team/smt-nandini-kanbur.jpg';
import smtRashmiShetty from '../assets/team/smt-rashmi-shetty.jpg';
import smtSeemaPrasad from '../assets/team/smt-seema-prasad.jpg';
import smtShailajaKanavi from '../assets/team/smt-shailaja-kanavi.jpg';
import smtShardhaManirakar from '../assets/team/smt-shardha-manirakar.jpg';
import smtSmithaShirgannavar from '../assets/team/smt-smitha-shirgannavar.jpg';
import smtSujataPattar from '../assets/team/smt-sujata-pattar.jpg';
import smtChennammaHiremath from '../assets/team/smt-chennamma-hiremath.jpg';
import smtSandhyaGanesh from '../assets/team/smt-sandhya-ganesh.jpg';

/* Optional meeting images */
import teamMeeting1 from '../assets/team/team-meeting1.jpg';
import teamMeeting2 from '../assets/team/team-meeting2.jpg';

// --- types ---
interface Member {
  name: string;
  role: string;
  img?: string;
}

// --- helper ---
const getImg = (img?: string): string => img ?? placeholder;

// --- component ---
const OurTeam: React.FC = () => {
  const coreTeam: Member[] = [
    // { name: 'Shri. Sailesh Patil', role: 'President', img: saileshPatil },
  ];

  const culturalTeam: Member[] = [
    { name: 'Smt. Mahalaxmi Naveen', role: 'Stage & Event Coordinator', img: smtMahalaxmiNaveen },
    { name: 'Smt. Sandhya Ganesh', role: 'Stage & Event Coordinator', img: smtSandhyaGanesh },
    { name: 'Smt. Nandini Kanbur', role: 'Cultural Committee Member', img: smtNandiniKanbur },
    { name: 'Smt. Shardha Manirakar', role: 'Cultural Events Organiser', img: smtShardhaManirakar },
    { name: 'Smt. Sujata Pattar', role: 'Cultural Committee Member', img: smtSujataPattar },
    { name: 'Smt. Rashmi Shetty', role: 'Cultural Committee Member', img: smtRashmiShetty },
    { name: 'Smt. Chennamma Hiremath', role: 'Cultural Committee Member', img: smtChennammaHiremath },
    { name: 'Smt. Smitha Shirganavar', role: 'Cultural & Core Committee Member', img: smtSmithaShirgannavar },
    { name: 'Smt. Seema Prasad', role: 'Cultural Committee Member', img: smtSeemaPrasad },
    { name: 'Smt. Shailaja Kanavi', role: 'Cultural Committee Member', img: smtShailajaKanavi },
    { name: 'Smt. Dhaneshwari Patil', role: 'Cultural Committee Member', img: smtDhaneshwariPatil },
  ];

  const seniorMembers: Member[] = [
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
            <p className="col-span-full text-center text-gray-600">
              Core team members will be updated soon.
            </p>
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
            <p className="col-span-full text-center text-gray-600">
              Senior members will be added soon.
            </p>
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
