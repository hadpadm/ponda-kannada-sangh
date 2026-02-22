// src/pages/Team.tsx
import React from 'react';
import placeholder from '../assets/team/placeholder.jpg';

/* Cultural Team images */
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
import saileshPatil from '../assets/sailesh-patil.jpg';
import vinayk from '../assets/vinayak.jpg';
import virupaksh from '../assets/virupaksh.jpg';
import sanjay from '../assets/sanjay.jpg';
import manjunathHadpad from '../assets/manjunath.jpg';
import SURESHKANAVI from '../assets/SURESH KANAVI.jpg';
import daneshwaripatil from '../assets/daneshwari patil.jpg';
import sureshhadpad from '../assets/sureshhadpad.jpg';
import DeepakGaneshDeshbhandari from '../assets/Deepak Ganesh Deshbhandari.jpg';
import siddu from '../assets/sidu.jpg';
import pavan from '../assets/pavan.jpg';
import sandip from '../assets/sandip.jpg';
import shri from '../assets/Srinivas kalagi.jpg';
import raj from '../assets/raj.jpg';


/* Optional meeting images */
import teamMeeting1 from '../assets/team/team-meeting1.jpg';
import teamMeeting2 from '../assets/team/team-meeting2.jpg';

// --- types ---
interface Member {
  name: string;
  role: string;
  img?: string;
  // optional tweaks for image rendering:
  pos?: string; // object-position, e.g. "center 30%"
  fit?: 'cover' | 'contain'; // object-fit override
}

// helper to pick image (fallback to placeholder)
const getImg = (img?: string): string => img ?? placeholder;

/**
 * > How to tweak faces:
 * - If a face is cut off at the top: add pos: 'center 30%'
 * - If the image is a portrait where cover hides the face, use fit: 'contain'
 * - Add the pos/fit next to the member entry below for that person
 */

const OurTeam: React.FC = () => {
  const coreTeam: Member[] = [
    // Example: tweak Sailesh to show more top area of photo
    { name: 'Shri. Sailesh Patil', role: 'President', img: saileshPatil, pos: 'center 40%' },
    { name: 'Shri. Suresh Hadpad', role: 'Vice President', img: sureshhadpad, pos: 'center 20%' },
    { name: 'Shri. Revansiddhya Hiremath', role: 'Vice President', img: siddu, pos: 'center 40%' },

    // If virupaksh photo needs default centering, omit pos
    { name: 'Shri. Virupaksha Thondihal', role: 'Secretary', img: virupaksh, pos: 'center 40%' },

    // Example: if some image is tall and cropping removes face, use contain
    { name: 'Shri. Deepak Ganesh Deshbhandari', role: 'Vice Treasurer ', img: DeepakGaneshDeshbhandari, fit: 'contain' },

    
    { name: 'Shri. SURESH KANAVI', role: 'Vice Secretary', img: SURESHKANAVI, pos: 'center 35%' },
    { name: 'Shri. Sanjay Shiragannavar', role: 'Treasurer', img: sanjay },
    { name: 'Shri. Rajat shetty ', role: 'Core team member', img: raj },
  ];

  const culturalTeam: Member[] = [
    // You can add pos/fit on any item below if it needs adjustments
    { name: 'Shri Manjunath Hadpad', role: 'Cultural Committee Member', img: manjunathHadpad, pos: 'center 40%' },
    { name: 'Shri Pavan Hebbare', role: 'Cultural & Core Committiee and ', img: pavan, pos: 'center 40%' },
    { name: 'Shri Sandeep Naik ', role: 'Cultural Committee Member', img: sandip, pos: 'center 40%' },
    { name: 'Shri Srinivas kalagi', role: 'Cultural Committee Member', img: shri, pos: 'center 40%' },
    { name: 'Shri Vinayak Talwar', role: 'Cultural Committee Member', img: vinayk },
    { name: 'Smt. Mahalaxmi Naveen', role: 'Stage & Event Coordinator', img: smtMahalaxmiNaveen },
    { name: 'Smt. Sandhya Ganesh', role: 'Stage & Event Coordinator', img: smtSandhyaGanesh },
    { name: 'Smt. Nandini Kanbur', role: 'Cultural Committee Member', img: smtNandiniKanbur },
    { name: 'Smt. Shardha Manirakar', role: 'Cultural Events Organiser', img: smtShardhaManirakar },
    { name: 'Smt. Sujata Pattar', role: 'Cultural Committee Member', img: smtSujataPattar, pos: 'center 45%' },
    { name: 'Smt. Rashmi Shetty', role: 'Cultural Committee Member', img: smtRashmiShetty },
    { name: 'Smt. Chennamma Hiremath', role: 'Cultural Committee Member', img: smtChennammaHiremath },
    { name: 'Smt. Smitha Shirganavar', role: 'Cultural & Core Committee Member', img: smtSmithaShirgannavar },
    { name: 'Smt. Seema Prasad', role: 'Cultural Committee Member', img: smtSeemaPrasad },
    { name: 'Smt. Shailaja Kanavi', role: 'Cultural Committee Member', img: smtShailajaKanavi },
    { name: 'Smt. Daneshwari Patil', role: 'Cultural Committee Member', img: daneshwaripatil },
  ];

  const seniorMembers: Member[] = [
    // add as needed
  ];

  // small helper to return inline style for image element
  const imgStyle = (m: Member | undefined) => {
    const style: React.CSSProperties = {};
    // object-fit
    style.objectFit = m?.fit ?? 'cover';
    // object-position
    style.objectPosition = m?.pos ?? 'center';
    return style;
  };

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
              {/* Larger avatar for core team */}
              <div className="w-36 h-36 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <img
                  src={getImg(member.img)}
                  alt={member.name}
                  className="w-full h-full"
                  style={imgStyle(member)}
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {culturalTeam.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <img
                  src={getImg(member.img)}
                  alt={member.name}
                  className="w-full h-full"
                  style={imgStyle(member)}
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

  {/* Senior Members List */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    <div>
      <h3 className="text-lg font-semibold text-blue-800">Muraleedhara Aribenchi</h3>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-800">Dr. Raghunandan Mysore</h3>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-800">Dr. Krishna Badiger</h3>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-800">Smt. Nandini Kanabur</h3>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-800">Prof. Prabhulinga Dandin</h3>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-800">Shri Raghavendra Kanchi</h3>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-800">Shri Prakash Renake</h3>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-800">Shri Siddhalingayya Hiremath</h3>
    </div>
  </div>
</section>

    </div>
  );
};

export default OurTeam;
