"use client"
import { useState } from "react"
import Input from "@/components/ui/input"
import Button from "@/components/ui/button"
import ToggleBox from "@/components/ui/toggle"
import RouteLink from "@/components/ui/link"
import axios from "axios"
import { useRouter } from "next/navigation"
import Swal from 'sweetalert2'
import Cookies from "js-cookie"

function Form() {
  const router = useRouter()
  const [form, setForm] = useState({ password: "", email: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submitting...', form)
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/signin`, {...form})
    .then(data=> {
      console.log('data', data)
      Swal.fire({
        title: "Success!",
        text: "Welcome to trendlix dashboard",
        icon: "success"
      });
      const tokens = data.data.tokens
      if(data.data.role==='super'){
        Cookies.remove('accessToken')
        Cookies.remove('adminToken')
        Cookies.set("adminToken", tokens[tokens.length - 1])
      }else{
        Cookies.remove('accessToken')
        Cookies.remove('adminToken')
        Cookies.set("accessToken", tokens[tokens.length - 1])
      }
      router.replace('/')
    })
    .catch(e=>{
      console.log(e)
      Swal.fire({
        title: 'Error!',
        text: e?.response?.data?.message || "An error occurred while sending data",
        icon: 'error',  
        confirmButtonText: 'Ok'
      })
    })
  }

  const handleChange = (e) => {
    setForm(prev=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
    
  return (
    <form className='max-w-xl px-10 h-full flex justify-center flex-col'>
        <p className="text-trend text-7xl font-medium">Welcome!</p>
        <p className="text-light">Enter your email and password to sign in</p>
        <p className="h-10"></p>
        <Input id="email" type="email" placeholder="Your Email" required={true} label="Email" value={form.email} onChange={handleChange} />
        <Input id="password" type="password" required={true} label="Password" value={form.password} onChange={handleChange} />
        <ToggleBox id="remember" isChecked={true} label="Remember me"  />
        <Button type="submit" text="Sign in" className="!w-full mt-4" onClick={handleSubmit}/>
        <p className="h-10"></p>
        <div className="text-light">Go to <RouteLink href="/signup" text="sing up"/></div>
    </form>
  )
}

export default Form