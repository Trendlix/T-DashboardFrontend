import Mail from '@/public/icons/mail.svg'
import Image from 'next/image';


const EmailIcon = ({ hasEmails }) => {
  return (
    <div className='relative'>
        <Image src={Mail} width={25} height={25} alt='' className=""/>
        {hasEmails && 
            (<div className="absolute bottom-2.5 left-3.5 h-2 w-2 bg-red-500 rounded-full"></div>)
        }
    </div>
  )
}

export default EmailIcon