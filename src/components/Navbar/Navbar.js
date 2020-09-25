import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Sorting Visualizer
      </a>
      <ul class="navbar-nav">
        <li
          className="nav-item active"
          style={{ color: "white", fontSize: "80%", marginTop: "10%" }}
        >
          - Made with{" "}
          <span role="img" aria-label="">
            ❤️
          </span>{" "}
          by Nitheesh Daram
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
