"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Cookies from "js-cookie"
import { ModalProvider } from '@/app/ModalProvider'

export default function AuthLayout({children}) {
    const pathname = usePathname()
    const router = useRouter()
    const token = Cookies.get('adminToken') || Cookies.get('accessToken') 
    if((!token) && pathname!=='/signin'){
      router.replace('/signin')
    }
  return (
    <div>
        {(!token) && pathname!=='/signin' ? 
        (
          <div className='h-screen w-screen bg-white'>
          </div>
        ) : (
        <ModalProvider>
            {children}
        </ModalProvider>
        )}
    </div>
  )
}
