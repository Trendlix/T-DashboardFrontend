import React from 'react'
import addUser from "@/public/icons/add-user.svg"
import listUsers from "@/public/icons/list-users.svg"
import addWebsite from "@/public/icons/add-website.svg"
import removeWebsite from "@/public/icons/rm-website.svg"
import SettingsCard from '@/components/ui/SettingsCard'

const AdminDashboardSettings = () => {
    const adminDashboardCards = [
        {
            id: 1, 
            link: '/settings/add-user',
            icon: addUser,
            title: 'Add User',
            subTitle: 'Add new user , select roles , set permissions.'
        },
        {
            id: 2, 
            link: '/settings/list-users',
            icon: listUsers,
            title: 'List Users',
            subTitle: 'Listing users, remove users, view their permission.'
        },
        {
            id: 3, 
            link: '/settings/add-website',
            icon: addWebsite,
            title: 'Add New Website',
            subTitle: 'Add new website , admin panel , domain , wordpress website.'
        },
        {
            id: 4, 
            link: '/settings/remove-website',
            icon: removeWebsite,
            title: 'Remove Website',
            subTitle: 'Remove website , admin panel , domain , wordpress website.'
        }
    ]
  return (
    <div className='pb-10 flex flex-col gap-3'>
        <h2 className='text-dark font-semibold text-md pl-2'>Admin Dashboard</h2>
        <div className='flex flex-row gap-6'>
            {adminDashboardCards.map((card, index) => (
                <SettingsCard 
                    key={card.id} 
                    title={card.title} 
                    subTitle={card.subTitle} 
                    srcIcon={card.icon} 
                    iconHeight={card.id===3 || card.id===4 ? 30 : 35} 
                    iconWidth={card.id===3 || card.id===4 ? 30 : 35} 
                    cardLink={card.link}
                />
            ))}
        </div>
     </div>
  )
}

export default AdminDashboardSettings