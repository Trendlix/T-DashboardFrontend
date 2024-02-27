"use client"
import React from 'react'
import Image from "next/image"
import backArrow from "@/public/icons/back-arrow.svg"
import Link from "next/link"
import { useRouter } from 'next/navigation'

function BackArrow () {
    const router = useRouter()

    const handleBackClick = () =>{
        router.back()
    }
    
  return (
    <button onClick={handleBackClick} className='flex flex-row gap-3 items-center pb-6'>
        <Image src={backArrow} width={10} height={10} alt='back arrow' />
        <p className='text-gray-400 font-bold text-xl'>Back</p>
    </button>
  )
}

export default BackArrow