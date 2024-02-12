"use client"
import Layout from '@/components/Layout/Layout'
import BackArrow from '@/components/ui/BackArrow'
import SettingsRectangle from '@/components/ui/SettingsRectangle'
import React, { useState } from 'react'
import addWebsite from "@/public/icons/add-website.svg"
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import { cn } from "@/utils/utils"
import Image from "next/image"
import dropDown from "@/public/icons/dropdown-gray.svg"
import { useModal } from '@/app/ModalProvider'
import Modal from '@/components/ui/Modal'


const AddWebsitePage = () => {
    const {handleOpen} = useModal()
    const [websiteName, setWebsiteName] = useState('')
    const [websiteType, setWebsiteType] = useState('')
    const [logo, setLogo] = useState('Upload logo : Png , JPG , JPEG') 
    const [domain, setDomain] = useState('')
    const [password, setPassword] = useState('')
    const [dashboard, setDashboard] = useState('')
    const [isWebsiteTypeFocused, setIsWebsiteTypeFocused] = useState(false)
    const [isLogoFocused, setIsLogoFocused] = useState(false)



    const labelClassName = 'text-[#4C535F] text-base'
    const inputClassName = 'w-[320px] px-2 py-3 bg-white text-sm font-medium text-[#8D98AA] outline-none h-[62px]'
  return (
    <Layout>
        <div className='pt-6 pl-14 w-[90%] pb-72'>
            <BackArrow />
            <SettingsRectangle 
                srcIcon={addWebsite} 
                iconHeight={40} 
                iconWidth={40} 
                title='Add New Website' 
                subTitle='Add new website, domain.' 
                TitleStyle='font-bold text-black'
                subtitleStyle='text-gray-500 text-lg font-normal'
            />

        <div className='flex flex-col items-start justify-around gap-5 px-28 mt-4 pt-12 pb-16 bg-white rounded-t-lg shadow-lg shadow-gray-200'>

            <div className='flex flex-row items-center justify-center gap-32'>
                <div className='flex flex-col'>
                    <Input id='webName' label='Website Name' value={websiteName} onChange={(event)=>setWebsiteName(event.target.value)} placeholder='Please enter website name' type='text' required={true} labelClassName={labelClassName} className={inputClassName} />
                    <div className='flex flex-col bg-white mb-5'>
                        <label htmlFor="logo" className={`block mb-2 font-medium ${labelClassName}`}>Logo</label>
                        <div className={`flex flex-row w-[320px] h-[62px] justify-between px-2 bg-white border border-gray-300 rounded-lg items-center py-2 ${isLogoFocused && `ring-yellow-500 border-yellow-500` }`}>
                            <input 
                                id='logo' 
                                type='file' 
                                required={true} 
                                onChange={(event)=>setLogo(event.target.files[0].name)}
                                onFocus={()=>setIsLogoFocused(true)}
                                onBlur={()=>setIsLogoFocused(false)}
                                className={`hidden`}
                                accept='.jpeg, .jpg, .png'
                            />
                            <p className='text-sm text-[#8D98AA] font-medium'>{logo}</p>
                            <label htmlFor="logo" className='bg-gray-400 text-sm text-white py-3 px-2 rounded-md font-semibold cursor-pointer'>Browse Files</label>
                        </div>
                    </div>
                    <Input 
                        label='Password' 
                        placeholder='***************' 
                        id='password'
                        labelClassName={labelClassName} 
                        className={inputClassName} 
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                        type='password'
                        required={true}
                    />
                </div>
                <div className='flex flex-col'>
                    <div className="mb-5">
                        <label htmlFor='webType' className={cn("block mb-2 text-sm font-medium text-gray-900", labelClassName)}>
                            Type
                        </label>
                        <div className={`relative flex flex-row w-[200px] bg-white border border-gray-300 rounded-lg items-center ${isWebsiteTypeFocused && `ring-yellow-500 border-yellow-500`}`}>
                            <select
                            id='webType'
                            required={true}
                            value={websiteType}
                            onChange={(event) => setWebsiteType(event.target.value)}
                            onFocus={() => setIsWebsiteTypeFocused(true)}
                            onBlur={() => setIsWebsiteTypeFocused(false)}
                            className={`appearance-none font-medium rounded-lg block w-full max-w-[230px] h-[62px] px-4 py-3 bg-white text-md text-[#8D98AA] outline-none`}
                            >
                            <option value="systemAdministrator" className='text-[#8D98AA] font-medium rounded-lg w-full'>Wordpress</option>
                            <option value="user" className='text-[#8D98AA] font-medium rounded-lg w-full'>Custom Coding</option>
                            </select>
                            <Image src={dropDown} width={12} height={12} alt='down arrow' className='absolute right-4' />
                        </div>
                    </div>
                    <Input 
                        placeholder='Website.com' 
                        required={true} 
                        label='Domain' 
                        id='domain'
                        className={inputClassName} 
                        labelClassName={labelClassName} 
                        onChange={(event)=>setDomain(event.target.value)} 
                        value={domain}
                    />
                    <Input 
                        label='Admin Dashboard' 
                        id='adminDash'
                        placeholder='Website.com/wp-admin' 
                        labelClassName={labelClassName} 
                        className={inputClassName} 
                        value={dashboard}
                        onChange={(event)=>setDashboard(event.target.value)}
                        type='text'
                        required={true}
                    />
                </div>
            </div>
            <Button text='Add Website' className='sm:w-48 text-base py-3' onClick={handleOpen}/>
            <Modal modalText="Website Added" opacity="bg-opacity-50"/>
        </div>



        </div>
    </Layout>
  )
}

export default AddWebsitePage