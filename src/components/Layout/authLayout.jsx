"use client"
import { usePathname, useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { ModalProvider } from '@/app/ModalProvider'
import axios from 'axios'
export default function AuthLayout({children}) {
    const pathname = usePathname()
    const router = useRouter()
    const [isAuth, setIsAuth] = useState(false)    

    const authentication = useCallback(async()=>{
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/me`, {
        withCredentials: true,
        headers: {
          "Content-Type" : 'application/json'
        }
      })
      const data = res.data
      console.log(res.data)
      if(res.status === 200 && data.success===true){
        setIsAuth(true)
      }else{
        setIsAuth(false)
        router.push('/signin')
      }
    },[router])

    useEffect(()=>{
      authentication()
      console.log(isAuth)
    },[authentication, isAuth])
   
  return (
    <div>
        {!isAuth && pathname!=='/signin' ? 
        (
          <div className='h-screen w-screen bg-white'>
          </div>
        ) : (
        <ModalProvider>
            {children}
        </ModalProvider>
        )}
        {/* <ModalProvider>
            {children}
        </ModalProvider> */}
    </div>
  )
}
