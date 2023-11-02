'use client'
import React, { useState } from 'react';
import { BsEnvelopeAt } from 'react-icons/bs';
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';
import Link from 'next/link';
import Header from '../Header/page';
import Image from 'next/image';

const Signin = () => {

  const [formData, setFormData] = useState({
    email: '',
    workID: '',
    password: '',
  });

  const [showWorkID, setShowWorkID] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='bg-white-500 sm:bg-[#F0F8FF] h-[100vh]'>
      <Header />
      <div className="rounded-lg bg-[#fff] md:w-[50vw] lg:w-[30vw]  mt-[-3vw] lg:mx-[35vw] px-10 py-10 justify-between items-center md:mx-[30vw] sm:mx-[20vw] justify-center">
        <div className="text-center">
        <Image className='my-[-2rem] mx-[-2rem] sm:hidden'
        src="/Logo.png"
        alt="Logo"
        width={150}
        height={100}
      />
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
            <label htmlFor="workID">Work ID</label>
            <div className="border-2 border-[#7EC8E3] rounded-lg w-full h-10 p-2 overflow-hidden">
              <input
                className="w-[13rem] md:w-[19rem]  h-6  outline-none"
                type={showWorkID ? 'text' : 'password'}
                id="workID"
                name="workID"
                value={formData.workID}
                onChange={handleChange}
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

          <div className="text-[1.2rem] mb-3">
            <label htmlFor="password">Password</label>
            <div className="border-2 border-[#7EC8E3] rounded-lg w-full h-10 p-2 overflow-hidden">
              <input
              className="w-[13rem] md:w-[19rem]  h-6  outline-none"
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {showPassword ? (
                <IoEyeSharp
                  onClick={togglePasswordVisibility}
                  className="mt-[-1.7rem] ml-[63vw] lg:ml-[21rem] md:ml-[16rem] sm:ml-[15rem] text-[1.5rem] cursor-pointer"
                />
              ) : (
                <IoEyeOffSharp
                  onClick={togglePasswordVisibility}
                  className="mt-[-1.7rem] ml-[63vw] lg:ml-[21rem] md:ml-[16rem] sm:ml-[15rem] text-[1.5rem] cursor-pointer"
                />
              )}
            </div>
          </div>


          <button
            type="submit"
            className="w-full bg-[#007FFF] h-10 rounded-lg mt-8 font-bold text-[1.2rem] transition duration-0 hover:duration-300 hover:bg-[#0039a6] hover:outline outline-offset-2 outline-blue-500"
          >
            Sign in
          </button>
          <p className="text-[1rem] mb-4 mt-4 text-center">or</p>
          <button
            type="submit"
            className="w-[56vw] md:w-[16rem] h-[13vw] md:h-[3rem] mx-[10vw] md:mx-[4.5rem] text-[.9rem] sm:text-[1rem] text-center px-[1rem] md:px-[2.5rem] lg:px-[2.5rem]  py-2 bg-[#F0F8FF] rounded-lg flex justify-center hover:outline outline-offset-2 outline-blue-500"
          >
            <BsEnvelopeAt className="mr-1 sm:mr-2 text-[1.5rem]" /> Sign in with Mail
          </button>
        </form>
      </div>
      <p className="text-center text-[1rem] mt-4">
        Don't have an account?
        <Link href="/Signup" className="text-[#007FFF] font-bold ml-2">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Signin;
