import React from 'react'
import { cn } from '@/utils/utils'

function Button({type="button", className="", text="", color = 'trend', onClick=()=>{} }) {
  return (
    <button 
    type={type} 
    onClick={onClick}
    className={cn("text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ",
    color === 'trend'? "bg-trend hover:bg-red-800 focus:ring-red-300 ": "bg-green-700 hover:bg-green-800 focus:ring-green-300 ",
    className)}
    >
       {text}
    </button>
  )
}

export default Button