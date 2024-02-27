"use client"
import Layout from '@/components/Layout/Layout'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Dropdown from "@/public/icons/dropdown.svg"
import ChartBg from '@/components/ui/ChartBg'
import { websiteAdminData } from '@/utils/data'
import redCircle from "@/public/icons/red-circle.svg"
import yellowCircle from "@/public/icons/yellow-circle.svg"
import CoverImage from "@/public/images/cover-home.png"
import DropdownButton from '@/components/ui/DropdownButton'
import WebsiteCard from '@/components/ui/WebsiteCard'
import axios from "axios"

function Page(){
  const [list, setList] = useState(websiteAdminData)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    const fetchWebsites = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/website`,{
          withCredentials: true, 
          headers:{
              'Content-Type': 'application/json', 
          }
        })
        const result = await response.data
        console.log(result)
      } catch (error) {
        console.error(error)
      }finally{
        setIsLoading(false)
      }
    }
    fetchWebsites()
  }, [])
  return (
    <Layout>
        <div className='relative'>
          <div className='w-full h-96 bg-cover absolute top-0 left-0'>
            <Image src={CoverImage} width="auto" height="auto" alt='cover image Trendlix'/>
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
                      <Image src={redCircle} className='w-15 h-15' alt='icon colored' />
                      <p className='text-sm'>Custom Coding</p>
                    </div>

                    <div className='flex flex-row gap-3'>
                      <Image src={yellowCircle} className='w-15 h-15' alt='icon colored' />
                      <p className='text-sm'>Wordpress</p>
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