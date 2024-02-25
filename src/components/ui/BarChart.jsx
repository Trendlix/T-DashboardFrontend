import React from 'react'
import ChartBg from './ChartBg'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
import RoseCircle from "@/public/icons/rose-circle.svg"
import PurpleCircle from "@/public/icons/purple-circle.svg"
import BlueCircle from "@/public/icons/blue-circle.svg"
import Image from "next/image"

const BarChart = ({data}) => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Value',
        data: data,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const defaultColor = "rgba(230, 232, 240, 1)";
          let gradient;
  
          if (context.dataIndex === 2) {
            gradient = ctx.createLinearGradient(0, 0, 280, 0);
            gradient.addColorStop(0, 'rgba(255, 213, 94, 1)');
            gradient.addColorStop(0.9, 'rgba(150, 150, 150, 1)');
          } else if (context.dataIndex === 5) {
            gradient = ctx.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0, 'rgba(253, 180, 190, 1)');
            gradient.addColorStop(0.9, 'rgba(255, 11, 45, 1)');
          } else if (context.dataIndex === 9) {
            gradient = ctx.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0, 'rgba(255, 76, 226, 1)');
            gradient.addColorStop(0.9, 'rgba(255, 183, 245, 1)');
          } else {
            gradient = defaultColor;
          }
  
          return gradient;
        },
        borderRadius: 7,
        barPercentage: 0.7, 
        borderColor: 'transparent',
      },
    ],
  };

  const options = {
    tooltips: {
      callbacks: {
        label: (tooltipItem) => `Value: ${tooltipItem.yLabel}`,
      },
    },
    scales: {
      y: {
        display: false,
      },
    },
  };


  return (
    <ChartBg title='Blog Statistics' subTitle='Farwla Tech' statValue='112,340'>
        <div className='flex flex-col h-full gap-6 px-6 mt-20'>
          <Bar data={chartData} options={options} />
          {/* footer of component */}
          <div className='flex flex-row gap-6'>
              <div className='flex flex-row gap-2 items-center'>
                  <Image src={BlueCircle} width={12} height={12} alt='circle' />
                  <p className='text-md text-gray-400'>{`Pending(10%)`}</p>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                  <Image src={PurpleCircle} width={12} height={12} alt='circle' />
                  <p className='text-md text-gray-400'>Income</p>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                  <Image src={RoseCircle} width={12} height={12} alt='circle' />
                  <p className='text-md text-gray-400'>Expenses</p>
              </div>
            </div>
        </div>
    </ChartBg>
  )
}

export default BarChart