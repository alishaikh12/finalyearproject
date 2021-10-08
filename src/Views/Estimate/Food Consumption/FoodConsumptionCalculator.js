import React,{useState} from 'react';

import Population from '../../../assets/geoJson/Population.json'
import Logic from './logic';

const FoodConsumptionCalculator = () => {
    const [City,setCity] = useState();
    var population  = Population.results.map((city)=>{
        if(City === city.name ){
            return city.population
        }
        else{
            return 20
        }
    })
    console.log(population)
    return (
        <div>
            <h1>Food consumption Calculator</h1>
            <input type="text" value={City} onChange={(e) => setCity(e.target.value) } />
            <Logic
            
            population={population}

            />
        </div>
    );
};

export default FoodConsumptionCalculator;