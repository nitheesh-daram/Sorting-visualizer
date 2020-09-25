import React, { Component } from "react";
import "./Simulator.css";
import { normalsort } from "../Algos/Algos";
import { bubblesort } from "../Algos/Algos";

// Animation speed
let speed = 1;

export default class Simulator extends Component {
  constructor(props) {
    super();
    this.state = {
      array: [],
      comparisions: 0,
      swaps: 0,
    };
  }

  componentDidMount() {
    this.resetarray();
  }

  resetarray() {
    const array = [];
    const comparisions = 0;
    const swaps = 0;
    // Array size
    let size = document.getElementById("size").value;
    for (let index = 0; index < size; index++) {
      array.push(randomIntfromRange(10, 400));
    }
    this.setState({ array, comparisions, swaps });
  }

  animate(animations) {
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let index = 0; index < animations.length; index++) {
      let comparison = animations[index].comparision;
      let swap = animations[index].swap;
      setTimeout(() => {
        arrayBars[comparison[1]].style.backgroundColor = "orange";
        arrayBars[comparison[0]].style.backgroundColor = "red";
        let comp = document.getElementById("comp");
        this.state.comparisions = this.state.comparisions + 1;
        comp.innerHTML = "Comparisions : " + this.state.comparisions;
      }, speed);
      setTimeout(() => {
        let temp = arrayBars[swap[1]].style.height;
        arrayBars[swap[1]].style.height = arrayBars[swap[0]].style.height;
        arrayBars[swap[0]].style.height = temp;
        if (swap[0] !== swap[1]) {
          this.state.swaps = this.state.swaps + 1;
          let comp = document.getElementById("swap");
          comp.innerHTML = "Swaps : " + this.state.swaps;
        }
      }, speed);
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName("array-bar");
        arrayBars[comparison[1]].style.backgroundColor = "blueviolet";
        arrayBars[comparison[0]].style.backgroundColor = "blueviolet";
      }, speed);
    }
  }

  normalsort() {
    const animations = normalsort(this.state.array);
    this.animate(animations);
  }
  bubblesort() {
    const animations = bubblesort(this.state.array);
    this.animate(animations);
  }

  start() {
    const algo = document.getElementById("algo").value;
    console.log(algo);
    if (algo === "1") {
      this.normalsort();
    } else if (algo === "2") {
      this.bubblesort();
    } else {
      alert("select algo!");
    }
  }
  render() {
    const array = this.state.array;
    let f = 100 / array.length;
    return (
      <>
        <section className="whole_container">
          <div className="simulator">
            <div className="array-box">
              {array.map((e, i) => {
                return (
                  <div
                    className="array-bar"
                    key={i}
                    style={{ height: e + "px", width: f + "%" }}
                  ></div>
                );
              })}
            </div>
          </div>

          <div className="controls">
            <br />
            <button
              className="btn btn-primary"
              onClick={() => this.resetarray()}
            >
              Generate New array
            </button>{" "}
            <br />
            <label>Select Sorting Algorithm : </label> <span></span>
            <select id="algo" name="algo" classname="">
              <option value="">--Select--</option>
              <option value="1">Naive Sort</option>
              <option value="2">Bubble Sort</option>
            </select>
            <br />
            <label>Adjust Size : </label> <span></span>
            <input
              id="size"
              type="range"
              min="50"
              max="200"
              defaultValue="100"
              onChange={() => this.resetarray()}
            ></input>
            <h6 id="arraySize">Size : {this.state.array.length}</h6>
            <button className="btn btn-primary" onClick={() => this.start()}>
              Start
            </button>
            <h6 id="comp">Comparisions : {this.state.comparisions}</h6>
            <h6 id="swap">Swaps : {this.state.swaps}</h6>
          </div>
        </section>
      </>
    );
  }
}

function randomIntfromRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function arraysareequal(jssorted, algosorted) {
  if (jssorted.length !== algosorted.length) return false;
  for (let index = 0; index < jssorted.length; index++) {
    console.log(jssorted[index], algosorted[index]);
    if (jssorted[index] !== algosorted[index]) return false;
  }
  return true;
}
