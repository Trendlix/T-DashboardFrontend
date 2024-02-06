"use client"
import React from 'react'
import BarChart from '../ui/BarChart'
import DoughnutChart from '../ui/DoughnutChart'

const ChartsSecond = () => {
  const data = [2000, 6000, 12000, 4000, 5000, 47000, 4500, 35000, 1000, 27000, 3000, 7000 ]
  return (
    <div className='flex flex-row justify-between pt-24 gap-5 px-5 pr-10'>
      <BarChart data={data} />
      <DoughnutChart currentCustomers={50} newCustomers={5} totalVisitors ={90} />
    </div>
  )
}

export default ChartsSecond