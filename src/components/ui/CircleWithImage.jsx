// Your component file, e.g., CircleWithImage.js
import Image from "next/image"

import React from 'react';

function CircleWithImage ({ percentage, imageUrl, borderColor, circleColor, shadowColor}){
  // Calculate the border radius based on the percentage
  const borderRadius = `${percentage}%`;
  console.log(borderRadius);

  return (
    <div className={`relative w-20 h-20 border-[#D21734] rounded-full`} 
      style={{backgroundColor: circleColor}}
    >
      {/* Circle with border */}
      <div
        className="absolute inset-0 rounded-full flex items-center justify-center shadow-xl circle-with-border"
      >
        <div className="inset-0 flex items-center justify-center bg-white rounded-full w-8 h-8" 
            style={{boxShadow:`0 4px 12px 9px ${shadowColor}`}}
        >
            <Image src={imageUrl} width="auto" height="auto" alt="Circle Image" className="w-6 h-6" />
        </div>
      </div>      
    </div>
  );
};

export default CircleWithImage;
