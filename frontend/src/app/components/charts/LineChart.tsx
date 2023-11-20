"use client";
import { Chart } from "react-google-charts";

interface Data {
  data: Array<Array<string | number>>;
}

const data = [
  ["x", "Sales", "Expenses"],
  ["Jan", 0, 10],
  ["Feb", 10, 5],
  ["Mar", 23, 15],
  ["Apr", 9, 17],
  ["May", 18, 10],
  ["Jun", 9, 5],
  ["Jul", 11, 3],
  ["Sept", 27, 49],
  ["Oct", 27, 19],
  ["Nov", 27, 19],
  ["Dec", 19, 27],
];

const options = {
  title: "Income",
  curveType: "function",
  legend: { position: "bottom" },
};

const LineChart = () => {
  return (
    <div className="">
      <div className="">
        <Chart
        className=""
          chartType="LineChart"
          width={"100%"}
          height={"300px"}
          loader={<div>Loading Chart...</div>}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};
export default LineChart;
