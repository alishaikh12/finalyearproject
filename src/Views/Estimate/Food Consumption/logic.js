import React, { useEffect, useState } from "react";

function Logic({ population }) {
  //props.kg = 200;
  //const cal = props.kg * 3510;
  //props.population = 20000;
  console.log(population);
  const quintile = 5;
  const consumptionPerQuintile = 240;
  const HH = Math.floor(population / quintile);

  const [result, setResult] = useState(0);
  useEffect(() => {
    const ConsumptionPerAnnum = () => {
      const res = HH * consumptionPerQuintile;
      setResult(res);
    };
    ConsumptionPerAnnum();
  }, []);

  return <h2>{result}</h2>;
}

export default Logic;
