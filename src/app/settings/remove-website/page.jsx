import Layout from '@/components/Layout/Layout'
import BackArrow from '@/components/ui/BackArrow'
import SettingsRectangle from '@/components/ui/SettingsRectangle'
import React from 'react'
import removeWebsite from "@/public/icons/rm-website.svg"
import { websiteAdminData } from '@/utils/data'
import WebsiteCard from '@/components/ui/WebsiteCard'
import Image from "next/image"
import redCircle from "@/public/icons/red-circle.svg"
import yellowCircle from "@/public/icons/yellow-circle.svg"

const RemoveWebsitePage = () => {
  return (
    <Layout>
        <div className='pt-6 pl-14 w-[90%] pb-72'>
            <BackArrow />
            <SettingsRectangle 
                srcIcon={removeWebsite} 
                iconHeight={30} 
                iconWidth={30} 
                title='Remove Website' 
                subTitle='Remove website, domain.' 
                TitleStyle='font-semibold text-dark text-lg'
                subtitleStyle='text-gray-500 text-sm font-normal'
            />
            <div className='flex flex-col mt-6 bg-white'>
                {websiteAdminData.map((item, index) =>(
                    <WebsiteCard item={item} index={index} key={item.id} isDelete={true}/>
                ))}
                <div className='flex flex-row items-center justify-center gap-10 pt-10 pb-4'>
                    <div className='flex flex-row gap-3'>
                      <Image src={redCircle} width={20} height={20} alt='icon colored' />
                      <p className='text-xl'>Custom Coding</p>
                    </div>

                    <div className='flex flex-row gap-3'>
                      <Image src={yellowCircle} width={20} height={20} alt='icon colored' />
                      <p className='text-xl'>Wordpress</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default RemoveWebsitePage