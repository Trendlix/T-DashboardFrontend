import Bell from '@/public/icons/bell.svg'
import Image from 'next/image';


const NotificationIcon = ({ hasNotifications }) => {
  return (
    <div className='relative'>
        <Image src={Bell} alt='' className="w-22 h-22 cursor-pointer"/>
        {hasNotifications && 
            (<div className="absolute top-0 right-0 h-2 w-2 bg-[#FF0B2D] rounded-full"></div>)
        }
    </div>
  )
}
export default NotificationIcon