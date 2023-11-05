import React from 'react';

const Nav = () => {
  return (
    <div className='fixed w-[85vw] bg-white bg-opacity-70 mt-16 ml-56 py-5 px-3 font-bold z-10'>
      <nav className='flex justify-between'>
        <ul className='flex mt-1'>
          <li className='pr-10 cursor-pointer hover:text-primary'>Overview</li>
          <li className='pr-10 cursor-pointer hover:text-primary'>Expense List</li>
          <li className='cursor-pointer hover:text-primary'>Income List</li>
        </ul>
        <div className='bg-blue-950 text-white rounded-md px-2 py-1 mr-5 h-8 cursor-default'>
          $xxxx.xx
        </div>
      </nav>
    </div>
  );
};

export default Nav;
