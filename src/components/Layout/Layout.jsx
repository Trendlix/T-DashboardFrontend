"use client"
import { useCallback, useEffect, useState } from "react"
import MainNavBar from "./MainNavBar"
import MainSideBar from "./MainSideBar"
import axios from "axios"

function Layout({ children }) {
  const [profileData, setProfileData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const fetchProfileData = useCallback(async()=>{
    try {
      setIsLoading(true)
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/profile`,{
        withCredentials: true,
        headers:{'Content-Type': 'application/json'}
      })
      console.log(response)
      const data = await response.data
      console.log(data)
      setProfileData(data)
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  },[])

  useEffect(()=>{
    fetchProfileData()
  },[fetchProfileData])
  
  console.log(profileData)
  return (
    <div className="flex flex-row w-screen h-screen">
        <MainSideBar />
        <div className="flex-1 flex flex-col overflow-hidden">
            <MainNavBar profileData={profileData} />
            <main className="bg-gray-100 overflow-y-auto flex-1 flex flex-col">{children}</main>
        </div>
    </div>
  )
}

export default Layout