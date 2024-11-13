import React from "react";
import Navbar from "../components/Navbar";
import Itempannel from "../components/Itempannel";



const index = () => {
  return (
    <div className="page-section">
      <Navbar menuIdx={0}/>
      <Itempannel pageTitle="All Items" filterCompleted="all" />
    </div>
  );
};

export default index;
