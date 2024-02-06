import React from 'react'
import Image from "next/image"
import BlueBell from "@/public/icons/bell-blue.svg"
import Web from "@/public/icons/web.svg"
import BlueCart from "@/public/icons/cart-blue.svg"
import Payment from "@/public/icons/payment.svg"
import Dropbox from "@/public/icons/dropbox.svg"
import Xd from "@/public/icons/xd.svg"



const OrdersOverview = () => {
    const salesData = [
        {
            id: 1,
            icon: BlueBell,
            label: '$2400, Design Changes',
            date: '22 DEC 11:21 PM'

        },
        {
            id: 2,
            icon: Web,
            label: 'New order #4219423',
            date: '21 DEC 11:21 PM'

        },
        {
            id: 3,
            icon: BlueCart,
            label: 'Server Payments for April',
            date: '21 DEC 9:28 PM'

        },
        {
            id: 4,
            icon: Payment,
            label: 'New card added for order #3210145',
            date: '20 DEC 3:52 PM'

        },
        {
            id: 5,
            icon: Dropbox,
            label: 'Unlock packages for Development',
            date: '19 DEC 11:35 PM'

        },
        {
            id: 6,
            icon: Xd,
            label: 'New order #9851258',
            date: '18 DEC 4:41 PM'

        },

    ]
  return (
    <div className='bg-white w-[650px] rounded-xl ml-[-32px] py-10 px-2 shadow-xl relative flex flex-col'>
         <div className='flex flex-row justify-between px-8'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-normal text-dark'>Orders Overview For Maggadit</h1>
                <p className='text-gray-400 text-2xl'>
                    <span className='text-green-500 font-bold'>{`+30%`}</span> this month
                </p>
            </div>
        </div>
        <div className='z-5 border-b-4 border-b-gray-200 mt-4'></div>
        <div className='mt-6'>
            {salesData.map((item)=>(
                <div key={item.id} className='flex flex-row gap-4 px-4 py-1'>
                    <div className='h-24 flex flex-col gap-2'>
                        <Image src={item.icon} height={28} width={28} alt='icon data' />
                        <div className='h-full w-1 bg-gray-300 rounded-full ml-3'></div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-dark font-bold text-2xl'>{item.label}</p>
                        <p className='text-gray-400 text-2xl '>{item.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OrdersOverview