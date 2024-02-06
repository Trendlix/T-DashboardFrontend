import Layout from '@/components/Layout/Layout'
import SettingsRectangle from '@/components/ui/SettingsRectangle'
import React from 'react'
import SettingsIcon from "@/public/icons/settings-black.svg"
import PersonalInfo from "@/public/icons/personal-info.svg"
import SettingsCard from '@/components/ui/SettingsCard'
import addUser from "@/public/icons/add-user.svg"
import listUsers from "@/public/icons/list-users.svg"
import addWebsite from "@/public/icons/add-website.svg"
import removeWebsite from "@/public/icons/rm-website.svg"


const SettingsPage = () => {
    const adminDashboardCards = [
        {
            id: 1, 
            link: '/adduser',
            icon: addUser,
            title: 'Add User',
            subTitle: 'Add new user , select roles , set permissions.'
        },
        {
            id: 2, 
            link: '/listusers',
            icon: listUsers,
            title: 'List Users',
            subTitle: 'Listing users, remove users, view their permission.'
        },
        {
            id: 3, 
            link: '/addwebsite',
            icon: addWebsite,
            title: 'Add New Website',
            subTitle: 'Add new website , admin panel , domin , wordpress website.'
        },
        {
            id: 4, 
            link: '/removewebsite',
            icon: removeWebsite,
            title: 'Remove Website',
            subTitle: 'Remove website , admin panel , domin , wordpress website.'
        }
    ]
  return (
    <Layout>
        <div className='pt-6 pl-14 w-[90%] pb-72'>
            <SettingsRectangle title='Settings' subTitle='Add or Remove Users, Admins, Seo, Permissions' srcIcon={SettingsIcon} iconHeight={40} iconWidth={40} />
            <div className='py-8 flex flex-col gap-3 '>
                <h2 className='text-dark font-semibold text-xl pl-2'>Personal Info</h2>
                <SettingsCard title='My Personal info' subTitle='Provide your personal details Name , picture.' srcIcon={PersonalInfo} iconHeight={40} iconWidth={40} cardLink='/profile' />
            </div>
            <div className='pb-10 flex flex-col gap-3'>
                <h2 className='text-dark font-semibold text-xl pl-2'>Admin Dashboard</h2>
                <div className='flex flex-row gap-6'>
                    {adminDashboardCards.map((card, index) => (
                        <SettingsCard key={card.id} title={card.title} subTitle={card.subTitle} srcIcon={card.icon} iconHeight={40} iconWidth={40} cardLink={card.link}/>
                    ))}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default SettingsPage