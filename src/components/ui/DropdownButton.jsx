"use client"
import React, { useState } from 'react'
import Image from "next/image"
import Dropdown from "@/public/icons/dropdown.svg"
import { websiteAdminData } from '@/utils/data'


const DropdownButton = ({ setList, list,  buttonText, options}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [chosenText, setChosenText] = useState(buttonText)

    const handleItemClick = (filterWith) =>{
        if(filterWith === 'All'){
            setList(websiteAdminData)
        }else if(filterWith === 'A-Z'){
            const sortedArrayAsc = [...list].sort((a, b) => a.company.localeCompare(b.company, undefined, { numeric: true, sensitivity: 'base' }));
            setList(sortedArrayAsc)
        }else if(filterWith === 'Z-A'){
            const sortedArrayDesc = [...list].sort((a, b) => b.company.localeCompare(a.company, undefined, { numeric: true, sensitivity: 'base' }));
            setList(sortedArrayDesc)
        }else{
            const isCustom = filterWith === 'Custom Coding' ? true : false 
            const filteredList = websiteAdminData.filter((item) => item.isCustom === isCustom)
            setList(filteredList)
        }
        setChosenText(filterWith)
        setIsDropdownOpen(false)
      }
  
    const handleDropdownToggle = () =>{
      setIsDropdownOpen(!isDropdownOpen)
    }
    
    return (
        <div className='relative inline-block'>
          <button
            onClick={handleDropdownToggle}
            className='flex flex-row gap-4 w-42 bg-white rounded-md px-2 py-1 items-center justify-center cursor-pointer'
          >
            <p className='text-lg text-dark font-semibold'>{chosenText}</p>
            <Image src={Dropdown} width={15} height={15} alt='dropdown' />
          </button>
    
          {isDropdownOpen && (
            <div className='z-10 absolute mt-2 w-40 bg-white border rounded-lg shadow-xl border-gray-300'>
              <ul>
                {options.map((item, index) => (
                  <li
                    key={index}
                    className='cursor-pointer py-2 px-4 hover:bg-gray-100 text-nowrap font-semibold'
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    };

export default DropdownButton