import React from 'react'
import './Controls.css'
export const Controls = () => {
    return (
        <div className="controls">
        <div className="control">
          <label>Size : </label> <br />
          <input type="range" min="10" max="1000"></input> <br />
          <label>Speed : </label> <br />
          <input type="range" min="100" max="500"></input> <br />
          <select id="cars" name="maincat">
            <option value="">--Select--</option>
            <option value="1">Geotechnical Investigation</option>
            <option value="2">Geophysical Exploration</option>
            <option value="3">Topo Surveys.</option>
            <option value="4">Traffic Surveys</option>
            <option value="5">LiDAR Survey</option>
            <option value="6">Laboratory Testing</option>
            <option value="7">Ground Utility Survey</option>
          </select>
        </div>
      </div>
    )
}

export default Controls;