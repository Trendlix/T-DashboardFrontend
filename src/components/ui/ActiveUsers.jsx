"use client"
import React from 'react'
import ActiveUsersChart from './ActiveUsersChart'
import Image from 'next/image'
import Wallet from "@/public/icons/wallet.svg"
import Rocket from "@/public/icons/rocket.svg"
import Cart from "@/public/icons/cart.svg"
import Items from "@/public/icons/items.svg"


function ActiveUsers () {
  const activityData = [
    {
      id: 1,
      icon: Wallet,
      label: 'Users',
      number: '32,984',
      percentage: 60
    },
    {
      id: 2,
      icon: Rocket,
      label: 'Clicks',
      number: '2,42m',
      percentage: 80
    },
    {
      id: 3,
      icon: Cart,
      label: 'Sales',
      number: '2,400$',
      percentage: 40
    },
    {
      id: 4,
      icon: Items,
      label: 'Items',
      number: '320',
      percentage: 70
    },
    
  ]
  return (
    <div className='bg-white w-3/5 rounded-xl pt-4 pb-6 px-5 shadow-xl'>
      <ActiveUsersChart />
      <div className='pt-3'>
        <h3 className='text-xl p-2 text-dark'>Active Users For Tendlix Property</h3>
        <p className='text-gray-400 text-sm pl-2'>
          <span className='text-green-500 font-bold'>{`(+23)`}</span> than last week
        </p>

        <div className='flex flex-row items-center justify-between pt-8'>
          {activityData.map((item)=>(
            <div key={item.id} className='flex flex-col'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='bg-[#D01733] px-2 py-2 rounded-lg'>
                  <Image src={item.icon} width={15} height={15} alt='icon image'/>
                </div>
                <p className='text-gray-400 text-xs'>{item.label}</p>
              </div>
              <p className='text-dark font-bold text-xl py-1'>{item.number}</p>
              <div className='bg-gray-200 w-[100px] h-1 rounded-full'>
                <div className='bg-[#D01733] h-full rounded-full' style={{width: `${item.percentage}%`}}></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default ActiveUsers