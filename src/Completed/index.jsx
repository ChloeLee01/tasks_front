import React from "react";
import Navbar from "../components/Navbar";
import Itempannel from "../components/Itempannel";

const index = () => {
  return (
    <div className="page-section">
      <Navbar menuIdx={1} />
      <Itempannel pageTitle="Completed Items" filterCompleted={true} />
    </div>
  );
};

export default index;
