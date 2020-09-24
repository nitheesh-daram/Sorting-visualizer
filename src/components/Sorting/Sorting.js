import React from "react";
import Navbar from "../Navbar/Navbar";
import Simulator from "../Simulator/Simulator";
import Controls from "../Controls/Controls";
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
