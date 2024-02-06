import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
import ChartBg from './ChartBg'
import RedCircle from "@/public/icons/red-circle.svg"
import YellowCircle from "@/public/icons/yellow-circle.svg"
import YellowArrow from "@/public/icons/yellow-arrow.svg"
import RedArrow from "@/public/icons/red-arrow.svg"
import Image from "next/image"
import Graph from "@/public/images/Graph.png"
import Chart1 from "@/public/images/Chart1.png"
import Chart2 from "@/public/images/chart2.png"
import CircleWithImage from './CircleWithImage'


const DoughnutChart = ({ currentCustomers, newCustomers, totalVisitors }) => {
    const totalCustomers = currentCustomers + newCustomers
    const currentCustomersPercentage = (currentCustomers / totalVisitors) * 100
    console.log(currentCustomersPercentage)
    const newCustomersPercentage = (newCustomers / totalVisitors) * 100 
    const totalPercentage = (((newCustomersPercentage + currentCustomersPercentage) / totalVisitors ) * 100).toFixed(1);
    
    // const data = {
    //     labels: ['Current Customers', 'New Customers' ],
    //     datasets: [
    //       {
    //         data: [currentCustomersPercentage, newCustomersPercentage],
    //         backgroundColor: ['#36A2EB', '#FFCE56'],
    //       },
    //     ],
    //   };
    
    //   const options = {
    //     cutout: '80%', // Adjust this value for the size of the inner circle
    //     plugins: {
    //       legend: {
    //         display: false,
    //       },
    //       tooltip: {
    //         enabled: false,
    //       },
    //     },
    //   };

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
        <div className='flex flex-col justify-between items-center h-full pt-20'>
          {/* chart  */}
            <div className='flex flex-row p-5 items-center gap-16'>
                <div className=''>
                    <Doughnut data={data} options={options} />
                    <div className="chart-label">
                        <span>Total {totalPercentage}%</span>
                    </div>
                </div>

                <div className=' flex-1 flex flex-col justify-center gap-8'>
                    <div className='flex flex-row gap-10 items-center'>
                      <CircleWithImage percentage={30} imageUrl={RedArrow} borderColor='#7D040A' circleColor='#FFE0E4'/>
                      <div className='flex flex-col gap-2'>
                        <p className='font-bold text-lg text-dark'>+ 18%</p>
                        <p className='text-gray-400'>Daily Customers</p>
                      </div>
                    </div>

                    <div className='flex flex-row gap-10 items-center'>
                      <Image src={Chart1} width={100} height={100} alt=''/>
                      <div className='flex flex-col gap-2'>
                        <p className='font-bold text-lg text-dark'>+ 14%</p>
                        <p className='text-gray-400'>Weekly new Customers</p>
                      </div>
                    </div>
                </div>
            </div>

            {/* footer of component */}
            <div className='self-center flex flex-row gap-6 pt-10'>
                <div className='flex flex-row gap-2 items-center'>
                    <Image src={RedCircle} width={15} height={12} alt='circle' />
                    <p className='text-md'>Current customers</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <Image src={YellowCircle} width={15} height={12} alt='circle' />
                    <p className='text-md'>New customers</p>
                </div>
            </div>
        </div>
    </ChartBg>
  )
}

export default DoughnutChart