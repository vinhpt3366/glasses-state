import React, { useState } from "react";
import { data } from "../assets/dataGlasses";
const glassesData = data;

const GlassesTryOnApp = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleSelectGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">TRY GLASSES APP ONLINE</h1>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center mb-8 space-x-8">
          {/* Card with overlapping content */}
          <div className="relative w-72 h-96 overflow-hidden rounded-lg shadow-md">
            <img src="./assets/glassesImage/model.jpg" alt="Model" className="w-full h-full object-cover" />
            {selectedGlasses && <img src={selectedGlasses.url} alt={selectedGlasses.name} className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-2/3" />}
            {/* Overlapping content */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32 flex flex-col justify-end p-4">
              <h5 className="text-xl font-bold text-white mb-2">{selectedGlasses ? selectedGlasses.name : ""}</h5>
              <p className="text-sm text-white">{selectedGlasses ? selectedGlasses.desc : ""}</p>
            </div>
          </div>

          {/* Second model image */}
          <div className="relative w-72 h-96 overflow-hidden rounded-lg shadow-md">
            <img src="./assets/glassesImage/model.jpg" alt="Model" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Glasses selection grid */}
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          {glassesData.map((glasses) => (
            <div key={glasses.id} className="border border-gray-300 p-2 cursor-pointer hover:border-blue-500 transition duration-300 w-24 h-24" onClick={() => handleSelectGlasses(glasses)}>
              <img src={glasses.url} alt={glasses.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlassesTryOnApp;
