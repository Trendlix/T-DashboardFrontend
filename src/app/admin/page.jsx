"use client"
import Layout from '@/components/Layout/Layout'
import React, { useState } from 'react'
import Image from "next/image"
import Dropdown from "@/public/icons/dropdown.svg"
import ChartBg from '@/components/ui/ChartBg'
import { websiteAdminData } from '@/utils/data'
import redCircle from "@/public/icons/red-circle.svg"
import yellowCircle from "@/public/icons/yellow-circle.svg"
import tawwosWord from "@/public/icons/tawwos-word.svg"
import DropdownButton from '@/components/ui/DropdownButton'
import Link from 'next/link';

const Page = () => {
  const [list, setList] = useState(websiteAdminData)

  return (
    <Layout>
        <div className='flex items-center justify-center flex-col gap-4 py-10'>
          <div className='w-[80%] h-full'>
             {/* above part */}
            <div className='relative flex flex-row items-center gap-6 p-2 pb-8'>
              <DropdownButton setList={setList} list={list} buttonText='All' options={['All','Custom Coding', 'Wordpress']} />
              <DropdownButton setList={setList} list={list} buttonText='A-Z' options={['A-Z', 'Z-A']} />
            </div>

            {/* the down part of websites */}
            <div className='w-full flex-1 h-full'>
              <ChartBg title='Websites' subTitle='Custom Coding - Wordpress Websites' isWidthHalf={false}>
                <div className='flex flex-col ml-[-8px] mr-[-8px]'>
                  {list.map((item, index)=>(
                    <div key={item.id} className={`h-[200px] flex flex-row justify-between items-center py-14 px-8 ${index % 2!==0 ? `bg-gray-100`: `bg-white`}`}>
                    <div className='flex flex-row gap-14 items-center'>
                      {item.isCustom ? (<Image src={redCircle} width={16} height={16} alt='icon colored' />) : (<Image src={yellowCircle} width={16} height={16} alt='icon colored' />)}
                      {item.company === 'Tawwos' ? 
                      (
                        <div className='flex flex-row items-center'>
                          <Image src={item.logo} width={120} height={120} alt='company logo'/>
                          <Image src={tawwosWord} width={75} height={75} alt='company logo' className='ml-[-78px]'/>
                        </div>
                        ) 
                        : (
                          <Image src={item.logo} width={item.company==='Farawla Tech' || item.company==='Trendlix' ? 60 : 100} height={item.company === 'Farawla Tech' || item.company==='Trendlix' ? 50 : 100} alt='company logo'/>
                        )}
                      <p className='text-2xl font-semibold text-gray-700'>{item.company}</p>
                    </div>
                    <div className='flex flex-row gap-3 items-center text-2xl font-semibold'>
                      <a href={item.websiteLink} target='_blank' className='text-white bg-gradient-to-r from-[#e06d7e] to-[#e24a61] py-2 px-6 rounded-xl'>Visit Website</a>
                      <Link href={item.adminDashboardLink} className='text-gray-600 bg-gray-200 py-2 px-6 rounded-xl'>Admin Dashboard</Link>
                    </div>
                  </div>
                  ))}
                </div>

                <div className='flex flex-row items-center justify-center gap-10 pt-20 mb-[-20px]'>
                  <div className='flex flex-row gap-3'>
                    <Image src={redCircle} width={20} height={20} alt='icon colored' />
                    <p className='text-2xl'>Custom Coding</p>
                  </div>
                  <div className='flex flex-row gap-3'>
                    <Image src={yellowCircle} width={20} height={20} alt='icon colored' />
                    <p className='text-2xl'>Wordpress</p>
                  </div>
                </div>
              </ChartBg>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Page