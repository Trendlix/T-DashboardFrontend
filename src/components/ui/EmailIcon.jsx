import Mail from '@/public/icons/mail.svg'
import Image from 'next/image';


const EmailIcon = ({ hasEmails }) => {
  return (
    <div className='relative'>
        <Image src={Mail} width={22} height={22} alt='' className=""/>
        {hasEmails && 
            (<div className="absolute top-[-1.5px] right-[-1px] h-2 w-2 bg-[#FF0B2D] rounded-full"></div>)
        }
    </div>
  )
}

export default EmailIcon