'use client'
import React from 'react';
import { Chart } from 'react-google-charts';
import { BiSolidCloudUpload } from 'react-icons/bi';

export const data = [
  ['x', '', ''],
  ['Jan', 0, 10],
  ['Feb', 10, 5],
  ['Mar', 23, 15],
  ['Apr', 9, 17],
  ['May', 18, 10],
  ['Jun', 9, 5],
  ['Jul', 11, 3],
  ['Sept', 27, 19],
  ['Oct', 27, 19],
  ['Nov', 27, 19],
  ['Dec', 19, 27],
];

const options = {
  series: {
    0: { curveType: 'function' }, 
    1: { curveType: 'function' }, 
  },
};

const ChartSection = () => {
  return (
    <div className='w-[84.5vw] bg-white my-20 py-5 z-0 px-3 '>
      <p>Income</p>
      <div className='flex w-[82vw]'>
        <p>Nxx,xxx.xx</p>
        <div className='grid justify-items-end w-[82vw] '>
          <div className='flex'>
            <select className='border-2 border-blue-500 rounded-md p-1 mr-2 justify-center align-center'>
              <option>Yearly</option>
              <option>Monthly</option>
              <option>Daily</option>
            </select>
            <div className='flex bg-blue-500 text-white rounded-md p-1 px-2 mr-2 justify-items-end cursor-default items-center border-2 border-blue-500 hover:bg-blue-900'>
              <p>Export</p>
              <BiSolidCloudUpload className='w-5 h-5 ml-1' />
            </div>
          </div>
        </div>
      </div>
      <section className='w-[82rem] overflow-hidden'>
        <Chart
          className='ml-[-9rem]'
          chartType='LineChart'
          width='112%'
          height='400px'
          data={data}
          options={options}
        />
      </section>
    </div>
  );
};

export default ChartSection;
