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
      },
      title: {
        display: false,
        text: 'Mood Chart',
      },
    
    },
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
            label:"Mood Chart" ,
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