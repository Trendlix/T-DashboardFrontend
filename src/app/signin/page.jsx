import Form from "./form"
import Navbar from "@/components/sections/navbar"
import Image from "next/image"
import TLogo from '@/public/images/t-logo.png'
import Logo from '@/public/images/logo.png'
import LoginImg from '@/public/images/login.png'

function Page() {

  return ( <div className="w-screen min-h-screen bg-white">
    <Navbar />
    <div className="mt-32 w-4/5 mx-auto rounded-lg h-[80vh] flex-default shadow-2xl ">
      <div className="w-full h-full relative">
        <Image src={LoginImg} alt="login" className="h-full w-full "/>
        <Image src={TLogo} alt='trendlix' className="absolute z-10 w-36 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>
      
      <div className="animate-show w-full h-full opacity-0 relative m-10 overflow-hidden">
        <Form />
        <div className="absolute bottom-10 right-10 text-light text-xs flex-default gap-2">
          <span>Powered By </span>
          <Image src={Logo} alt='trendlix' className="w-24"/>
        </div>
      </div>
    </div>
  </div> )
}

export default Page