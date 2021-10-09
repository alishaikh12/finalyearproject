import React,{useState} from 'react';
import {Bar} from 'react-chartjs-2';
import {Card, Button, } from 'react-bootstrap';
import PakistanCities from '../../../assets/geoJson/PakistanCities.json';




const options = {
  maintainAspectRatio: false	// Don't maintain w/h ratio
}
const cityLabels = PakistanCities.map((item)=> {
  return item.city
})
const Population = PakistanCities.map((item)=>{
  return item.population
})
const chartData = {
    labels:cityLabels,
    datasets:[
        {
            label:'Population',
            data:Population,
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
  
const [show,setShow] = useState(false);
    return(
      <Card style={{width:'33vw',height:'40vw',marginLeft:'5px',marginRight:'5px' }}>
     
  <Card.Body>
    {
      show?<article style={{width:'28vw',height:'25vw'}}>
      <Bar
          
          data = {chartData}
          options={options}
          />
 
 </article>
:<article style={{width:'28vw',height:'25vw'}}>
<h3 style={{textAlign:'center',color:'#3f3f44'}}>No data to show</h3>
</article>
    }
    <Card.Title style={{textAlign:'center',color:'#3f3f44'}}>Current Population Graph</Card.Title>
    <Card.Text style={{textAlign:'center',color:'#3f3f44'}}>
      The chart will render after clicking the button bellow. This button will create a bar chart of Pakistans major cities
    </Card.Text>
    <Button onClick={()=>setShow(!show)} variant="secondary" style={{marginLeft:'10vw'}}>
    Toggle Chart
    </Button>
 
  </Card.Body>
</Card>
            
       
    );
}

