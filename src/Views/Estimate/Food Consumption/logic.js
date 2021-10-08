import React from 'react';

const logic = (props) => {
    
    //props.kg = 200;
    //const cal = props.kg * 3510;
    //props.population = 20000;
    const quintile = 5;
    const consumptionPerQuintile = 240;
    const HH = Math.floor(props.population / quintile);
    
    const ConsumptionPerAnnum = () => {
        return (HH * consumptionPerQuintile)
    }
    return (
        <h2>{ConsumptionPerAnnum()}</h2>
      
    );
};

export default logic;