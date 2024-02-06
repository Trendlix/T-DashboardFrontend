"use client"
import trendAdmin from "@/public/images/trend-admin-dashboard.png"
import Bag from "@/public/icons/Bag.svg"
import Blogs from "@/public/icons/blogs.svg"
import Chart from "@/public/icons/Chart.svg"
import Dashboard from "@/public/icons/dashboard-icon.svg"
import Settings from "@/public/icons/settings.svg"
import WebsiteAdmin from "@/public/icons/website-admin.svg"
import Users from "@/public/icons/users.svg"
import Image from 'next/image';
import React from "react";
import Link from 'next/link'
import { usePathname } from "next/navigation"



const MainSideBar = () => {
  const pathname = usePathname()
  console.log(pathname)

  
  const sideItems = [
    {
      id: 1,
      src: Dashboard,
      href: '/',
      label: 'Dashboard',
    },
    {
      id: 2,
      src: WebsiteAdmin, 
      href: '/admin',
      label: 'Website Admin'
    },
    {
      id: 3,
      src: Bag, 
      href: '/orders',
      label: 'Orders',
      orderNumber: 8,
    },
    {
      id: 4,
      src: Chart, 
      href: '/analytics',
      label: 'Analytics'
    },
    {
      id: 5,
      src: Users, 
      href: '/customers',
      label: 'Customer'
    },
    {
      id: 6,
      src: Blogs, 
      href: '/blogs',
      label: 'Blogs'
    },
    {
      id: 7,
      src: Settings, 
      href: '/settings',
      label: 'Settings'
    },
  ]
  return (
    <div className="w-[271px] bg-white rounded-md">
      <div className="flex flex-col items-center justify-center gap-12 py-12">
        <div className="mt-4">
          <Image src={trendAdmin} width={200} height={400} alt="" />
        </div>
        <div className={`flex flex-col gap-12 items-center justify-center`}>
          {sideItems.map((item)=>(
              <Link href={item.href} key={item.id} className={`flex flex-row w-[216px] items-center gap-3 px-3 text-gray-400 opacity-3 ${pathname===item.href && `bg-rose-600 rounded-lg py-4 text-white`} ${item.label === 'Website Admin' && ` text-nowrap`}` }>
                <Image src={item.src} width={25} height={25} alt=""/>
                <p className="text-lg font-bold text-center">{item.label}</p>
                {item.orderNumber && 
                  (<div className="bg-rose-600 w-4 h-4 rounded-full p-3 flex items-center justify-center">
                    <p className="text-white">{item.orderNumber}</p>
                  </div>
                )}
              </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainSideBar