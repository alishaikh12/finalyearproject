import React from 'react';
import BarChart from './Charts/barChart';
import DoughnutChart from './Charts/doughnutChart';
import LineChart from './Charts/lineChart';


export default function ChartHomepage(){    
    return(
       <div>
           <div style={{display:'flex',margin:'50px'}}>
               
               <BarChart/>
            
                   
               <DoughnutChart/>
        
               <LineChart/>
               
            </div>

       </div>
  
    );
}