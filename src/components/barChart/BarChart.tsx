import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display:false
      },
      title: {
        display: true,
        text: 'Mood Chart',
        color:'#fff'
      },
    
    },
    scales:{
        yAxes:{
            grid:{
                // color:"gray"
            },
            ticks:{
                beginAtZero: true,
                color: 'white',
                fontSize: 12,
            }
        },
        xAxes: {
            grid: {
                // drawBorder: true,
                // color: 'gray',
            },
            ticks:{
                beginAtZero: true,
                color: 'white',
                fontSize: 12,
            }
        },
    }
  };

  const labels = ['Angry', 'Sad', 'Okay', 'Cool', 'Happy'];

  

type BarChartPropType = {
    moodFrequencies: number[]
}

const BarChart = ({moodFrequencies}:BarChartPropType) =>{
    const data = {
        labels,
        datasets: [
          { 
            datasetIdKey :1,
            // label:"" ,
            data: moodFrequencies,
            backgroundColor: ["red", "blue", "lightblue", "greenyellow", "green"],
          },
        ],
      };
    return (
            <Bar 
                options={options} 
                data={data} 
            />
        );
}

export default BarChart;