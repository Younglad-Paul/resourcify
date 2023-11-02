import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {


  return (
    <div className='hidden sm:flex'>
      <Link 
      href={"/"}>
      <Image className='my-[-2rem] mx-[-2rem] sm:hidden'
        src="/Logo.png"
        alt="Logo"
        width={150}
        height={100}
      />
      </Link>
      <h1 className='text-[2.5rem] text-center mb-10 text-[#007FFF] font-bold sm:mx-[10vw] lg:mx-[34vw] lg:mb-20 md:mx-[20vw] md:my-[2rem]'>Individual</h1>
    </div>
  );
}

export default Header;
