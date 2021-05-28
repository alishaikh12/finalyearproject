import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'food scarcity',
      data: [122,466,22,900,433,444],
      fill: true,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export default function LineChart(){
  return(
<div style={{width:'30vw'}}>
<h3 style={{textAlign:'center'}}>Food Scarcity index</h3> 
    <Line data={data} options={options} />
</div>
  );
}
    