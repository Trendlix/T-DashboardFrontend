import React from 'react'
import Image from "next/image"
import User1 from "@/public/images/user1.png"
import User2 from "../../public/images/user2.png"


const CustomerList = () => {
    const users = [
        {
            id: 1,
            name: "Ana Black",
            email: 'ana@gmail.com',
            img: User1
        },
        {
            id: 2,
            name: "George Litz",
            email: 'georgelitz@gmail.com',
            img: User2
        },
        {
            id: 1,
            name: "Ana Black",
            email: 'ana@gmail.com',
            img: User1
        },
        {
            id: 2,
            name: "George Litz",
            email: 'georgelitz@gmail.com',
            img: User2
        },{
            id: 1,
            name: "Ana Black",
            email: 'ana@gmail.com',
            img: User1
        },
        {
            id: 2,
            name: "George Litz",
            email: 'georgelitz@gmail.com',
            img: User2
        }
    ]
  return (
    <div className='bg-white flex-1 rounded-xl py-4 px-10 shadow-xl'>
        <h1 className='text-3xl font-normal'>Customers List for Trendlix</h1>
        <div className='flex flex-col gap-5 pt-7'>
            {users.map((user)=>(
                <div key={user.id} className='flex flex-row gap-4 items-center'>
                    <Image src={user.img} className="h-14 w-14 rounded-full" alt='user image' />
                    <div className=''>
                        <h1 className='font-bold capitalize text-lg text-gray-800'>{user.name}</h1>
                        <p className='text-gray-500 '>{user.email}</p>
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default CustomerList