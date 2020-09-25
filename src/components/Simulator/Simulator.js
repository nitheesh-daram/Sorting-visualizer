import React, { Component } from "react";
import "./Simulator.css";
import { normalsort } from "../Algos/Algos";
import { bubblesort } from "../Algos/Algos";
import { mergesort } from "../Algos/Algos";
// Animation speed
let speed = 10;

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
        // eslint-disable-next-line
        this.state.comparisions = this.state.comparisions + 1;
        comp.innerHTML = "Comparisions : " + this.state.comparisions;
      }, index * speed);
      setTimeout(() => {
        let temp = arrayBars[swap[1]].style.height;
        arrayBars[swap[1]].style.height = arrayBars[swap[0]].style.height;
        arrayBars[swap[0]].style.height = temp;
        if (swap[0] !== swap[1]) {
          // eslint-disable-next-line
          this.state.swaps = this.state.swaps + 1;
          let comp = document.getElementById("swap");
          comp.innerHTML = "Swaps : " + this.state.swaps;
        }
      }, index * speed);
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName("array-bar");
        arrayBars[comparison[1]].style.backgroundColor = "blueviolet";
        arrayBars[comparison[0]].style.backgroundColor = "blueviolet";
      }, index * speed);
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

  mergesort() {
    const animations = mergesort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "blueviolet";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          let comp = document.getElementById("comp");
          // eslint-disable-next-line
          this.state.comparisions = this.state.comparisions + 1;
          comp.innerHTML = "Comparisions : " + this.state.comparisions;
        }, i * speed);
      } else {
        setTimeout(() => {
          // eslint-disable-next-line
          this.state.swaps = this.state.swaps + 1;
          let comp = document.getElementById("swap");
          comp.innerHTML = "Swaps : " + this.state.swaps;
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * speed);
      }
    }
  }

  start() {
    const algo = document.getElementById("algo").value;
    if (algo === "1") {
      this.normalsort();
    } else if (algo === "2") {
      this.bubblesort();
    } else if (algo === "3") {
      this.mergesort();
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
            <label>Sorting Algorithm : </label> <span></span>
            <select id="algo" name="algo" defaultValue="3">
              <option value="1">Naive Sort</option>
              <option value="2">Bubble Sort</option>
              <option value="3">Merge Sort</option>
            </select>
            <br />
            <label>Adjust Size : </label> <span></span>
            <input
              id="size"
              type="range"
              min="100"
              max="800"
              defaultValue="150"
              onChange={() => this.resetarray()}
            ></input>
            <h6 id="arraySize">Size : {this.state.array.length}</h6>
            <button className="btn btn-success" onClick={() => this.start()}>
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
// eslint-disable-next-line
function arraysareequal(jssorted, algosorted) {
  if (jssorted.length !== algosorted.length) return false;
  for (let index = 0; index < jssorted.length; index++) {
    if (jssorted[index] !== algosorted[index]) return false;
  }
  return true;
}
