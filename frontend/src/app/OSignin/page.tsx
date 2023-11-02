'use client'
import React, { useState } from 'react';
import { BsEnvelopeAt } from 'react-icons/bs';
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';
import Link from 'next/link';
import OHeader from '../OHeader/page';
import Image from 'next/image';

const OSignin = () => {
  const [formData, setFormData] = useState({
    email: '',
    workID: '',
  });

  const [showWorkID, setShowWorkID] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleWorkIDVisibility = () => {
    setShowWorkID(!showWorkID);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='bg-white-500 sm:bg-[#F0F8FF] h-[100vh]'>
        <Link 
      href={"/"}>
      <OHeader />
      </Link>
      <div className="rounded-lg bg-[#fff] md:w-[50vw] lg:w-[30vw]  mt-[-3vw] lg:mx-[35vw] px-10 py-10 justify-between items-center md:mx-[30vw] sm:mx-[20vw] justify-center">
        <div className="text-center">
        <Link 
      href={"/"}>
      <Image className='my-[-2rem] mx-[-2rem] sm:hidden'
        src="/Logo.png"
        alt="Logo"
        width={150}
        height={100}
      />
      </Link>
         <h2 className="text-[1.6rem] font-extrabold">Sign In</h2>
          <p className="text-[1rem] mb-8">Welcome back and good to have you once again</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-[1.2rem] mb-3">
            <label htmlFor="email">Email</label>
            <input
              className="border-2 border-[#7EC8E3] rounded-lg w-full h-10 p-2 focus:border-none"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="text-[1.2rem] md:text-[1.1rem] mb-5">
            <label htmlFor="workID" className="text-1.2rem">
              Unique Identification Code
            </label>
            <div className="border-2 border-[#7EC8E3] rounded-lg w-full h-10 p-2 overflow-hidden">
              <input
                type={showWorkID ? 'text' : 'password'}
                id="workID"
                name="workID"
                value={formData.workID}
                onChange={handleChange}
                className="w-[13rem] md:w-[19rem]  h-6  outline-none"
              />
              {showWorkID ? (
                <IoEyeSharp
                  onClick={toggleWorkIDVisibility}
                  className="mt-[-1.7rem] ml-[63vw] lg:ml-[21rem] md:ml-[16rem] sm:ml-[15rem] text-[1.5rem] cursor-pointer"
                />
              ) : (
                <IoEyeOffSharp
                  onClick={toggleWorkIDVisibility}
                  className="mt-[-1.7rem] ml-[63vw] lg:ml-[21rem] md:ml-[16rem] sm:ml-[15rem] text-[1.5rem] cursor-pointer"
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#007FFF] h-10 rounded-lg mt-8 font-bold text-[1.2rem] transition duration-0 hover:duration-300 hover:bg-[#0039a6] hover:outline outline-offset-2 outline-blue-500"
          >
            Login
          </button>
        </form>
      </div>
      <p className="text-center text-[1rem] mt-4">
        Don't have an account?
        <Link href="/OSignup" className="text-[#007FFF] font-bold ml-2">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default OSignin;