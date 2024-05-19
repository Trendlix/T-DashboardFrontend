"use client"
import Layout from '@/components/Layout/Layout'
import SettingsRectangle from '@/components/ui/SettingsRectangle'
import SettingsIcon from "@/public/icons/settings-black.svg"
import PersonalInfo from "@/public/icons/personal-info.svg"
import SettingsCard from '@/components/ui/SettingsCard'
import AdminDashboardSettings from '@/components/sections/AdminDashboardSettings'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

function SettingsPage() {
  const [isAuthAdmin, setIsAuthAdmin] = useState(false)    

  const authentication = useCallback(async()=>{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/me`, {
      withCredentials: true,
      headers: {
        "Content-Type" : 'application/json'
      }
    })
    const data = res.data
    if(res.status === 200 && data.success===true){
      setIsAuthAdmin(data.isAdmin)
    }
  },[])

  useEffect(()=>{
    authentication()
  },[])

  return (
    <Layout>
        <div className='pt-6 px-14 w-full pb-96'>
            <SettingsRectangle title='Settings' subTitle='Add or Remove Users, Admins, Seo, Permissions' srcIcon={SettingsIcon} iconHeight={40} iconWidth={40} />
            <div className='py-6 flex flex-col gap-3 w-full'>
                <h2 className='text-dark font-semibold text-md pl-2'>Personal Info</h2>
                <SettingsCard title='My Personal info' subTitle='Provide your personal details Name , picture.' srcIcon={PersonalInfo} iconHeight={35} iconWidth={35} cardLink='/settings/profile' />
            </div>
            {isAuthAdmin && (<AdminDashboardSettings />)}            
        </div>
    </Layout>
  )
}

export default SettingsPage