import React, { Component } from "react";
import "./Simulator.css";
import normalsort from "../Algos/Algos";
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
    for (let index = 0; index < 150; index++) {
      array.push(randomIntfromRange(10, 500));
    }
    this.setState({ array });
  }

  normalsort(){
  let sorted_array=this.state.array.sort();
  let normal=normalsort(this.state.array);
  if(arraysareequal(sorted_array,normal)){
    console.log("success")
  }
  else{
    console.log("failed")
  }
  }






  render() {
    const array = this.state.array;
    return (
      <>
        <div className="simulator">
          {array.map((e, i) => {
            return (
              <div className="array-bar" key={i} style={{height: e +'px'}} >
              </div>
            );
          })}

          <button className="btn btn-primary" onClick={()=>this.resetarray() } >Generate New array</button>
          <button className="btn btn-primary" onClick={()=>this.normalsort() } >Normal Sort</button>
        </div>
      </>
    );
  }
}

function randomIntfromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function arraysareequal(jssorted,algosorted){
  if(jssorted.length!==algosorted.length) return false;
  for (let index = 0; index < jssorted.length; index++) {
    console.log(jssorted[index],algosorted[index])
    if(jssorted[index]!==algosorted[index]) return false;
  }
  return true;
}