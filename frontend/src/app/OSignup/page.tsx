'use client'
import React, { useState } from 'react';
import { BsEnvelopeAt } from 'react-icons/bs';
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';
import Link from 'next/link';
import OHeader from '../OHeader/page';
import Image from 'next/image';

const OSignup = () => {
  const [formData, setFormData] = useState({
    OName: '',
    OType: '',
    email: '',
    UID: '',
  });

  const [showUID, setShowUID] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleUIDVisibility = () => {
    setShowUID(!showUID);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='bg-white-500 sm:bg-[#F0F8FF] h-100'>
      <OHeader />
      <div className="rounded-lg bg-[#fff] md:w-[50vw] lg:w-[30vw]  mt-[-3vw] lg:mx-[35vw] px-10 py-10 justify-between items-center md:mx-[30vw] sm:mx-[20vw] justify-center">
        <div className="text-center">
        <Image className='my-[-2rem] mx-[-2rem] sm:hidden'
        src="/8.png"
        alt="Logo"
        width={150}
        height={100}
      />
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <p className="text-lg mb-4">Get started today</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="OName" className="text-1.2rem">
              Organization name
            </label>
            <input
              type="text"
              id="OName"
              name="OName"
              value={formData.OName}
              onChange={handleChange}
              className="border-2 border-[#7EC8E3] rounded-lg w-full h-10 p-2 focus:border-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="OType" className="text-1.2rem">
              Organization type
            </label>
            <input
              type="text"
              id="OType"
              name="OType"
              value={formData.OType}
              onChange={handleChange}
              className="border-2 border-[#7EC8E3] rounded-lg w-full h-10 p-2 focus:border-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-1.2rem">
              Work email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-[#7EC8E3] rounded-lg w-full h-10 p-2 focus:border-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="UID" className="text-1.2rem">
              Unique Identification Code
            </label>
            <div className="border-2 border-[#7EC8E3] rounded-lg w-full h-10 p-2 relative">
              <input
                type={showUID ? 'text' : 'password'}
                id="UID"
                name="UID"
                value={formData.UID}
                onChange={handleChange}
                className="w-full h-full p-2 outline-none"
              />
              {showUID ? (
                <IoEyeSharp
                  onClick={toggleUIDVisibility}
                  className="mt-[-1.7rem] ml-[63vw] lg:ml-[21rem] md:ml-[16rem] sm:ml-[15rem] text-[1.5rem] cursor-pointer"
                />
              ) : (
                <IoEyeOffSharp
                  onClick={toggleUIDVisibility}
                  className="mt-[-1.7rem] ml-[63vw] lg:ml-[21rem] md:ml-[16rem] sm:ml-[15rem] text-[1.5rem] cursor-pointer"
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#007FFF] h-10 rounded-lg mt-8 font-bold text-1.2rem transition duration-300 hover:bg-[#0039a6] hover:outline-none hover:outline-offset-2 hover:outline-blue-500"
          >
            Sign up
          </button>
          <p className="text-1rem mb-4 mt-4 text-center">or</p>
          <button
            type="submit"
            className="w-[56vw] md:w-[16rem] h-[13vw] md:h-[3rem] mx-[10vw] md:mx-[4.5rem] text-[.9rem] sm:text-[1rem] text-center px-[1rem] md:px-[2.5rem] lg:px-[2.5rem]  py-2 bg-[#F0F8FF] rounded-lg flex justify-center hover:outline outline-offset-2 outline-blue-500"
          >
            <BsEnvelopeAt className="mr-1 sm:mr-2 text-[1.5rem]" /> Sign up with Mail
          </button>
        </form>
      </div>
      <p className="text-center text-[1rem] mt-4">
        Have an account?
        <Link href="/Signin" className="text-[#007FFF] font-bold ml-2">
          Login
        </Link>
      </p>
    </div>
  );
};

export default OSignup;
