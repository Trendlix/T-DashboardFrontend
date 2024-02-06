import React from 'react'
import Image from "next/image"

const SettingsRectangle = ({srcIcon = '', title, subTitle, iconWidth, iconHeight}) => {
  return (
    <div>
        <div className='flex flex-row gap-5 px-8 py-6 bg-white rounded-xl'>
            <Image src={srcIcon} width={iconWidth} height={iconHeight} alt='icon settings' />
            <div className='flex flex-col'>
                <h1 className='text-2xl text-dark'>{title}</h1>
                <p className='text-gray-400 text-xl font-light'>{subTitle}</p>
            </div>
        </div>
        <div className='border-b-4 border-[#E6E8F0]'></div>
    </div>
  )
}

export default SettingsRectangle