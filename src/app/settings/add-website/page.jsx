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
import { imageUpload } from '@/utils/firebaseStorage'
import axios from "axios"
import Swal from 'sweetalert2'


function AddWebsitePage () {
    const {handleOpen, handleClose } = useModal()
    const [websiteName, setWebsiteName] = useState('')
    const [websiteType, setWebsiteType] = useState('wordpress')
    const [logoPlaceholder, setLogoPlaceholder] = useState('Upload logo : Png , JPG , JPEG') 
    const [logo, setLogo] = useState(null) 
    const [domain, setDomain] = useState('')
    const [password, setPassword] = useState('')
    const [dashboard, setDashboard] = useState('')
    const [isWebsiteTypeFocused, setIsWebsiteTypeFocused] = useState(false)
    const [isLogoFocused, setIsLogoFocused] = useState(false)
    const [uploadedUrl, setUploadedUrl] = useState('')

    const labelClassName = 'text-[#4C535F] text-base'
    const inputClassName = 'w-[320px] px-2 py-3 bg-white text-sm font-medium text-[#8D98AA] outline-none h-[62px]'
    
    axios.defaults.withCredentials = true;

    const handleFileInput = (e) =>{
        const fileName = e.target.files[0].name
        if(fileName.length > 20){
            const editedFileName = `${fileName.slice(0, 15)}...`
            setLogoPlaceholder(editedFileName)
        }else{
            setLogoPlaceholder(fileName)
        }
        const imageFile = e.target.files[0]
        setLogo(imageFile)
    }
    const handleSubmit = async (e) =>{
        try {
            e.preventDefault()
            const imageUrl = await imageUpload(logo, 'WebsitesLogos')
            setUploadedUrl(imageUrl)
            // TODO: Post all data to our api including imageUrl uploaded on firebase
            await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/website`, {
                name: websiteName,
                domain,
                adminDomain: dashboard,
                type: websiteType,
                logo: uploadedUrl,
            },{
                withCredentials: true, 
                headers:{
                    'Content-Type': 'application/json', 
                }
            }).then((data)=>{
                console.log(`data: ${data}`);
                handleOpen()
            }).catch((error)=>{
                Swal.fire({
                    title: 'Error!',
                    text: error?.response?.data?.message || "An error occured while sending data",
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                setUploadedUrl('')
                handleClose()
            })
        } catch (error) {
            handleClose()
            console.log(error)
            setUploadedUrl('')      
        }
        // console.log(websiteName, domain, dashboard, websiteType)
    }

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

        <form className='flex flex-col items-start justify-around gap-5 px-28 mt-4 pt-12 pb-16 bg-white rounded-t-lg shadow-lg shadow-gray-200'>
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
                                onChange={handleFileInput} 
                                onFocus={()=>setIsLogoFocused(true)}
                                onBlur={()=>setIsLogoFocused(false)}
                                className={`hidden`}
                                accept='.jpeg, .jpg, .png'
                            />
                            <p className='text-xs text-[#8D98AA] font-medium'>{logoPlaceholder}</p>
                            <label htmlFor="logo" className='bg-gray-400 text-sm text-white py-3 px-2 rounded-md font-semibold cursor-pointer text-nowrap'>Browse Files</label>
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
                        required={false}
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
                            <option value="wordpress" className='text-[#8D98AA] font-medium rounded-lg w-full'>Wordpress</option>
                            <option value="custom coding" className='text-[#8D98AA] font-medium rounded-lg w-full'>Custom Coding</option>
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
            <Button text='Add Website' className='sm:w-48 text-base py-3' type='submit' onClick={handleSubmit}/>
            <Modal modalText="Website Added" opacity="bg-opacity-50"/>
        </form>
        </div>
    </Layout>
    
  )
}

export default AddWebsitePage

