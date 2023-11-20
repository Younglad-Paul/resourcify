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
  ["Sept", 27, 19],
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
    <div className="lg:grid lg:grid-cols-1  mx-auto max-w-screen-lg">
      <div className="lg:col-span-2 xl:col-span-1  ">
        <Chart
          chartType="LineChart"
          width={"100%"}
          height={"300px"}
          loader={<div>Loading Chart</div>}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};
export default LineChart;
