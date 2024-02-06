import React from 'react'
import Image from "next/image"
import Link from "next/link"

const SettingsCard = ({srcIcon = '', title, subTitle, iconWidth, iconHeight, cardLink}) => {
  return (
    <Link href={cardLink} className='flex flex-col gap-10 w-[300px] px-8 py-8 bg-white rounded-xl'>
        <Image src={srcIcon} width={iconWidth} height={iconHeight} alt='icon settings' />
        <div className='flex flex-col gap-3 '>
            <h1 className='text-xl text-[#222222] font-bold'>{title}</h1>
            <p className='text-gray-500 text-base font-light'>{subTitle}</p>
        </div>
    </Link>
  )
}

export default SettingsCard