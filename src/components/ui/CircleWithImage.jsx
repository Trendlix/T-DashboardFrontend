// Your component file, e.g., CircleWithImage.js
import Image from "next/image"

import React from 'react';

const CircleWithImage = ({ percentage, imageUrl, borderColor, circleColor }) => {
  // Calculate the border radius based on the percentage
  const borderRadius = `${percentage}%`;
  console.log(borderRadius);

  return (
    <div className={`relative w-[100px] h-[100px] border-[#D21734] rounded-full overflow-hidden`} 
      style={{backgroundColor: circleColor}}
    >
      {/* Circle with border */}
      <div
        className="absolute inset-0 border-pink-600 rounded-full flex items-center justify-center shadow-xl"
        style={{borderRadius: '50%'}}
      >
        <div className="inset-0 flex items-center justify-center bg-white rounded-full w-14 h-14" 
            style={{boxShadow:'0 4px 12px 9px #f3aab4'}}
        >
            <Image src={imageUrl} alt="Circle Image" className="w-10 h-10" />
        </div>
      </div>
      

      {/* Image in the center */}
    </div>
  );
};

export default CircleWithImage;
