import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      
    },
    title: {
      color: 'white',
      display: true,
      text: 'Precio Ethereum (USD)',
    },
  },
};

export default function Grafico(
{  real_price,
  pred_price}
  ) {
    
  const labels = Object.keys(real_price);
    console.log(labels)

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Precio Real",
        data: real_price,
        borderColor: '#888ae1',
        fill: false,
      },
      {
        label: "Precio Predicho",
        data: pred_price,
        borderColor: "#88e088",
        fill: false,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
