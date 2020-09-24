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
    };
  }

  componentDidMount() {
    this.resetarray();
  }

  resetarray() {
    const array = [];
    let size=document.getElementById('size');
    for (let index = 0; index < 150; index++) {
      array.push(randomIntfromRange(10, 500));
    }
    this.setState({ array });
  }

  animate(animations) {
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let index = 0; index < animations.length; index++) {
      let comparison = animations[index].comparision;
      let swap = animations[index].swap;
      setTimeout(() => {
        arrayBars[comparison[1]].style.backgroundColor = "red";
        arrayBars[comparison[0]].style.backgroundColor = "red";
      }, index * speed);
      setTimeout(() => {
        let temp = arrayBars[swap[1]].style.height;
        arrayBars[swap[1]].style.height = arrayBars[swap[0]].style.height;
        arrayBars[swap[0]].style.height = temp;
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
          <button className="btn btn-primary" onClick={() => this.resetarray()}>
            Generate New array
          </button>
          <button className="btn btn-primary" onClick={() => this.normalsort()}>
            Normal Sort
          </button>
          <button className="btn btn-primary" onClick={() => this.bubblesort()}>
            bubble Sort
          </button>
          <input type="range" min="10" max="200" onChange={this.resetarray()}></input>
        </div>
      </>
    );
  }
}

function randomIntfromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysareequal(jssorted, algosorted) {
  if (jssorted.length !== algosorted.length) return false;
  for (let index = 0; index < jssorted.length; index++) {
    console.log(jssorted[index], algosorted[index]);
    if (jssorted[index] !== algosorted[index]) return false;
  }
  return true;
}
