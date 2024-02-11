"use client"
import Layout from '@/components/Layout/Layout'
import BackArrow from '@/components/ui/BackArrow'
import SettingsRectangle from '@/components/ui/SettingsRectangle'
import React, { useState } from 'react'
import PersonalInfo from "@/public/icons/personal-info.svg"
import Input from '@/components/ui/input'
import { cn } from '@/utils/utils'
import Button from '@/components/ui/button'
import Image from "next/image"
import editBtn from "@/public/images/edit-button.png"
import profile from "@/public/images/rounded-profile.png"
 

const ProfilePage = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('')

  const labelClassName = 'text-[#4C535F] text-sm font-semibold'
  const inputClassName = 'w-[350px] px-4 py-4 bg-white text-sm text-gray-600 outline-none'
  return (
    <Layout>
      <div className='pt-6 pl-14 w-[90%]'>
        <BackArrow />
        <SettingsRectangle 
                srcIcon={PersonalInfo} 
                iconHeight={35} 
                iconWidth={35} 
                title='My Personal Info' 
                subTitle='Full Name, user name, e-mail, picture, password.' 
                TitleStyle='font-semibold text-black text-md'
                subtitleStyle='text-gray-500 text-sm font-normal'
            />
            <div className='flex flex-row bg-white pt-6 pl-28 pb-32 mt-4 rounded-md gap-48'>
              <div>
                <p className='text-[#4C535F] text-md font-semibold'>Profile Picture</p>
                <div className='relative'>
                  <Image src={profile} width={200} height={200} alt='' className='mt-4' />
                  <button className='bg-red-200'>
                    <Image src={editBtn} width={70} height={70} className=' cursor-pointer absolute bottom-4 left-2' alt='' />
                  </button>
                  
                </div>
              </div>
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
                      placeholder='please enter user name' 
                      required={true} 
                      value={username} 
                      onChange={(event)=>setUsername(event.target.value)}
                      className= {inputClassName}
                      labelClassName= {labelClassName}
                    />
                    <Input 
                      label='Email' 
                      id='email' 
                      type='email' 
                      placeholder='please enter user emil' 
                      required={true} 
                      value={email} 
                      onChange={(event)=>setEmail(event.target.value)}
                      className= {inputClassName}
                      labelClassName= {labelClassName}
                    />
                    <p 
                      className={cn("mb-5 block text-sm font-medium text-gray-900", labelClassName)}>
                          Role
                    </p>
                    <p 
                      className={cn("mb-5 block text-base font-semibold text-[#E41C40]")}>
                          System Administrator
                    </p>
                    <Button text='Save Changes' onClick={()=>{}} className='sm:w-[150px] py-4 mt-8 mb-10' />
                    <Input 
                      label='Current Password' 
                      id='current password' 
                      type='password' 
                      placeholder='*******************' 
                      required={true} 
                      value={password} 
                      onChange={(event)=>setPassword(event.target.value)}
                      className= {`${inputClassName} mb-5`}
                      labelClassName= {labelClassName}
                    />
                    <Input 
                      label='New Password' 
                      id='new password' 
                      type='password' 
                      placeholder='****************' 
                      required={true} 
                      value={newPassword} 
                      onChange={(event)=>setNewPassword(event.target.value)}
                      className= {`${inputClassName} mb-5`}
                      labelClassName= {labelClassName}
                    />
                    <Input 
                      label='Confirm New Password' 
                      id='confirm password' 
                      type='password' 
                      placeholder='****************' 
                      required={true} 
                      value={confirmpassword} 
                      onChange={(event)=>setConfirmPassword(event.target.value)}
                      className= {`${inputClassName} mb-5`}
                      labelClassName= {labelClassName}
                    />

                    <Button text='Save Changes' onClick={()=>{}} className='sm:w-[150px] py-4 mb-5' />

              </div>
            </div>
      </div>
    </Layout>
  )
}

export default ProfilePage