"use client"
import Layout from '@/components/Layout/Layout'
import SettingsRectangle from '@/components/ui/SettingsRectangle'
import SettingsIcon from "@/public/icons/settings-black.svg"
import PersonalInfo from "@/public/icons/personal-info.svg"
import SettingsCard from '@/components/ui/SettingsCard'
import AdminDashboardSettings from '@/components/sections/AdminDashboardSettings'
import Cookies from 'js-cookie'

const SettingsPage = () => {
  const adminToken = Cookies.get('adminToken')

  return (
    <Layout>
        <div className='pt-6 pl-14 w-[90%] pb-96'>
            <SettingsRectangle title='Settings' subTitle='Add or Remove Users, Admins, Seo, Permissions' srcIcon={SettingsIcon} iconHeight={40} iconWidth={40} />
            <div className='py-6 flex flex-col gap-3 '>
                <h2 className='text-dark font-semibold text-md pl-2'>Personal Info</h2>
                <SettingsCard title='My Personal info' subTitle='Provide your personal details Name , picture.' srcIcon={PersonalInfo} iconHeight={35} iconWidth={35} cardLink='/settings/profile' />
            </div>
            {adminToken && (<AdminDashboardSettings />)}            
        </div>
    </Layout>
  )
}

export default SettingsPage