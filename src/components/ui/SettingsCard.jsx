import React from 'react'
import Image from "next/image"
import Link from "next/link"

const SettingsCard = ({srcIcon = '', title, subTitle, iconWidth, iconHeight, cardLink}) => {
  return (
    <Link href={cardLink} className='flex flex-col gap-6 w-[250px] max-w-1/4 h-[165px] px-6 pt-6 bg-white rounded-xl'>
        <Image src={srcIcon} width={iconWidth} height={iconHeight} alt='icon settings' />
        <div className='flex flex-col gap-2'>
            <h1 className='text-md text-[#222222] font-bold'>{title}</h1>
            <p className='text-gray-600 text-xs font-light'>{subTitle}</p>
        </div>
    </Link>
  )
}

export default SettingsCard