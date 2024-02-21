"use client"
import Layout from '@/components/Layout/Layout'
import BackArrow from '@/components/ui/BackArrow'
import SettingsRectangle from '@/components/ui/SettingsRectangle'
import React, { useCallback, useState } from 'react'
import addUser from "@/public/icons/add-user.svg"
import Input from '@/components/ui/input'
import { cn } from "@/utils/utils"
import Button from '@/components/ui/button'
import Image from "next/image"
import dropDown from "@/public/icons/dropdown-gray.svg"
import { useModal } from '@/app/ModalProvider'
import Modal from '@/components/ui/Modal'
import Swal from 'sweetalert2'
import axios from "axios"


const AddUserPage = () => {
    const {handleOpen, handleClose} = useModal()
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('normal')
    const [isRoleFocused, setIsRoleFocused] = useState(false)
    const [isPhoneFocused, setIsPhoneFocused] = useState(false)

    const labelClassName = 'text-base font-semibold text-[#4C535F]'
    const inputClassName = 'w-[400px] px-4 py-4 bg-white text-sm text-gray-600 outline-none h-18'

    console.log(username, password, role, fullName, email, phoneNumber)
    const handleAddUser = useCallback(async()=>{
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/signup`, {
                name: username,
                fullName,
                email,
                phoneNumber,
                password,
                role
            },{withCredentials: true, headers: {'Content-Type': 'application/json'}})
            if(response.status === 200){
                handleOpen()
            }
        } catch (error) {
            console.log(error)
             handleClose()
            Swal.fire({
                title: 'Error!',
                text: error?.response?.data?.message || 'An error occurred while adding user',
                icon: "error",
                confirmButtonText: 'OK',
            })
        }finally{
            setUsername('');
            setPassword('');
            setPhoneNumber('');
            setFullName('');
            setEmail('');
            setRole('user');
        }
    },[handleClose, handleOpen, role, username, email, password, phoneNumber, fullName])
  return (
    <Layout>
        <div className='pt-6 pl-14 w-[90%] pb-72 '>
            <BackArrow />
            <SettingsRectangle 
                srcIcon={addUser} 
                iconHeight={40} 
                iconWidth={40} 
                title='Add User' 
                subTitle='Add new user , select roles , set permissions.' 
                TitleStyle='font-bold text-black text-sm'
                subtitleStyle='text-gray-500 font-normal'
            />
            <form className="flex flex-col items-start justify-around gap-6 mt-4 pt-10 pb-8 px-20 rounded-t-lg shadow-lg shadow-gray-200 bg-white ">
                <div className='flex flex-row justify-center gap-24 '>
                    <div className='flex flex-col'>
                        <Input 
                            label='Full name' 
                            id='name' 
                            type='text' 
                            placeholder='please enter user full name' 
                            required={true} 
                            value={fullName} 
                            onChange={(event)=>setFullName(event.target.value)}
                            className= {inputClassName}
                            labelClassName= {labelClassName}
                        />
                        <Input 
                            label='Username'  
                            id='username' 
                            type='text' 
                            placeholder='please enter username' 
                            required={true} 
                            value={username} 
                            onChange={(event)=>setUsername(event.target.value)}
                            className= {inputClassName}
                            labelClassName= {labelClassName}
                        />
                        <Input 
                            label='Password' 
                            id='password' 
                            type='password'  
                            placeholder='********************' 
                            required={true} 
                            value={password} 
                            onChange={(event)=>setPassword(event.target.value)}
                            className= {inputClassName}
                            labelClassName= {labelClassName}
                        />
                        
                    </div>
                    <div className='flex flex-col'>
                        <Input 
                            label='Email' 
                            id='email' 
                            type='email' 
                            placeholder='please enter user email' 
                            required={true} 
                            value={email} 
                            onChange={(event)=>setEmail(event.target.value)}
                            className= {inputClassName}
                            labelClassName= {labelClassName}
                        />
                        <div className='flex flex-col bg-white mb-5'>
                            <label htmlFor="phoneNumber" className={`block mb-2 font-medium text-gray-900 ${labelClassName}`}>Phone Number</label>
                            <div className={`flex flex-row w-[400px] gap-2 bg-white border border-gray-300 rounded-lg items-center ${isPhoneFocused && `ring-yellow-500 border-yellow-500` }`}>
                                <p className='border-r-2 border-gray-300 px-2 text-lg text-gray-400'>+1</p>
                                <input 
                                    id='phoneNumber' 
                                    type='tel' 
                                    placeholder='please enter user Phone number' 
                                    required={true} 
                                    value={phoneNumber} 
                                    onChange={(event)=>setPhoneNumber(event.target.value)}
                                    onFocus={()=>setIsPhoneFocused(true)}
                                    onBlur={()=>setIsPhoneFocused(false)}
                                    className={`rounded-lg block w-full py-4 bg-white text-sm text-gray-400 outline-none h-18`}
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor='role' className={cn("block mb-2 text-sm font-medium text-gray-900", labelClassName)}>
                                Role
                            </label>
                            <div className={`relative flex flex-row w-[230px] bg-white border border-gray-300 rounded-lg items-center ${isRoleFocused && `ring-yellow-500 border-yellow-500`}`}>
                                <select
                                id='role'
                                required={true}
                                value={role}
                                onChange={(event) => setRole(event.target.value)}
                                onFocus={() => setIsRoleFocused(true)}
                                onBlur={() => setIsRoleFocused(false)}
                                className={`appearance-none rounded-lg block w-full max-w-[230px] px-4 py-4 bg-white text-base text-gray-400 outline-none`}
                                >
                                <option value="normal" className='text-gray-400 font-semibold rounded-lg w-full'>User</option>
                                <option value="super" className='text-gray-400 font-semibold rounded-lg w-full'>System Administrator</option>
                                </select>
                                <Image src={dropDown} width={12} height={12} alt='down arrow' className='absolute right-4' />
                            </div>
                        </div>

                    </div>
                </div>
                <Button text='Add User' className='text-base sm:w-48 ' onClick={handleAddUser}/>
                <Modal modalText="User Added Successfully" opacity="bg-opacity-45" />
            </form>
        </div>
    </Layout>
  )
}

export default AddUserPage