import Image from "next/image"
import profile from '@/public/images/profile.png'
import Search from '@/public/icons/Search.svg'
import EmailIcon from "../ui/EmailIcon"
import NotificationIcon from "../ui/NotificationIcon"
import Link from "next/link"

const MainNavBar = ({profileData}) => {
  const hasNotifications = true;
  const hasEmails = true;
  return (
    <nav className='flex flex-row h-28 bg-white py-2 items-center justify-around'>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl text-dark capitalize">{`Hi ${profileData? `, ${profileData.username}` : ''}`}</h1>
        <p className="text-[#718096] text-sm text-nowrap">Let's check your website today</p>
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
      <div className="flex flex-row items-center gap-4">
          {profileData && (
          <Link href="/settings/profile">
            <Image width={50} height={50} src={profileData?.photo} className="h-14 w-14 rounded-full" alt="" />
          </Link>
            )}
        <div className="flex flex-col">
          <h3 className="text-lg text-dark items-center capitalize">{`${profileData ? profileData.username : '' }`}</h3>
          <p className="text-gray-400 text-sm capitalize">{`${(profileData ? (profileData.fullName).split(' ')[1] : '')}`}</p>
        </div>
      </div>
    </nav>
    
  )
}

export default MainNavBar