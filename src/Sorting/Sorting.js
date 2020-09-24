import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Simulator from "../components/Simulator/Simulator";
import Controls from "../components/Controls/Controls";

const Sorting = () => {
  return (
    <div>
      <Navbar />
      <section className="whole_container">
        <Simulator />
        <Controls />
      </section>
    </div>
  );
};

export default Sorting;
