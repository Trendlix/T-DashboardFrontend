import React from 'react'
import { Line, defaults } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function SalesAreaChart() {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const salesData = [
    500, 150, 200, 250, 300, 350, 400, 450, 500, 450, 400, 350
  ];

  const data = {
    labels: months,
    datasets: [{
      label: 'Sales',
      data: salesData,
      borderWidth: 1,
      tension: 0.4,
      fill: true,
      label: 'Sales',
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        let gradient;
        gradient = ctx.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, 'rgba(228, 28, 64, 1)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
        return gradient;
      },
      borderColor: 'transparent',
    }]
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 500,
        min: 0,
        stepSize: 100,
        grid: {
          display: true,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  };

  return (
    <div className='h-[80%] flex items-center pt-10'>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesAreaChart