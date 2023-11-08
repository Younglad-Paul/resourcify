"use client";

import { useEffect, useState } from "react";

const Time = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const month = currentDateTime.toLocaleDateString("en-US", {
    month: "long",
  });
  const year = currentDateTime.getFullYear();
  const date = currentDateTime.getDate();
  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedTime = `${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;

  return (
    <h5 className="text-sm text-gray-600">
      {formattedTime} at {date} <span>{month}</span> {year}
    </h5>
  );
};
export default Time;
