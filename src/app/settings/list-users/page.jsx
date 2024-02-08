"use client"
import Layout from '@/components/Layout/Layout'
import BackArrow from '@/components/ui/BackArrow'
import SettingsRectangle from '@/components/ui/SettingsRectangle'
import React from 'react'
import listUsers from "@/public/icons/list-users.svg"
import greenArrow from "@/public/icons/arrow-up-green.svg"
import Image from "next/image"
import permissions from "@/public/icons/permissions.svg"
import trashWhite from "@/public/icons/trash-white.svg"


const ListUsersPage = () => {
    const listUsersData = [
        {
            id: '1', 
            username: 'Hazem Magdy',
            created: 'Mar 1, 2024',
            createdBy: 'Hazem',
            userType: 'Admin',   
        },
        {
            id: '2', 
            username: 'Ranim Yassine',
            created: 'Mar 1, 2024',
            createdBy: 'Hazem',
            userType: 'Admin',   
        },
        {
            id: '3', 
            username: 'Yasmin Fawzy',
            created: 'Mar 1, 2024',
            createdBy: 'Hazem',
            userType: 'Admin',   
        },
        {
            id: '4', 
            username: 'Ahmed Abdelbadeaa',
            created: 'Mar 1, 2024',
            createdBy: 'Hazem',
            userType: 'Admin',   
        },
        {
            id: '5', 
            username: 'Marcelo',
            created: 'Mar 1, 2024',
            createdBy: 'Hazem',
            userType: 'Admin',   
        },
        {
            id: '6', 
            username: 'Samar Magdy',
            created: 'Mar 1, 2024',
            createdBy: 'Hazem',
            userType: 'Seo',   
        },
        {
            id: '7', 
            username: 'Marina',
            created: 'Mar 1, 2024',
            createdBy: 'Hazem',
            userType: 'Seo',   
        }   
    ]
  return (
    <Layout>
        <div className='pt-6 pl-14 w-[90%] pb-72'>
            <BackArrow />
            <SettingsRectangle
                srcIcon={listUsers} 
                iconHeight={45} 
                iconWidth={45} 
                title='List Users' 
                subTitle='Listing users, remove users, view their permission.' 
                TitleStyle='font-semibold text-black'
                subtitleStyle='text-gray-500 text-sm font-normal'
            />
            <div className='mt-4 py-4 grid-container bg-white border rounded-lg overflow-hidden'>
                <div className="grid-labels px-6 py-4 grid grid-cols-5 text-[#718096] text-xl">
                    <div className="grid-label">User Name</div>
                    <div className="grid-label flex flex-row items-center gap-2">
                        <p>Created</p>
                        <Image src={greenArrow} width={25} height={25} alt='green arrow up' />
                    </div>
                    <div className="grid-label">Created by</div>
                    <div className="grid-label">User Type</div>
                    <div className="grid-label ml-[-40px]">Actions</div>
                </div>
                <div className='border-b-2 border-[#E6E8F0] py-1'></div>
                
                {listUsersData.map((user)=>(
                    <div key={user.id} className="grid-row grid grid-cols-5 px-6 py-4">
                        <div className="grid-cell py-4 text-dark font-bold text-lg">{user.username}</div>
                        <div className="grid-cell py-4 text-dark font-light text-lg ">{user.created}</div>
                        <div className="grid-cell py-4 text-lg text-dark font-semibold">{user.createdBy}</div>
                        <div className={`grid-cell py-4`}>
                            <p className={`w-20 text-center rounded-md py-1 ${user.userType === 'Admin'? `text-green-500 bg-green-200` : `text-purple-500 bg-purple-200`}`}>{user.userType}</p>
                        </div>
                        <div className="grid-cell py-4 flex flex-row gap-1 ml-[-40px]">
                            <div className='flex flex-row gap-1 items-center text-sm px-3 rounded-md text-white bg-black'>
                                <Image src={permissions} width={20} height={20} alt='permissions' />
                                <button type='button' onClick={()=>{}} >
                                    Permissions
                                </button>
                            </div>
                            <div className='flex flex-row gap-1 items-center text-sm px-3 rounded-md text-white bg-[#FF0000]'>
                                <Image src={trashWhite} width={15} height={15} alt='trash icon' />
                                <button type='button' onClick={()=>{}} >
                                Remove User
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </Layout>
  )
}

export default ListUsersPage