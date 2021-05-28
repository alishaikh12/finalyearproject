import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels:['Islamabad','Karachi', 'Lahore','Peshawer','Jhelum','Multan'],
    datasets: [
      {
        label: 'Food Consumption',
        data:[
          43114356,3434324,34344343,5643234,6544332,24433456
      ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  

export default function DoughnutChart(){
    return(
    <div style={{width:'30vw'}}>
     <h3 style={{textAlign:'center'}}>Food Consumption Graph</h3>   
      <Doughnut data={data} />
    </div>
    
    );
}


