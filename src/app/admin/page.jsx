"use client"
import Layout from '@/components/Layout/Layout'
import React, { useState } from 'react'
import Image from "next/image"
import Dropdown from "@/public/icons/dropdown.svg"
import ChartBg from '@/components/ui/ChartBg'
import { websiteAdminData } from '@/utils/data'
import redCircle from "@/public/icons/red-circle.svg"
import yellowCircle from "@/public/icons/yellow-circle.svg"
import CoverImage from "@/public/images/cover-home.png"
import DropdownButton from '@/components/ui/DropdownButton'
import WebsiteCard from '@/components/ui/WebsiteCard'

const Page = () => {
  const [list, setList] = useState(websiteAdminData)

  return (
    <Layout>
        <div className='relative'>
          <div className='w-full h-96 bg-cover absolute top-0 left-0'>
            <Image src={CoverImage} alt='cover image Trendlix'/>
          </div>
          <div className='flex items-center justify-center flex-col gap-4 py-64'>
            <div className='w-[80%] h-full'>
              {/* above part */}
              <div className='relative flex flex-row items-center gap-6 p-2 pb-8'>
                <DropdownButton setList={setList} list={list} buttonText='All' options={['All','Custom Coding', 'Wordpress']} />
                <DropdownButton setList={setList} list={list} buttonText='A-Z' options={['A-Z', 'Z-A']} />
              </div>

              {/* the down part of websites */}
              <div className='w-full flex-1 h-full'>
                <ChartBg title='Websites' subTitle='Custom Coding - Wordpress Websites' isWidthHalf={false}>
                  <div className='flex flex-col'>
                    {list.map((item, index)=>(
                      <WebsiteCard item={item} index={index} key={item.id} />
                    ))}
                  </div>

                  <div className='flex flex-row items-center justify-center gap-10 pt-20'>
                    <div className='flex flex-row gap-3'>
                      <Image src={redCircle} width={20} height={20} alt='icon colored' />
                      <p className='text-xl'>Custom Coding</p>
                    </div>

                    <div className='flex flex-row gap-3'>
                      <Image src={yellowCircle} width={20} height={20} alt='icon colored' />
                      <p className='text-xl'>Wordpress</p>
                    </div>
                  </div>
                </ChartBg>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Page