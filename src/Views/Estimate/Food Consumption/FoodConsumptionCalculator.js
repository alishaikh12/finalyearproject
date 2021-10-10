import React, { useState } from "react";

import Population from "../../../assets/geoJson/Population.json";
import Logic from "./logic";

const FoodConsumptionCalculator = () => {
  const [City, setCity] = useState();

  const [pop, setpop] = useState("pfajfiajifj");

  const onSubmitHandle = () => {
    const population = Population.results.map((city) => {
      if (City === city.name) {
        return city.population;
      }
    });
    // console.log("fjfhj");
    setpop(population);
  };

  return (
    <div>
      <h1>Food consumption Calculator</h1>
      <input
        type="text"
        value={City}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => onSubmitHandle()}>Submit</button>
      <Logic population={pop} />
    </div>
  );
};

export default FoodConsumptionCalculator;
