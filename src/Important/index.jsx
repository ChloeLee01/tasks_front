import React from "react";
import Navbar from "../components/Navbar";
import Itempannel from "../components/Itempannel";

const index = () => {
  return (
    <div className="page-section">
      <Navbar menuIdx={3} />
      <Itempannel
        pageTitle="Important Items"
        filterCompleted="all"
        filterImportant={true}
      />
    </div>
  );
};

export default index;
