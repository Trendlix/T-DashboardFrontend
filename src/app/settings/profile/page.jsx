"use client"
import Layout from '@/components/Layout/Layout'
import BackArrow from '@/components/ui/BackArrow'
import SettingsRectangle from '@/components/ui/SettingsRectangle'
import React, { useState, useCallback, useEffect } from 'react'
import PersonalInfo from "@/public/icons/personal-info.svg"
import Input from '@/components/ui/input'
import { cn } from '@/utils/utils'
import Button from '@/components/ui/button'
import Image from "next/image"
import editBtn from "@/public/images/edit-button.png"
import { useModal } from '@/app/ModalProvider'
import Modal from '@/components/ui/Modal'
import axios from "axios"
import Swal from "sweetalert2"
import { imageDelete, imageUpload } from '@/utils/firebaseStorage'
import Cookies from "js-cookie"


const labelClassName = 'text-[#4C535F] text-sm font-semibold'
const inputClassName = 'w-[350px] px-4 py-4 bg-white text-sm text-gray-600 outline-none'

function ProfilePage() {
  const {handleOpen, handleClose} = useModal()
  const [profile, setProfile] = useState({})

  const fetchProfileData = useCallback(async()=>{
    try {
      setIsLoading(true)
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/profile`,{
        withCredentials: true,
        headers:{'Content-Type': 'application/json'}
      })
      const data = await response.data
      setProfile(data)
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  },[])

  const accessToken = Cookies.get('accessToken') || Cookies.get('adminToken')
  useEffect(()=>{
    if(accessToken) {
      fetchProfileData()
      console.log(profile)
    }  
  },[accessToken, fetchProfileData, profile])

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [photoFile, setPhotoFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // https://firebasestorage.googleapis.com/v0/b/trendlix-dashboard.appspot.com/o/userProfiles%2Fuser1.png3af5a26c-78c7-40fe-9956-9885ca1f81f2?alt=media&token=b6bec673-7818-4f43-a57b-e314a098059f

  const handleFirstButtonClick = useCallback(
    async (e) => {
      try {
        e.preventDefault()
        let imageUrl = ""
        let beforeUpdateImg = profile?.photo
        if(photoFile){
          imageUrl = await imageUpload(photoFile, 'userProfiles')
        }
        const requestBody = {
          username,
          fullName,
          email,
          ...(imageUrl && { photo: imageUrl }),
        };

        const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_API}/profile`, requestBody, {
          withCredentials: true,
          headers: {
            "Content-Type": 'application/json'
          }
        })
        if(response.status === 200) {
          setProfile(response.data)
          handleOpen()
          if (beforeUpdateImg && imageUrl) {
            await imageDelete(beforeUpdateImg);
          }
        }
      } catch (error) {
        handleClose()
        console.log(error)
        Swal.fire({
          title: 'Error!',
          text: error?.response?.data?.message || "An error occurred while sending data",
          icon: 'error',  
          confirmButtonText: 'Ok'
        })
      }finally{
        setFullName('')
        setPhotoFile(null)
        setEmail('')
        setUsername('')
      }
    },
    [handleClose, handleOpen, username, email, fullName, photoFile, profile.photo],
  )

  const handleSecondButtonClick = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_API}/profile`, {
          currentPassword, 
          newPassword,
          confirmPassword,
        }, {
          withCredentials: true,
          headers: {
            "Content-Type": 'application/json'
          }
        })
        if(response.status === 200) {
          setProfile(response.data)
          handleOpen()
        }
      } catch (error) {
        handleClose()
        console.log(error)
        Swal.fire({
          title: 'Error!',
          text: error?.response?.data?.message || "An error occurred while sending data",
          icon: 'error',  
          confirmButtonText: 'Ok'
        })
      }finally{
        setCurrentPassword('')
        setNewPassword('')
        setConfirmPassword('')
      }
    },
    [handleClose, handleOpen, currentPassword, confirmPassword, newPassword],
  )

  return (
    <Layout>
      <div className='pt-6 px-14 w-full'>
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
            <div className='bg-white pt-6 pl-28 pb-32 mt-4 '>
              <p className='text-[#4C535F] text-md font-semibold'>Profile Picture</p>
              <div className='flex flex-col pr-48'>
                <form className='flex flex-row justify-between'>
                  <div className='relative h-fit mt-4'>
                    <Image src={profile?.photo} width={200} height={200} alt='' className='rounded-full' />
                        <input 
                            id='editBtn' 
                            type='file' 
                            onChange={(e)=>setPhotoFile(e.target.files[0])} 
                            className={`hidden`}
                            accept='.jpeg, .jpg, .png'
                        />
                        <label htmlFor="editBtn" className='cursor-pointer'>
                            <Image src={editBtn} width={70} height={70} className='cursor-pointer absolute bottom-1 left-3' alt='' />
                        </label>                 
                  </div>
                  <div>
                    <Input 
                        label='Full name' 
                        id='name' 
                        type='text' 
                        placeholder='please enter user full name' 
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
                            {profile?.role==='super' ? `System Administrator` : `User`}
                      </p>
                      <Button text='Save Changes' type='submit' onClick={handleFirstButtonClick} className='sm:w-[150px] py-4 mt-8 mb-10' />
                      <Modal modalText="Changes Saved Successfully" opacity="bg-opacity-40" />
                  </div>
                </form>
                <form className='self-end'>
                    <Input 
                      label='Current Password' 
                      id='current password' 
                      type='password' 
                      placeholder='*******************' 
                      value={currentPassword}  
                      onChange={(event)=>setCurrentPassword(event.target.value)}
                      className= {`${inputClassName} mb-5`}
                      labelClassName= {labelClassName}
                    />
                    <Input 
                      label='New Password' 
                      id='new password' 
                      type='password' 
                      placeholder='****************' 
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
                      value={confirmPassword} 
                      onChange={(event)=>setConfirmPassword(event.target.value)}
                      className= {`${inputClassName} mb-5`}
                      labelClassName= {labelClassName}
                    />

                    <Button text='Save Changes' type='submit' onClick={handleSecondButtonClick} className='sm:w-[150px] py-4 mb-5' />
                    <Modal modalText="Changes Saved Successfully" opacity="bg-opacity-40" />
                </form>
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default ProfilePage