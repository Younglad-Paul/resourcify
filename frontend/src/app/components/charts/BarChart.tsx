"use client";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Employee", ""],
  ["Mike", 1000],
  ["Lilian", 1170],
  ["Favour", 300],
  ["Samuel", 1030],
  ["Cloe", 2003],
  ["Amanda", 30],
  ["John", 1300],
  ["Kingsley", 1032],
  ["Deborah", 1030],
  ["James", 100],
];

export const options = {
  chart: {
    title: "Employee Expenditure",
  },
};

const BarChart = () => {
  return (
    <div className="lg:grid lg:grid-cols-1 bg-white p-6 rounded-lg  max-w-screen-lg">
      <div className="lg:col-span-2 xl:col-span-1 ">
        <Chart
          chartType="Bar"
          width={"100%"}
          height="400px"
          data={data}
          options={options}
          loader={<div>Loading Chart...</div>}
        />
      </div>
    </div>
  );
};

export default BarChart;
