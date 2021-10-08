import React from 'react';

const logic = (props) => {
    
    const populationGrowth = () => {
        return props.population * 1.02;
    }
  
    return (
        <div>
            <h2>{populationGrowth()]</h2>
        </div>
    );
};

export default logic;