import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Simulator from "../components/Simulator/Simulator";
import Github from "../components/Github/Github";
const Sorting = () => {
  return (
    <div>
      <Navbar />
      <Github/>
      <section className="whole_container">
        <Simulator />
      </section>
    </div>
  );
};

export default Sorting;
