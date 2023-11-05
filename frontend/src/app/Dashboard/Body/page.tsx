import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiUpload, HiDownload } from "react-icons/hi";
import { AiOutlineArrowDown, AiOutlineDollar } from "react-icons/ai";
import ChartSection from './Chart/page';
import TransactionHistory from './TransactSection/page';

const Body = () => {
  return (
    
    <div className='w-[85vw] mt-36 ml-56 mb-[4rem] py-5 px-3'>
      <section className='flex'>

        <div className='grid bg-red-100 p-5 rounded-md mr-5 w-[15.6rem] h-[8.5rem] border-2 border-red-100 hover:border-red-300'>
        <div className='flex mb-2'>
            <div className='mr-16'>
            <div className='flex bg-red-500 w-10 h-9 text-white rounded-full mb-2 p-2 justify-center items-center'>
                <HiUpload />
            </div>
            <div className='text-[.9rem] w-[7rem]'>
                Spend
            </div>
            </div>
            <div>
            <BsThreeDotsVertical className='w-6 h-10 cursor-pointer' />
            </div>
            </div>
            <div className='flex'>
                <div className='mr-16'>
                    <p>Nxx,xxx</p>
                </div>
                <div className='flex justify-items-end justify-end'>
                    <AiOutlineArrowDown className='bg-red-300 rounded-full w-5 h-5 p-1 mr-1' />
                <p>Nxx.x%</p>
                </div>
            </div>
        </div>

        <div className='grid bg-green-100 p-5 rounded-md mr-5 w-[15.6rem] h-[8.5rem] border-2 border-green-100 hover:border-green-300'>
        <div className='flex mb-2'>
            <div className='mr-16'>
            <div className='flex bg-green-500 w-10 h-9 text-white rounded-full mb-2 p-2 justify-center items-center'>
                <HiDownload />
            </div>
            <div className='text-[.9rem] w-[7rem]'>
                Income
            </div>
            </div>
            <div>
            <BsThreeDotsVertical className='w-6 h-10 cursor-pointer' />
            </div>
            </div>
            <div className='flex'>
                <div className='mr-16'>
                    <p>Nxx,xxx</p>
                </div>
                <div className='flex justify-items-end justify-end'>
                    <AiOutlineArrowDown className='bg-green-300 rounded-full w-5 h-5 p-1 mr-1' />
                <p>Nxx.x%</p>
                </div>
            </div>
        </div>

        <div className='grid bg-red-100 p-5 rounded-md mr-5 w-[15.5rem] h-[8.6rem] border-2 border-red-100 hover:border-red-300'>
        <div className='flex mb-2'>
            <div className='mr-16'>
            <div className='flex bg-red-500 w-10 h-9 text-white rounded-full mb-2 p-2 justify-center items-center'>
                <HiUpload />
            </div>
            <div className='text-[.9rem] w-[7rem]'>
                Total Debtited
            </div>
            </div>
            <div>
            <BsThreeDotsVertical className='w-6 h-10 cursor-pointer' />
            </div>
            </div>
            <div className='flex'>
                <div className='mr-16'>
                    <p>Nxx,xxx</p>
                </div>
            </div>
        </div>

        <div className='grid bg-green-100 p-5 rounded-md mr-5 w-[15.6rem] h-[8.5rem] border-2 border-green-100 hover:border-green-300'>
        <div className='flex mb-2'>
            <div className='mr-16'>
            <div className='flex bg-green-500 w-10 h-9 text-white rounded-full mb-2 p-2 justify-center items-center'>
                <HiDownload />
            </div>
            <div className='text-[.9rem] w-[7rem]'>
                Total Credited
            </div>
            </div>
            <div>
            <BsThreeDotsVertical className='w-6 h-10 cursor-pointer' />
            </div>
            </div>
            <div className='flex'>
                <div className='mr-16'>
                    <p>Nxx,xxx</p>
                </div>
            </div>
        </div>   

        <div className='grid bg-blue-950 text-white p-5 rounded-md mr-5 w-[15.6rem] h-[8.5rem] border-2 border-blue-950 hover:border-blue-300'>
        <div className='flex mb-2'>
            <div className='mr-16'>
            <div className='flex  w-10 h-9 text-white mb-2  justify-center items-center'>
             <AiOutlineDollar className='w-20 h-10' />
            </div>
            <div className='text-[.9rem] w-[7rem]'>
                Transactions
            </div>
            </div>
            <div>
            <BsThreeDotsVertical className='w-6 h-10 cursor-pointer' />
            </div>
            </div>
            <div className='flex'>
                <div className='mr-16'>
                    <p>Nxx,xxx</p>
                </div>
            </div>
        </div>        
      </section>
      <section >
        <ChartSection />
      </section>
      <section>
        <TransactionHistory />
      </section>
    </div>
  )
}

export default Body 
