import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Card} from 'react-bootstrap';
import PakistanCities from '../../../assets/geoJson/PakistanCities.json';


const options = {
  maintainAspectRatio: false	// Don't maintain w/h ratio
}
const label = PakistanCities.map((item)=> {
  return item.city
})
const Data = PakistanCities.map((item)=>{
  return item.population
})
console.log(label)
const chartData = {
    labels:label,
    datasets:[
        {
            label:'Population',
            data:Data,
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



export default function BarChart(){
    return(
      <Card style={{width:'33vw',height:'40vw'}}>
     
  <Card.Body>
  <article style={{width:'28vw',height:'25vw'}}>
        <Bar
            
            data = {chartData}
            options={options}
            />
   
   </article>
    <Card.Title style={{textAlign:'center',color:'#3f3f44'}}>Current Population Graph</Card.Title>
    <Card.Text style={{textAlign:'center',color:'#3f3f44'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>
</Card>
            
       
    );
}

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



//  {/* <div className=''>
//       <h1 className='title'>Vertical Bar Chart</h1>
//       <article className='links'>
//         {/* <a
//           className='btn btn-gh'
//           href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
//         >
//           Github Source
//         </a> 
//       </div>
//       </div>
//     <Bar data={data} options={options} /> */}