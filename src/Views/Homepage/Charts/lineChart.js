import React from 'react';
import { Line } from 'react-chartjs-2';
import {Card} from 'react-bootstrap';

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
  maintainAspectRatio: false,
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
    <Card style={{width:'33vw',height:'40vw'}}>
     
      <Card.Body>
      <article style={{width:'28vw', height:'25vw'}}>

<Line  data={data} options={options} />
</article>
        <Card.Title style={{textAlign:'center',color:'#3f3f44'}}>Food Scarcity index</Card.Title>
        <Card.Text style={{textAlign:'center',color:'#3f3f44'}}>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
     
      </Card.Body>
    </Card>
    

  );
}
    