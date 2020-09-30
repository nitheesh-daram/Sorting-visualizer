import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Simulator from "../components/Simulator/Simulator";
import GithubCorner from "react-github-corner";
const Sorting = () => {
  return (
    <div>
      <Navbar />
      <GithubCorner
        href="https://github.com/nitheesh-daram/Sorting-visualizer"
        bannerColor="#fff"
        octoColor="#000"
        size={80}
        direction="right"
      />
      <section className="whole_container">
        <Simulator />
      </section>
    </div>
  );
};

export default Sorting;
