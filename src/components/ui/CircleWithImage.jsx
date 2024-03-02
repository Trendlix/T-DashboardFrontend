import Image from "next/image"

import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';


function CircleWithImage ({ percentage, imageUrl, borderColor, circleColor, shadowColor}){
  return (
    <div 
    className="relative w-[70px] h-[70px] rounded-full flex items-center justify-center" 
    style={{background: `conic-gradient(${borderColor} 0turn ${percentage}deg, #1111 0turn )`, animation: 'animate 3s linear forwards'}}>
        <div className="w-[60px] h-[60px] bg-[#fff] rounded-full flex items-center justify-center shadow-xl" style={{backgroundColor: circleColor}}>
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full" style={{boxShadow:`0 4px 12px 9px ${shadowColor}`}}>
            <Image src={imageUrl} width="auto" height="auto" alt="Circle Image" className="w-6 h-6" />
          </div>
        </div>
    </div>
        // <div className={`relative w-20 h-20 border-[#D21734] rounded-full`} 
        //   style={{backgroundColor: circleColor}}
        // >
        //   {/* Circle with border */}
        //   <div
        //     className="absolute inset-0 rounded-full flex items-center justify-center shadow-xl circle-with-border"
        //   >
        //     <div className="inset-0 flex items-center justify-center bg-white rounded-full w-8 h-8" 
        //         style={{boxShadow:`0 4px 12px 9px ${shadowColor}`}}
        //     >
        //         <Image src={imageUrl} width="auto" height="auto" alt="Circle Image" className="w-6 h-6" />
        //     </div>
        //   </div>      
        // </div>
  );
};

export default CircleWithImage;

