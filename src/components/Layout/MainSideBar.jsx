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
import analyticsFocus from "@/public/icons/analytics-white.svg"
import settingsFocus from "@/public/icons/settings-white.svg"
import ordersFocus from "@/public/icons/orders-white.svg"
import adminFocus from "@/public/icons/admin-white.svg"
import grayDashboard from "@/public/icons/gray-dashboard.svg"


function MainSideBar() {
  const pathname = usePathname()
  const basePathname = pathname === '/' ? pathname : pathname.slice(1)


  const sideItems = [
    {
      id: 1,
      notFocusSrc: grayDashboard,
      focusSrc: Dashboard,
      href: '/',
      label: 'Dashboard',
    },
    {
      id: 2,
      focusSrc: adminFocus,
      notFocusSrc: WebsiteAdmin, 
      href: 'admin',
      label: 'Website Admin'
    },
    {
      id: 3,
      focusSrc: ordersFocus,
      notFocusSrc: Bag, 
      href: 'orders',
      label: 'Orders',
      orderNumber: 8,
    },
    {
      id: 4,
      focusSrc: analyticsFocus,
      notFocusSrc: Chart, 
      href: 'analytics',
      label: 'Analytics'
    },
    {
      id: 5,
      focusSrc: '',
      notFocusSrc: Users, 
      href: 'customers',
      label: 'Customer'
    },
    {
      id: 6,
      focusSrc: '',
      notFocusSrc: Blogs, 
      href: 'blogs',
      label: 'Blogs'
    },
    {
      id: 7,
      focusSrc: settingsFocus,
      notFocusSrc: Settings, 
      href: 'settings',
      label: 'Settings'
    },
  ]
  
  const workingLinks = ['analytics', 'customers', 'blogs', 'orders']
  return (
    <section className="hidden md:block bg-white rounded-xl h-screen px-6 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-16 py-8">
        <Image src={trendAdmin} width={200} height={400} alt="" className="mt-4" />
        <div className={`flex flex-col gap-8 items-center justify-center`}>
          {sideItems.map((item)=>(
              workingLinks.includes(item.href)?(
              <div key={item.id} 
                className={`flex flex-row w-[216px] items-center gap-3 px-3 text-gray-400 opacity-3 cursor-pointer`}>
                <Image src={basePathname.startsWith(item.href) ? item.focusSrc : item.notFocusSrc} className='h-5 w-5' alt=""/>
                <p className="text-sm font-bold text-center">{item.label}</p>
                {item.orderNumber &&  
                  (<div className="bg-rose-600 w-3 h-3 rounded-full p-3 flex items-center justify-center">
                    <p className="text-white">{item.orderNumber}</p>
                  </div>
                )}</div>): 
                (<Link 
                    href={`/${item.href}`} 
                    key={item.id} 
                    className={`flex flex-row w-[216px] items-center gap-3 px-3 text-gray-400 opacity-3 transition-all duration-300 ease-in-out transform  ${basePathname.startsWith(item.href) && `bg-rose-600 rounded-xl py-4 text-white`} ${item.label === 'Website Admin' && ` text-nowrap`}` }>
                    <Image src={basePathname.startsWith(item.href) ? item.focusSrc : item.notFocusSrc} className='h-5 w-5' alt=""/>
                    <p className="text-sm font-bold text-center">{item.label}</p>
                    {item.orderNumber &&  
                      (<div className="bg-rose-600 w-3 h-3 rounded-full p-3 flex items-center justify-center">
                        <p className="text-white">{item.orderNumber}</p>
                      </div>
                    )}
                  </Link>
                )

              
            ))}
        </div>
      </div>
    </section>
  )
}

export default MainSideBar