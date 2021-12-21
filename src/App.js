import React, { Component } from "react";
import "./App.css";

import Header from "./components/HeaderComponent/HeaderComponent";
import Year from "./components/YearComponent/YearComponent.js";
import Month from "./components/MonthComponent/MonthComponent.js";
import MainGrid from "./components/MainGridComponent/MainGridComponent.js";
import Footer from "./components/FooterComponent/FooterComponent.js";

import { Link, Routes, Route } from "react-router-dom";

// import DashboardPanel from "./components/DataViewComponent/DashboardDataViewComponent/DashboardDataViewComponent.js";
// import ExpensePanel from "./components/DataViewComponent/ExpenseDataViewComponent/ExpenseDataViewComponent.js";
// import IncomePanel from "./components/DataViewComponent/IncomeDataViewComponent/IncomeDataViewComponent.js";
// import InvestmentPanel from "./components/DataViewComponent/InvestmentDataViewComponent/InvestmentDataViewComponent.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yearField: "2021",
      monthField: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ yearField: event.target.value });
    console.log(this.state.yearField);
    // alert("a change was submitted: " + this.state.yearField);
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Year /> */}
        <div>
          <select
            className="yearSelector"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="2020">2020</option>
            <option selected value="2021">
              2021
            </option>
            <option value="2022">2022</option>
          </select>
        </div>
        <Month />
        <MainGrid />

        <Footer />
      </div>
    );
  }
}

export default App;
