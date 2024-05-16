"use client"
import Image from "next/image"
import Search from '@/public/icons/Search.svg'
import EmailIcon from "../ui/EmailIcon"
import NotificationIcon from "../ui/NotificationIcon"
import Link from "next/link"
import { FaCaretDown } from "react-icons/fa";
import { useCallback, useState } from "react"
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import axios from "axios"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

function MainNavBar({profileData}){
  const hasNotifications = true;
  const hasEmails = true;
  const [dropMenuOpen, setDropMenuOpen] = useState(false)
  const router =  useRouter()

  const handleLogout = useCallback(async()=>{
    try {
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_API}/logout`, {} , {
        withCredentials: true,
        headers: {
          "Content-Type" : 'application/json'
        }
      })
      if(response.status === 200){
          router.push('/signin')
        }
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: 'Error!',
        text: error?.response?.data?.message || 'An error occurred while logging out please try again',
        icon: 'error',
        confirmButtonText: 'Try Again'
      })
    }
  },[router])

  return (
    <nav className='flex flex-row h-28 bg-white py-2 items-center justify-around'>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl text-dark capitalize">{`Hi ${profileData? `, ${profileData.username}` : ''}`}</h1>
        <p className="text-[#718096] text-sm text-nowrap">Lets check your website today</p>
      </div>
      <div className="flex flex-row gap-2 items-center w-[400px] h-[20px] py-6 px-[16px] bg-[#FAFAFA] rounded-lg text-sm ">
        <Image width="auto" height="auto" src={Search} className="" alt=""/>
        <input type="text" placeholder="Search..." className="outline-none border-none w-full bg-[#FAFAFA] placeholder-gray-300 placeholder-sm rounded-lg text-sm"/>
      </div>
      <div className="flex flex-row gap-6 items-center ">
        <EmailIcon hasEmails={hasEmails} />
        <NotificationIcon hasNotifications={hasNotifications} />
      </div>
        <div className="border-l-2 border-l-[#EEEFF2] h-10"></div>
      <div className="flex flex-row items-center gap-4 ">
          {profileData && (
            <Image width={50} height={50} src={profileData?.photo} className="h-14 w-14 rounded-full" alt="" />
            )}
        <div className="flex flex-col cursor-pointer relative" onClick={()=>{setDropMenuOpen(!dropMenuOpen)}}>
          <h3 className="text-lg text-dark items-center capitalize">{`${profileData ? profileData.username : '' }`}</h3>
          <div className="flex flex-row gap-8 items-center">
            <p className="text-gray-400 text-sm capitalize">{`${(profileData ? (profileData.fullName).split(' ')[1] : '')}`}</p>
            <FaCaretDown />
          </div>
        {dropMenuOpen && (
          <div className="absolute bg-white border border-gray-300 rounded-md top-16 z-20 right-2 w-44 flex flex-col">
            <Link href="/settings/profile" className="hover:bg-slate-100 w-full p-2 flex flex-row items-center justify-center gap-3">
              <CgProfile size={20} />
              <p>Profile</p>
            </Link>
            <button onClick={handleLogout} className="hover:bg-slate-100 w-full p-2 flex flex-row justify-center items-center gap-3">
              <LuLogOut size={16} />
              <p>Logout</p>
            </button>
          </div>
        )}
        </div>

      </div>
    </nav>
    
  )
}

export default MainNavBar