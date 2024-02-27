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
import Modal from '@/components/ui/Modal'
import { useModal } from '@/app/ModalProvider'
import axios from "axios"
import { useState, useCallback, useEffect } from "react"
import Swal from "sweetalert2"

function ListUsersPage() {
    const {handleOpen, handleClose} = useModal()
    const [usersList, setUserList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getAllUsers = useCallback(
      async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/users`, {
                withCredentials: true,
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            if(response.status === 200){
                const data = await response.data
                setUserList(data)
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }finally{
            setIsLoading(false)
        }
      },
      [],
    )

    const handleDeleteButton = useCallback(async(userId)=>{
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_API}/users/${userId}`)
            if(response.status === 200) {
                handleOpen()
            }
        } catch (error) {
            handleClose()
            console.log(error)
            Swal.fire({
                title: 'Error!',
                text: e?.response?.data?.message || "An error occurred while sending data",
                icon: 'error',  
                confirmButtonText: 'Ok'
              })
        }        
    },[handleClose, handleOpen])

    useEffect(() => {
      getAllUsers()
      const list = usersList.length>0 ? usersList : 'no users'
      console.log(list)
    }, [getAllUsers, usersList])

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
        <div className='pt-6 px-14 w-full pb-72'>
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
            <div className='mt-4 py-4 grid-container bg-white border rounded-lg overflow-hidden shadow-lg shadow-gray-200'>
                <div className="grid-labels px-5 py-4 grid grid-cols-6 text-[#718096] text-base">
                    <div className="grid-label">User Name</div>
                    <div className="grid-label flex flex-row items-center gap-2">
                        <p>Created</p>
                        <Image src={greenArrow} width={25} height={25} alt='green arrow up' />
                    </div>
                    <div className="grid-label">Created by</div>
                    <div className="grid-label">User Type</div>
                    <div className="grid-label col-span-2 ">Actions</div>
                </div>
                <div className='border-b-2 border-[#E6E8F0] py-1'></div>
                
                {listUsersData.map((user)=>(
                    <div key={user.id} className="grid-row grid grid-cols-6 px-5 py-4">
                        <div className="grid-cell py-2 text-dark font-bold text-base">{user.username}</div>
                        <div className="grid-cell py-2 text-gray-600 font-light text-base ">{user.created}</div>
                        <div className="grid-cell py-2 text-lg text-dark font-medium">{user.createdBy}</div>
                        <div className={`grid-cell py-2`}>
                            <p className={`w-20 text-center rounded-md py-1 text-sm ${user.userType === 'Admin'? `text-green-500 bg-green-200` : `text-purple-500 bg-purple-200`}`}>{user.userType}</p>
                        </div>
                        <div className="grid-cell py-2 flex flex-row gap-1 col-span-2 ">
                            <div className='flex flex-row gap-1 items-center text-xs h-6 w-32 justify-center rounded-[5px] text-white bg-black'>
                                <Image src={permissions} width={20} height={20} alt='permissions' />
                                <button type='button' onClick={()=>{}} >
                                    Permissions
                                </button>
                            </div>
                            <div className='flex flex-row gap-1 items-center text-xs h-6 w-32 justify-center rounded-[3px] text-white bg-[#FF0000]'>
                                <Image src={trashWhite} width={14} height={14} alt='trash icon' />
                                <button type='button' onClick={handleOpen} >
                                Remove User
                                </button>
                                <Modal modalText="User Removed" opacity="bg-opacity-10"/>
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