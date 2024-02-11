import React from 'react'
import Image from "next/image"

const SettingsRectangle = ({srcIcon = '', title, subTitle, iconWidth, iconHeight, subtitleStyle = '', TitleStyle = ''}) => {
  return (
    <div>
        <div className='flex flex-row gap-5 px-8 py-4 bg-white rounded-xl'>
            <Image src={srcIcon} width={iconWidth} height={iconHeight} alt='icon settings' />
            <div className='flex flex-col'>
                <h1 className={`text-dark text-xl ${TitleStyle}`}>{title}</h1>
                <p className={`text-gray-400 text-md font-light ${subtitleStyle}`}>{subTitle}</p>
            </div>
        </div>
        <div className='border-b-4 border-[#E6E8F0]'></div>
    </div>
  )
}

export default SettingsRectangle