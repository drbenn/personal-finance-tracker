import React from "react";

import "./YearComponent.css";

export const Year = (props) => {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <select className="yearSelector">
          <option value="year2020">2020</option>
          <option value="year2021">2021</option>
          <option value="year2022">2022</option>
        </select>
      </form>
    </div>
  );
};

export default Year;
