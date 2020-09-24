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
      array.push(randomIntfromRange(10, 500));
    }
    this.setState({ array, comparisions, swaps });
  }

  animate(animations) {
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let index = 0; index < animations.length; index++) {
      let comparison = animations[index].comparision;
      let swap = animations[index].swap;
      setTimeout(() => {
        arrayBars[comparison[1]].style.backgroundColor = "black";
        this.state.comparisions = this.state.comparisions + 1;
        arrayBars[comparison[0]].style.backgroundColor = "black";
        let comp = document.getElementById("comp");
        comp.innerHTML = "Comparisions : " + this.state.comparisions;
      }, index * speed);
      setTimeout(() => {
        let temp = arrayBars[swap[1]].style.height;
        arrayBars[swap[1]].style.height = arrayBars[swap[0]].style.height;
        arrayBars[swap[0]].style.height = temp;
        if (swap[0] !== swap[1]) {
          this.state.swaps = this.state.swaps + 1;
          let comp = document.getElementById("swap");
          comp.innerHTML = "Swaps : " + this.state.swaps;
        }
      }, index * speed);
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName("array-bar");
        arrayBars[comparison[1]].style.backgroundColor = "blueviolet";
        arrayBars[comparison[0]].style.backgroundColor = "blueviolet";
      }, (index + 1) * speed);
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

  render() {
    const array = this.state.array;
    return (
      <>
        <div className="simulator">
          {array.map((e, i) => {
            return (
              <div
                className="array-bar"
                key={i}
                style={{ height: e + "px" }}
              ></div>
            );
          })}
          <br />
          <button className="btn btn-primary" onClick={() => this.resetarray()}>
            Generate New array
          </button>
          <button className="btn btn-primary" onClick={() => this.normalsort()}>
            Normal Sort
          </button>
          <button className="btn btn-primary" onClick={() => this.bubblesort()}>
            bubble Sort
          </button>
          <input
            id="size"
            type="range"
            min="150"
            max="450"
            onChange={() => this.resetarray()}
          ></input>

          <h6 id="comp">Comparisions : {this.state.comparisions}</h6>
          <h6 id="swap">Swaps : {this.state.swaps}</h6>
        </div>
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
