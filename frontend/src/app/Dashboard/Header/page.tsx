import React from 'react'
import SearchBar from './SearchBar'
import { AiOutlineUser, AiOutlineBell, AiOutlineQuestion } from "react-icons/ai";

const Header = () => {
  return (
    <div className='flex bg-white w-[100vw] ml-56 py-5 px-3 z-10 fixed'>
      <section className='cursor-default'>
      <h2 className='text-[1.1rem] text-primary font-bold  '>
        Dashboard
      </h2>
      <p className='text-[.7rem]'>xx:xxAM xx xxxx xxxx</p>
      </section>

      <div className='grid justify-items-end w-[75vw] '> 
      <div className='flex'>
      <section className='mr-5'>
        <SearchBar />
      </section>
      <section className='bg-blue-500 text-white rounded-md mt-1 px-2 py-1 mr-2 h-8  cursor-default'>
        $xxxx.xx
      </section>
      <section className='bg-blue-950 text-white rounded-md mt-1 px-2 py-1 mr-10 h-8 cursor-default'>
        $xxxx.xx
      </section>
      <section className='flex text-white'>
        <div className='bg-blue-500 rounded-full mt-1 px-2 py-1 mr-5 h-8 cursor-pointer hover:bg-blue-900'>
        <AiOutlineBell className="w-4 h-6"/>
        </div>
        <div className='bg-blue-500 rounded-full mt-1 px-2 py-1 mr-10 h-8 cursor-pointer hover:text-red-500'>
        <AiOutlineQuestion className="w-4 h-6"/>
        </div>
      </section>
      <section>
        <div className='rounded-full  border-2 border-blue-400 '>
        <AiOutlineUser className='w-10 h-10' />
        </div>
      </section>
      </div>
      </div>
    </div>
  )
}

export default Header
