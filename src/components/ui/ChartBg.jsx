"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Dots from "@/public/icons/dots.svg"
import Export from "@/public/icons/export.svg"
import Trash from "@/public/icons/trash.svg"
import Eye from "@/public/icons/eye.svg"

function ChartBg ({children, title, subTitle, statValue = '', isWidthHalf = true}) {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () =>{
        setIsOpen(!isOpen)
    }

    const modalRows = [
        {
            id: 1,
            icon: Eye,
            label: 'View'
        },
        {
            id: 2,
            icon: Export,
            label: 'Export'
        },
        {
            id: 3,
            icon: Trash,
            label: 'Remove'
        }
    ]
  return (
    <div className={`${isWidthHalf ? 'w-1/2' : 'w-full'} bg-white rounded-lg pt-3 pb-4 shadow-xl relative flex flex-col`}>
        <div className='flex flex-row justify-between px-6'>
            <div>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <h2 className='text-gray-400 px-1 text-sm'>{subTitle}</h2>
            </div>
            <button onClick={openModal}>
                <Image src={Dots} width={15} height={15} alt='options' />
            </button>
        </div>
            {isOpen && (
                <div className='flex justify-end'>
                    <div className='absolute top-3 right-6 mt-8 bg-white border p-4 w-44 h-32 rounded-lg shadow-xl flex flex-col gap-3 opacity-90'>
                        {modalRows.map((row)=>(
                            <button key={row.id} className='flex flex-row items-center gap-2'>
                                <Image src={row.icon} width={22} height={22} alt='icon' />
                                <p className={`text-gray-500 text-base ${row.label==='Remove' && `text-orange-500`}`}>{row.label}</p>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        <div className='z-5 border-b-2 border-b-gray-200 mt-2'></div>
        {statValue !== '' && (
            <div className='py-1 px-5'>
                <h3 className='text-3xl text-dark font-medium'>{statValue} K</h3>
            </div>
        )}
        <div className='flex-1'>
            {children}
        </div>
    </div>
  )
}

export default ChartBg