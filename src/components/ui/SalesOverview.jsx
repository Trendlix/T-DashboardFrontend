"use client"
import React from 'react'
import SalesAreaChart from './SalesAreaChart'

function SalesOverview () {
  return (
    <div className='bg-white flex-1 rounded-xl pt-4 pb-2 shadow-xl relative flex flex-col'>
         <div className='flex flex-row justify-between px-4'>
            <div className='flex flex-col'>
                <h1 className='text-xl font-semibold text-dark'>Sales Overview For Tawwos</h1>
                <p className='text-gray-400 text-sm pt-1'>
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