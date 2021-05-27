import React from 'react';
import {Bar} from 'react-chartjs-2';

const chartData = {
    labels:['Islamabad','Karachi', 'Lahore','Peshawer','Jhelum','Multan'],
    datasets:[
        {
            label:'Population',
            data:[
                43114356,3434324,34344343,5643234,6544332,24433456
            ],
            backgroundColor:[
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
        }
    ]
};

// const data = {
//     labels: ['1985', '1990', '1995', '2000', '2005', '2010'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [5, 11, 7, 2, 13, 12],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
  
//   const options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };

export default function ChartHomepage(){
    
    
    return(
        <div>
        {/* <div className=''>
      <h1 className='title'>Vertical Bar Chart</h1>
      <div className='links'>
        {/* <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
        >
          Github Source
        </a> 
      </div>
      </div>
    <Bar data={data} options={options} /> */}
    <div className='chart'>
            <Bar
            data = {chartData}
            options={{}}
            />
         </div>
    </div>
  
    );
}