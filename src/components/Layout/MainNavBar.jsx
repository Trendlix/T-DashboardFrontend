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
    <nav className='gap-10 md:gap-24 flex flex-row h-28 bg-white py-2 items-center px-12 '>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl text-dark">Hi, Marcelo!</h1>
        <p className="text-[#718096] text-lg">Let's check your website today</p>
      </div>
      <div className="flex flex-row gap-2 items-center w-[500px] h-[48px] py-7 px-[16px] bg-gray-100 rounded-lg text-lg ">
        <Image src={Search} className="" alt=""/>
        <input type="text" placeholder="Search..." className="outline-none border-none w-full bg-gray-100 placeholder-gray-300 placeholder-lg rounded-lg text-lg"/>
      </div>
      <div className="flex flex-row gap-8 items-center md:ml-[-60px]">
        
        <EmailIcon hasEmails={hasEmails} />
        <NotificationIcon hasNotifications={hasNotifications} />
        <div className="border-l-2 border-l-gray-300 h-10"></div>
      </div>
      <div className="flex flex-row items-center gap-8">
          <Image src={profile} className="h-20 w-20 rounded-full" alt="" />
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold items-center">Marcelo</h3>
          <p className="text-gray-400">Abdelrahman</p>
        </div>
      </div>
    </nav>
    
  )
}

export default MainNavBar