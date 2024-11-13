import React from "react";
import Navbar from "../components/Navbar";
import Itempannel from "../components/Itempannel";

const index = () => {
  return (
    <div className="page-section">
      <Navbar menuIdx={2} />
      <Itempannel pageTitle="Incompleted Items" filterCompleted={false} />
    </div>
  );
};

export default index;
