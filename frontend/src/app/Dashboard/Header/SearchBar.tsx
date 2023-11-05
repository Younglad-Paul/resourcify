'use client'
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
    const [formData, setFormData] = useState({
        search: ""
      });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    };
  return (
    <div className="form-input rounded-md border-2 border-blue-400 h-9 overflow-hidden">
        <form action={""} className="flex">
      <input
        type="search"
        id="search"
        autoComplete="true"
        placeholder="Search"
        className="form-input mt-[-0.5rem]  ml-[-0.8rem] h-7 "
    />
    <span
        className="cursor-pointer"
    >
        <BsSearch className="w-7 h-5" />
    </span>
      </form>
    </div>
  )
}

export default SearchBar
