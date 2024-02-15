import Image from "next/image"
import AdminImg from '@/public/images/trend-admin-dashboard.png'

function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 w-screen p-2 bg-slate-200 shadow-2xl flex justify-center items-center gap-10 z-40'>
        <Image src={AdminImg} width="auto" height="auto" alt="Trendlix Admin Dashboard"/>
    </div>
  )
}

export default Navbar