"use client";
import { Chart } from "react-google-charts";

const data = [
  ["x", "", ""],
  ["Jan", 0, 10],
  ["Feb", 10, 5],
  ["Mar", 23, 15],
  ["Apr", 9, 17],
  ["May", 18, 10],
  ["Jun", 9, 5],
  ["Jul", 11, 3],
  ["Sept", 27, 19],
  ["Oct", 27, 19],
  ["Nov", 27, 19],
  ["Dec", 19, 27],
];

const options = {
  series: {
    0: { curveType: "function" },
    1: { curveType: "function" },
  },
};

const LineChart = () => {
  return (
    <div className=" ">
      <Chart />
    </div>
  );
};
export default LineChart;
