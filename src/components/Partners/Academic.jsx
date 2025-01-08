import React from 'react';
import { Building2, Network, Lightbulb, Handshake, GraduationCap } from 'lucide-react';
import  {nitLogo,ifetlogo,pip,river,rj,smvec} from '../../assets/Partnerspage/Academic/AcadamicPartner'

function App() {
  const partnerSections = [
    { name: 'Academic', icon: <GraduationCap className="w-6 h-6" />, path: '/academic' },
    { name: 'Co-operative', icon: <Handshake className="w-6 h-6" />, path: '/cooperative' },
    { name: 'IP Supporters', icon: <Lightbulb className="w-6 h-6" />, path: '/ip-supporters' },
    { name: 'Network', icon: <Network className="w-6 h-6" />, path: '/network' },
    { name: 'Investment', icon: <Building2 className="w-6 h-6" />, path: '/investment' }
  ];

  const academicPartners = [
    { name: 'NIT Karaikal', logo: nitLogo },
    { name: 'IFET College of Engineering', logo: ifetlogo },
    { name: 'PAJANCOA & RI Karaikal', logo: pip },
    { name: 'Rajiv Gandhi Institute of Veterinary Education and Research (River)', logo: river },
    { name: 'Dr. B. R. Ambedkar Polytechnic College Yanam', logo: rj },
    { name: 'Sri Manakula Vinayagar Engineering College', logo: smvec }
  ];
  

  const handleNavigation = (path) => {
    console.log(`Navigating to ${path}`);
    // Navigation logic would go here when you add a router
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      {/* Navigation Boxes */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {partnerSections.map((section) => (
          <button
            key={section.name}
            onClick={() => handleNavigation(section.path)}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
          >
            {section.icon}
            <span className="font-medium text-gray-700">{section.name}</span>
          </button>
        ))}
      </div>

      {/* Academic Partners Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Academic Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {academicPartners.map((partner, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-32 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="mt-4 opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-xl">
                <h3 className="text-white text-lg font-semibold px-4 text-center">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
