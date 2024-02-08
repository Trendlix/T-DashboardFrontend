"use client"
import React from 'react'
import Link from 'next/link';
import Image from "next/image"
import redCircle from "@/public/icons/red-circle.svg"
import yellowCircle from "@/public/icons/yellow-circle.svg"
import tawwosWord from "@/public/icons/tawwos-word.svg"
import trashWhite from "@/public/icons/trash-white.svg"




const WebsiteCard = ({item, index, isDelete = false}) => {
  return (
    <div className={`h-[200px] flex flex-row justify-between items-center py-14 px-8 ${isDelete && `pr-24`} ${index % 2!==0 ? `bg-gray-100`: `bg-white`}`}>
        <div className='flex flex-row gap-14 items-center'>
            {item.isCustom ? (<Image src={redCircle} width={16} height={16} alt='icon colored' />) : (<Image src={yellowCircle} width={16} height={16} alt='icon colored' />)}
            {item.company === 'Tawwos' ? 
            (
            <div className='flex flex-row items-center'>
                <Image src={item.logo} width={120} height={120} alt='company logo'/>
                <Image src={tawwosWord} width={75} height={75} alt='company logo' className='ml-[-78px]'/>
            </div>
            ) : (
                <Image src={item.logo} width={item.company==='Farawla Tech' || item.company==='Trendlix' ? 60 : 100} height={item.company === 'Farawla Tech' || item.company==='Trendlix' ? 50 : 100} alt='company logo'/>
            )}
            <p className='text-xl font-semibold text-gray-700'>{item.company}</p>
        </div>
        {isDelete ? 
        (
            <div className='flex flex-row gap-1 items-center text-sm py-2 px-6 rounded-md text-white bg-[#FF0000]'>
                <Image src={trashWhite} width={15} height={15} alt='trash icon' />
                <button type='button' onClick={()=>{}} >
                Remove User
                </button>
            </div>
        ) : (
            <div className='flex flex-row gap-3 items-center text-l font-semibold'>
                <a href={item.websiteLink} target='_blank' className={`text-white py-2 px-6 rounded-xl bg-gradient-to-r ${item.isCustom ? `from-[#e06d7e] to-[#e24a61]` : `from-[#F8C128] to-[#f0d68f]`} `}>Visit Website</a>
                <Link href={item.adminDashboardLink} className='text-gray-600 bg-gray-200 py-2 px-6 rounded-xl'>Admin Dashboard</Link>
            </div>
        )}
    </div>
  )
}

export default WebsiteCard