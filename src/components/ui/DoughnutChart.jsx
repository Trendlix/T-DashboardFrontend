import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
import ChartBg from './ChartBg'
import RedCircle from "@/public/icons/red-circle.svg"
import YellowCircle from "@/public/icons/yellow-circle.svg"
import YellowArrow from "@/public/icons/yellow-arrow.svg"
import RedArrow from "@/public/icons/red-arrow.svg"
import Image from "next/image"
import CircleWithImage from './CircleWithImage'


const DoughnutChart = ({ currentCustomers, newCustomers, totalVisitors }) => {
    const totalCustomers = currentCustomers + newCustomers
    const currentCustomersPercentage = (currentCustomers / totalVisitors) * 100
    console.log(currentCustomersPercentage)
    const newCustomersPercentage = (newCustomers / totalVisitors) * 100 
    const totalPercentage = (((newCustomersPercentage + currentCustomersPercentage) / totalVisitors ) * 100).toFixed(1);
    const data = {
      labels: ['Current Customers', 'New Customers', 'Not Users'],
      datasets: [
        {
          data: [currentCustomers, newCustomers, (totalVisitors-totalCustomers) ], // Example percentages, adjust as needed
          backgroundColor: ['#E61B3C', '#FFBD00', '#E0E0E0'], // Red, Yellow, Gray
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      cutoutPercentage: 80, // Adjust the cutout percentage for a doughnut shape
      legend: {
        display: true,
        position: 'bottom',
      },
    };
    
  return (
    <ChartBg title='Visitors' subTitle='visitors of Trendlix'>
        <div className='flex flex-col h-full justify-between '>
          {/* chart  */}
            <div className='flex flex-row pt-6 gap-6 items-center' >
                <div className='relative e-full flex flex-row items-center'>
                    <Doughnut data={data} options={options} className='z-20 p-0' />
                    <div className='bg-[#FAFBFF] w-24 h-24 rounded-full flex items-center justify-center absolute right-[34%] top-[43%] z-10 shadow-2xl shadow-gray-500'>
                      <div className='flex flex-col items-center'>
                        <p className='font-bold text-xl'>{totalPercentage}%</p>
                        <p>Total</p>
                      </div>
                    </div>
                </div>

                <div className='flex-1 flex flex-col justify-center gap-8 items-start pt-16'>
                    <div className='flex flex-row gap-3 items-center'>
                      <CircleWithImage percentage={30} imageUrl={RedArrow} borderColor='#D21734' shadowColor='#f3aab4' circleColor='#FFE0E4'/>
                      <div className='flex flex-col'>
                        <p className='font-bold text-xs text-dark'>+ 18%</p>
                        <p className='text-gray-400 text-xs'>Daily Customers</p>
                      </div>
                    </div>

                    <div className='flex flex-row gap-3 items-center'>
                      <CircleWithImage percentage={30} imageUrl={YellowArrow} borderColor='' shadowColor='#ffe186' circleColor='#faebbe'/>
                      <div className='flex flex-col'>
                        <p className='font-bold text-xs text-dark'>+ 14%</p>
                        <p className='text-gray-400 text-xs'>Weekly new Customers</p>
                      </div>
                    </div>
                </div>
            </div>

            {/* footer of component */}
            <div className='self-center flex flex-row gap-6 pt-10'>
                <div className='flex flex-row gap-2 items-center'>
                    <Image src={RedCircle} className='w-15 h-15' alt='circle' />
                    <p className='text-md'>Current customers</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <Image src={YellowCircle} className='w-15 h-15' alt='circle' />
                    <p className='text-sm'>New customers</p>
                </div>
            </div>
        </div>
    </ChartBg>
  )
}

export default DoughnutChart