import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../../public/images/logo - Copy.png"
import { FaChevronRight } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineCloudUpload, AiOutlineTransaction, AiOutlineWifi } from "react-icons/ai";
import { BiPieChartAlt2 } from "react-icons/bi";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { PiSignOutBold } from "react-icons/pi";

const SideBar = () => {
  return (
    <div className='fixed bg-white border-r-2 border-indigo-10 w-56 h-[100vh] '>
      <Link href={"/"}>
      <h2 className='flex text-[1.3rem] text-primary font-bold  border-b-2 py-5 px-3'>
        <Image
        src={logo}
        alt={'Logo'}
        width={50}
        height={50}
        className='mr-5'
        priority
        />
        Resourcify</h2>
        </Link>
      <nav className='grid px-3  '>
        <section className='mb-20'>
        <div className='flex bg-indigo-50 rounded-md p-1 mt-3 border-2 border-indigo-50 cursor-pointer hover:bg-indigo-100 hover:border-2 hover:border-green-400'>
            <BsBank className='text-[2rem] mt-2 mr-3 bg-blue-500 rounded-full p-1'/>
            <div>
            <p className='font-bold text-[.9rem]'>Account Number</p>
            <p className='text-[.9rem] text-200 font-bold'>xxxxxxxxxxxx</p>
            </div>
        </div>
        <div className='flex font-bold bg-yellow-50 rounded-md p-1 mt-3 border-2 border-yellow-50 cursor-pointer hover:bg-yellow-100 hover:border-2 hover:border-green-400'>
            <AiOutlineCloudUpload className='text-[2rem] mt-2 mr-3 bg-yellow-500 rounded-full p-1'/>
            <div>
            <p className='font-bold text-[.9rem]'>Upload</p>
            <p className='text-[.6rem] text-red-500 font-bold'>Upload CSV, PDF and Excel</p>
        </div>
        </div>
        </section>
        <section className='font-bold mb-10'>
          <div className=' flex mb-5 cursor-pointer hover:text-primary'><LuLayoutDashboard className='text-[1.5rem] mr-2 p-1' /><p className='hover:mr-5'>Dashboard</p> <FaChevronRight className='pt-2'/></div>
          <div className=' flex mb-5 cursor-pointer hover:text-primary'><BsBank className='text-[1.5rem] mr-2 p-1'/><p className='hover:mr-5'>Bank Account</p> <FaChevronRight className='pt-2'/></div>
          <div className=' flex mb-5 cursor-pointer hover:text-primary'><AiOutlineTransaction className='text-[1.5rem] mr-2 p-1' /><p className='hover:mr-5'>Transactions</p> <FaChevronRight className='pt-2'/></div>
          <div className=' flex mb-5 cursor-pointer hover:text-primary'><AiOutlineWifi className='text-[1.5rem] mr-2 p-1' /><p className='hover:mr-5'>Set Goals</p> <FaChevronRight className='pt-2'/></div>
          <div className=' flex mb-5 cursor-pointer hover:text-primary'><BiPieChartAlt2 className='text-[1.5rem] mr-2 p-1' /><p className='hover:mr-5'>Analytics</p> <FaChevronRight className='pt-2'/></div>
          <div className=' flex mb-5 cursor-pointer hover:text-primary'><FiSettings className='text-[1.5rem] mr-2 p-1' /><p className='hover:mr-5'>Settings</p> <FaChevronRight className='pt-2'/></div>
        </section>
        <section className='font-bold'>
        <div className=' flex mb-5 cursor-pointer hover:text-primary'><PiSignOutBold className='text-[1.5rem] mr-2 p-1' /><p className='hover:mr-5'>Sign Out</p></div>
        <div className=' flex mb-5 cursor-pointer hover:text-primary'><FiHelpCircle className='text-[1.5rem] mr-2 p-1' /><p className='hover:mr-5'>Help</p></div>
        </section>
      </nav>
    </div>
  )
}

export default SideBar
