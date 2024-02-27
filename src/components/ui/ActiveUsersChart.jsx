import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs, Ticks } from 'chart.js/auto';

function ActiveUsersChart () {
  const data = {
    labels: Array.from({ length: 9 }, (_, i) => ''), // Empty labels for x-axis
    datasets: [
      {
        label: 'Active Users',
        data: [0, 100, 200, 300, 400, 500, 450, 500, 200],
        backgroundColor: 'white', // Set your gradient colors here
        borderWidth: 1,
        categoryPercentage: 0.1, // Adjust the width of the bars
        barPercentage: 1, // Set to 1 to make them thin lines
        borderRadius: 12,
        borderColor: 'transparent',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // Hide x-axis labels
      },
      y: {
        beginAtZero: true,
        max: 500,
        min: 0,
        stepSize: 100,
        ticks: {
            color: 'white', // Set the color of the y-axis labels to white
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'white', // Set the color of the legend labels (dataset label) to white
          },
        },
      },
      maintainAspectRatio: false, // Allow the chart to take the full width
    };

  return (
    <div className='bg-gradient-to-tr from-[#FE324F] to-[#41060E] rounded-lg h-[230px] p-4 flex items-center'>
      <div className="w-full h-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ActiveUsersChart;
