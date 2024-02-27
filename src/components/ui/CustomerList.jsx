import React from 'react'
import Image from "next/image"
import User1 from "@/public/images/user1.png"
import User2 from "../../public/images/user2.png"


function CustomerList () {
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
            id: 3,
            name: "Ana Black",
            email: 'ana@gmail.com',
            img: User1
        },
        {
            id: 4,
            name: "George Litz",
            email: 'georgelitz@gmail.com',
            img: User2
        },{
            id: 5,
            name: "Ana Black",
            email: 'ana@gmail.com',
            img: User1
        },
        {
            id: 6,
            name: "George Litz",
            email: 'georgelitz@gmail.com',
            img: User2
        },
        {
            id: 7,
            name: "Ana Black",
            email: 'ana@gmail.com',
            img: User1
        },
    ]
  return (
    <div className='bg-white flex-1 rounded-xl py-4 px-8 shadow-xl'>
        <h1 className='text-xl font-normal'>Customers List for Trendlix</h1>
        <div className='flex flex-col gap-3 pt-5'>
            {users.map((user)=>(
                <div key={user.id} className='flex flex-row gap-4 items-center'>
                    <Image src={user.img} width={40} height={40} className="rounded-full" alt='user image' />
                    <div className=''>
                        <h1 className='font-bold capitalize text-sm text-gray-800'>{user.name}</h1>
                        <p className='text-gray-500 text-sm '>{user.email}</p>
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default CustomerList