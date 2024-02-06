import Bell from '@/public/icons/bell.svg'
import Image from 'next/image';


const NotificationIcon = ({ hasNotifications }) => {
  return (
    <div className='relative'>
        <Image src={Bell} className=""/>
        {hasNotifications && 
            (<div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></div>)
        }
    </div>
  )
}
export default NotificationIcon