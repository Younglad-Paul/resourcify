import React from 'react'

const Nav = () => {
  return (
    <div className='fixed font-bold bg-white bg-opacity-70 w-full h-10 z-10'>
      <ul className='flex'>
      <li className='ml-7 cursor-pointer text-primary'>Overview</li>
        <li className='ml-10 cursor-pointer hover:text-primary'>Expense List</li>
        <li className='ml-10 cursor-pointer hover:text-primary'>Income List</li>
      </ul>
    </div>
  )
}

export default Nav
