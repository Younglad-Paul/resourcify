import React from 'react'

const Footer = () => {
  return (
    <div className='fixed w-[84vw] bg-white mt-[-43rem] py-5 ml-[15vw] z-0 px-3 '>
        <ul className='flex justify-end font-bold'>
            <li className='cursor-pointer hover:text-primary'>About Us</li>
            <li className='ml-5 cursor-pointer hover:text-primary'>Contact Us</li>
            <li className='ml-5 mr-2 cursor-pointer hover:text-primary'>Term & Conditions</li>
        </ul>
    </div>
  )
}

export default Footer
