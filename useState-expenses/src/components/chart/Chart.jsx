import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataValues = props.dataPoints.map((data) => data.value);

  const totalMax = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.dataPoints.map((el) => (
        <ChartBar
          key={el.label}
          label={el.label}
          value={el.value}
          totalMax={totalMax}
        />
      ))}
    </div>
  );
}

export default Chart;
