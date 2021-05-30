import React,{useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Card,Button} from 'react-bootstrap';

const data = {
  labels: ['1990', '1995', '2000', '2005', '2010', '2015'],
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
  const [show,setShow] = useState(false);
  return(
    <Card style={{width:'33vw',height:'40vw',marginLeft:'5px',marginRight:'5px'}}>
     
      <Card.Body>
{
          show?
          <article style={{width:'28vw', height:'25vw'}}>

          <Line  data={data} options={options} />
          </article>
          : <article style={{width:'28vw',height:'25vw'}}>
          <h3 style={{textAlign:'center',color:'#3f3f44'}}>No data to show</h3>
        </article>
}
     
        <Card.Title style={{textAlign:'center',color:'#3f3f44'}}>Food Scarcity index</Card.Title>
        <Card.Text style={{textAlign:'center',color:'#3f3f44'}}>
        The chart will render after clicking the button bellow. This button will create a Line chart of Food scarcity of Pakistan
        </Card.Text>
        <Button onClick={()=>setShow(!show)}variant="secondary" style={{marginLeft:'10vw'}}>Toggle Chart</Button>
 
      </Card.Body>
    </Card>
    

  );
}
    