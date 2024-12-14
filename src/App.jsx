import { useState } from 'react'
import Logo from './assets/logo-unknown.png'
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { data } from 'autoprefixer';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function App() {

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [10, 20, 30, 40, 50, 60],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Smooth line
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Turn off labels
      title: { display: true, text: "Monthly Revenue" },
    },
  };

  // Data for Pie Chart
  const pieData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  
const pieOptions = {
  responsive: true,
  plugins: {
    legend: { display: false }, // Turn off labels
    title: { display: true, text: "Votes Distribution" },
  },
};

const [data, setData] = useState({

  analytics1: 7037343,
  analytics2: 7337873,
  analytics3: 9837343,
  analytics4: 7039943,

});

  return (
    <>
      <div className='w-[100vw] h-[100vh] flex'>
        <div className='w-[220px] h-[100%] bg-blue-900 p-[10px] rounded-r-[30px] mr-[10px]'>

          <img className='h-[100px]' src={Logo} alt="" />

          <div className='flex flex-col p-[20px] h-[calc(100%-100px)] justify-between  text-white'>

            <div className='flex flex-col h-[calc(100%-50px)]'>

              <a href="#" className='p-[10px]'>Dashboard</a>
              <a href="#" className='p-[10px]'>Reports</a>
              <a href="#" className='p-[10px]'>Analytics</a>
              <a href="#" className='p-[10px]'>Settings</a>

            </div>

            

            <div className='h-[50px]'>
            <p className='text-center'>Need Help?</p>
            <p className='text-center'>Contact Support</p>
            </div>

          </div>

        </div>

        <div className='w-[calc(100%-230px)] h-[100%] p-[10px]'>

        <h1 className='text-[25px] pt-[20px]'>Welcome Back</h1>

        <div className='flex justify-between w-[80%] m-[auto] mt-[30px]'>

          <div className='p-[40px] pt-[30px] pb-[30px] text-center border-[1px] rounded-[20px]'>
            <p className='p-[10px] pb-[5px] text-[20px] pt-[5px] font-semibold'>{data.analytics1}</p>

            <p className='p-[10px] text-[17px] pb-[0px]'>Total Users</p>
          </div>

          <div className='p-[40px] pt-[30px] pb-[30px] text-center border-[1px] rounded-[20px]'>
            <p className='p-[10px] pb-[5px] text-[20px] pt-[5px] font-semibold'>{data.analytics2}</p>

            <p className='p-[10px] text-[17px] pb-[0px]'>Total Users</p>
          </div>

          <div className='p-[40px] pt-[30px] pb-[30px] text-center border-[1px] rounded-[20px]'>
            <p className='p-[10px] pb-[5px] text-[20px] pt-[5px] font-semibold'>{data.analytics3}</p>

            <p className='p-[10px] text-[17px] pb-[0px]'>Total Users</p>
          </div>

          <div className='p-[40px] pt-[30px] pb-[30px] text-center border-[1px] rounded-[20px]'>
            <p className='p-[10px] pb-[5px] text-[20px] pt-[5px] font-semibold'>{data.analytics4}</p>

            <p className='p-[10px] text-[17px] pb-[0px]'>Total Users</p>
          </div>
        
        </div>

        <h1 className='p-[20px] text-[25px] w-[100%] text-center ' >Analytics</h1>

        <div className='w-[100%] flex flex-1 justify-between p-[10px]'>

          <div className='w-[65%]'>

          <Line data={lineData} options={lineOptions} />

          </div>

          <div className='w-[25%]'>

          <Pie data={pieData} options={pieOptions} />

          </div>

        </div>

        </div>
      </div>
    </>
  )
}

export default App
