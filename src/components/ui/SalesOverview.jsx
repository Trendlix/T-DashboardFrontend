"use client"
import React from 'react'
import SalesAreaChart from './SalesAreaChart'

const SalesOverview = () => {
  return (
    <div className='bg-white flex-1 rounded-xl py-10 px-2 shadow-xl relative flex flex-col'>
         <div className='flex flex-row justify-between px-8'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-normal text-dark'>Sales Overview For Tawwos</h1>
                <p className='text-gray-400 text-2xl'>
                    <span className='text-green-500 font-bold'>{`(+5) more`}</span> in 2023
                </p>
            </div>
        </div>
        <div className='z-5 border-b-4 border-b-gray-200 mt-4'></div>
        <SalesAreaChart />
    </div>
  )
}

export default SalesOverview