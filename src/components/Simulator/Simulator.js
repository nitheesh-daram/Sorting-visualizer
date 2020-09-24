import React, { Component } from "react";
import "./Simulator.css";
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
    for (let index = 0; index < 100; index++) {
      array.push(randomIntfromRange(1, 500));
    }
    this.setState({ array });
  }

  render() {
    const array = this.state.array;
    return (
      <>
        <div className="simulator">
          {array.map((e, i) => {
            return <div className="array-bar" key={i}>{e}</div>
          })}
        </div>
      </>
    );
  }
}

function randomIntfromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
