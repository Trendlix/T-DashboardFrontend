"use client"
import { useState } from "react"
import Input from "@/components/ui/input"
import Button from "@/components/ui/button"
import RouteLink from "@/components/ui/link"
import axios from "axios"
import { useRouter } from "next/navigation"
import Swal from 'sweetalert2'

function Form() {
  const router = useRouter()
  const [form, setForm] = useState({ name: "", password: "", email: "" })

  const handleSubmit = async (e) => {
      e.preventDefault()
      console.log('submitting...', form)
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/signup`, {...form})
      .then(data=> {
        Swal.fire({
          title: "Success!",
          text: "A new user have been added!",
          icon: "success"
        });
        router.push('/signin')
      })
      .catch(e=>{
        console.log(e)
        Swal.fire({
          title: 'Error!',
          text: e?.response?.data?.message || "An error occured while sending data",
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
    <form className='max-w-xl p-10 h-full flex justify-center flex-col'>
        <p className="text-trend text-7xl font-medium">Welcome!</p>
        <p className="text-light">Enter your email and password to sign up</p>
        <p className="h-10"></p>
        <Input id="email" type="email" placeholder="Your Email" required={true} label="Email" value={form.email} onChange={handleChange} />
        <Input id="name" type="text" placeholder="Your Name" required={true} label="Name" value={form.name} onChange={handleChange} />
        <Input id="password" type="password" required={true} label="Password" value={form.password} onChange={handleChange} />
        <Button type="submit" text="Register" className="!w-full mt-4" onClick={handleSubmit}/>
        <p className="h-10"></p>
        <div className="text-light">Go to <RouteLink href="/signin" text="sing in"/></div>
    </form>
  )
}

export default Form