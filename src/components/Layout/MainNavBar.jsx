import Image from "next/image"
import profile from '@/public/images/profile.png'
import Search from '@/public/icons/Search.svg'
import Bell from '@/public/icons/bell.svg'
import EmailIcon from "../ui/EmailIcon"
import NotificationIcon from "../ui/NotificationIcon"


const MainNavBar = () => {
  const hasNotifications = true;
  const hasEmails = true;

  return (
    <nav className='flex flex-row h-28 bg-white py-2 items-center justify-around'>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl text-dark">Hi, Marcelo!</h1>
        <p className="text-[#718096] text-sm text-nowrap">Let's check your website today</p>
      </div>
      <div className="flex flex-row gap-2 items-center w-[400px] h-[20px] py-6 px-[16px] bg-[#FAFAFA] rounded-lg text-sm ">
        <Image src={Search} className="" alt=""/>
        <input type="text" placeholder="Search..." className="outline-none border-none w-full bg-[#FAFAFA] placeholder-gray-300 placeholder-sm rounded-lg text-sm"/>
      </div>
      <div className="flex flex-row gap-6 items-center ">
        <EmailIcon hasEmails={hasEmails} />
        <NotificationIcon hasNotifications={hasNotifications} />
      </div>
        <div className="border-l-2 border-l-[#EEEFF2] h-10"></div>
      <div className="flex flex-row items-center gap-4">
          <Image src={profile} className="h-14 w-14 rounded-full" alt="" />
        <div className="flex flex-col">
          <h3 className="text-lg text-dark items-center">Marcelo</h3>
          <p className="text-gray-400 text-sm">Abdelrahman</p>
        </div>
      </div>
    </nav>
    
  )
}

export default MainNavBar