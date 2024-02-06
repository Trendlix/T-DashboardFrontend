import { cn } from "@/utils/utils"

function Input({id= "", className = "", type = "text", label = "", placeholder = "", required = false, value = "", onChange = ()=>{}}) {
  return (
    <div className="mb-5">
        <label 
        htmlFor={id} 
        className="block mb-2 text-sm font-medium text-gray-900">
            {label}
        </label>
        <input 
        type={type} 
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={cn("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 ",
        className)}
        placeholder={placeholder}
        required={required} />
    </div>
  )
}

export default Input