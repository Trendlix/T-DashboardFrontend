import React from 'react'
import CoverImage from "@/public/images/cover-home.png"
import Image from "next/image"
import BackgroundCard from "@/public/images/Background.png"
import Users3 from '@/public/icons/users-3.svg'
import Activity from '@/public/icons/Activity.svg'
import Paper from '@/public/icons/Paper.svg'


const Hero = () => {
    const cards =[
        {
          id: 1,
          iconSrc: Paper,
          title: 'Visitors For Trendlix',
          number: 345
        },
        {
          id: 1,
          iconSrc: Activity,
          title: 'Contacted Trendlix',
          number: 212
        },
        {
          id: 1,
          iconSrc: Users3,
          title: 'Trendlix Blogs',
          number: 1349
        },
        
      ]
  return (
    <div className='relative'>
    <div className='w-full h-96 bg-cover absolute top-0 left-0'>
        <Image src={CoverImage} alt='cover image Trendlix'/>
    </div>

    <div className='relative top-32 pl-2 z-10 flex items-center h-full text-gray-600'>
      {cards.map((card)=>(
        <div className="relative" key={card.id}>
          <div className='h-32 bg-cover'>
            <Image src={BackgroundCard} alt='background gradient' width={300} height={200}/>
          </div>
            <div className="relative bottom-24 left-10 flex flex-col z-10 items-start gap-4">
              <div className='bg-white rounded-lg w-12 h-12 flex items-center justify-center'>
                <Image src={card.iconSrc} alt='icon for card' />
              </div>
              <p className='font-bold text-lg text-black'>{card.title}</p>
              <p className='font-semibold text-3xl'>{card.number}</p>
          </div>

        </div>
      ))}
    </div>

 </div>
  )
}

export default Hero