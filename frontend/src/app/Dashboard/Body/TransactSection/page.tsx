import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { MdOutlineFilterAlt } from 'react-icons/md';
import { IoAddCircleOutline, IoBasketSharp } from 'react-icons/io5';
import { BiBus } from 'react-icons/bi';
import { MdOutlineAirplanemodeActive } from 'react-icons/md';
import { FaChevronRight } from 'react-icons/fa';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { MdElectricBolt } from 'react-icons/md';
import SearchBar from '../../Header/SearchBar';

const TransactionHistory = () => {
  return (
<div className="flex">
  <div className="w-[130vw] bg-white rounded-md py-5 px-8 overflow-hidden">
    <div className="grid">
      <div className="flex">
        <h3 className="font-bold mb-5">Transactions</h3>
        <div className="ml-auto">
          <select className="border-2 border-blue-500 rounded-md p-1 mr-2 h-8">
            <option>Yearly</option>
            <option>Monthly</option>
            <option>Daily</option>
          </select>
        </div>
      </div>
      <div className="flex text-[.8rem]">
        <p className="cursor-default">Showing X of X results</p>
        <p className="flex ml-5 mr-5 font-bold align-center h-5 justify-center cursor-pointer hover:justify-center hover:items-center">
          Download <AiOutlineDownload className="ml-1" />
        </p>
        <MdOutlineFilterAlt className="bg-primary rounded-full p-1 h-7 w-7 mt-[-0.3rem] text-white cursor-pointer hover:bg-blue-900" />
        <div className="ml-auto">
          <SearchBar />
        </div>
      </div>
    </div>
    <div className="flex mt-10">
      <div className="w-full pr-4">
        <table className="w-full border">
          <thead>
            <tr className="bg-blue-100 text-left h-10 pl-5 text-primary">
              <td>Transaction ID</td>
              <td>Categories Name</td>
              <td>Date</td>
              <td>Amount</td>
              <td>Transactions</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr className="text-left h-10 pl-5">
              <td>xxxx</td>
              <td>xxxxxxx</td>
              <td>xxxxxx</td>
              <td>Nxxxx</td>
              <td>xxxx</td>
              <td>xxxx</td>
            </tr>
            <tr className="text-left h-10 pl-5">
              <td>xxxx</td>
              <td>xxxxxxx</td>
              <td>xxxxxx</td>
              <td>Nxxxx</td>
              <td>xxxx</td>
              <td>xxxx</td>
            </tr>
            <tr className="text-left h-10 pl-5">
              <td>xxxx</td>
              <td>xxxxxxx</td>
              <td>xxxxxx</td>
              <td>Nxxxx</td>
              <td>xxxx</td>
              <td>xxxx</td>
            </tr>
            <tr className="text-left h-10 pl-5">
              <td>xxxx</td>
              <td>xxxxxxx</td>
              <td>xxxxxx</td>
              <td>Nxxxx</td>
              <td>xxxx</td>
              <td>xxxx</td>
            </tr>
            <tr className="text-left h-10 pl-5">
              <td>xxxx</td>
              <td>xxxxxxx</td>
              <td>xxxxxx</td>
              <td>Nxxxx</td>
              <td>xxxx</td>
              <td>xxxx</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
   <div className='w-1/2 pl-4 bg-white ml-10 rounded-md p-5'>
          <div className='flex mb-5 justify-center items-center'>
          <h1 className='font-bold'>Categories</h1>
          <IoAddCircleOutline className='bg-primary rounded-full text-white p-1 w-8 h-8 ml-auto cursor-pointer hover:bg-blue-900' />
          </div>
          <SearchBar />
          <hr className='mt-5'/>
          <div className=''>
            <div className='flex font-bold justify-center items-center mt-5 cursor-pointer hover:text-primary'>
              <IoBasketSharp className='bg-primary rounded-full text-white p-1 w-8 h-8 mr-2' /><p>Shoppings</p><FaChevronRight className='ml-auto'/>
            </div>
            <div className='flex font-bold justify-center items-center mt-5 cursor-pointer hover:text-primary'>
              <BiBus className='bg-yellow-500 rounded-full text-white p-1 w-8 h-8 mr-2' /><p>Traveling</p><FaChevronRight className='ml-auto'/>
            </div>
            <div className='flex font-bold justify-center items-center mt-5 cursor-pointer hover:text-primary'>
              <MdOutlineAirplanemodeActive className='bg-red-500 rounded-full text-white p-1 w-8 h-8 mr-2' /><p>Accomodation</p><FaChevronRight className='ml-auto'/>
            </div>
            <div className='flex font-bold justify-center items-center mt-5 cursor-pointer hover:text-primary'>
              <BsFillCreditCardFill className='bg-black bg-opacity-70 rounded-full text-white p-1 w-8 h-8 mr-2' /><p>Card</p><FaChevronRight className='ml-auto'/>
            </div>
            <div className='flex font-bold justify-center items-center mt-5 cursor-pointer hover:text-primary'>
              <MdElectricBolt className='bg-green-500 rounded-full text-white p-1 w-8 h-8 mr-2' /><p>Electricity</p><FaChevronRight className='ml-auto'/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TransactionHistory;
