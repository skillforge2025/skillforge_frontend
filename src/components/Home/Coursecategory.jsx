import React, { useState } from "react";

const Coursecategory = () => {
  const [category, setCategory] = useState([]);
  return (
    <div className="hidden md:flex lf:flex gap-4 text-center bg-black shadow-sm w-full  text-white p-2">
      <h1>It&Secutiy</h1>
      <h1>Backend Devlopment</h1>
      <h1>Data Analytics</h1>
    </div>
  );
};

export default Coursecategory;
