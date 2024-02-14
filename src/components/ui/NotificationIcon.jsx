import Bell from '@/public/icons/bell.svg'
import Image from 'next/image';


const NotificationIcon = ({ hasNotifications }) => {
  return (
    <div className='relative'>
        <Image src={Bell} width={22} height={22} alt='' className="cursor-pointer"/>
        {hasNotifications && 
            (<div className="absolute top-0 right-0 h-2 w-2 bg-[#FF0B2D] rounded-full"></div>)
        }
    </div>
  )
}
export default NotificationIcon