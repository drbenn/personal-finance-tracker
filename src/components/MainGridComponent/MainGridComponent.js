import React from "react";
import "./MainGridComponent.css";
import { Link, Routes, Route } from "react-router-dom";
import DashboardPanel from "../../components/DataViewComponent/DashboardDataViewComponent/DashboardDataViewComponent.js";
import ExpensePanel from "../../components/DataViewComponent/ExpenseDataViewComponent/ExpenseDataViewComponent.js";
import IncomePanel from "../../components/DataViewComponent/IncomeDataViewComponent/IncomeDataViewComponent.js";
import InvestmentPanel from "../../components/DataViewComponent/InvestmentDataViewComponent/InvestmentDataViewComponent.js";

function MainGrid() {
  return (
    <div className="grid">
      <Link to="/dashboard">
        <div className="dashboardGridBlock navBoxFormat">Dashboard</div>
      </Link>
      <Link to="/expense">
        <div className="expenseGridBlock navBoxFormat">Expenses</div>
      </Link>
      <Link to="/income">
        <div className="incomeGridBlock navBoxFormat">Income</div>
      </Link>
      <Link to="/investment">
        <div className="investmentGridBlock navBoxFormat">Investments</div>
      </Link>
      <div className="dataViewGridBlock">
        <Routes>
          <Route path="/" element={<ExpensePanel />} />
          <Route path="/dashboard" element={<DashboardPanel />} />
          <Route path="/expense" element={<ExpensePanel />} />
          <Route path="/income" element={<IncomePanel />} />
          <Route path="/investment" element={<InvestmentPanel />} />
        </Routes>
      </div>
    </div>
  );
}

// function MainGrid() {
//   return (
//     <div className="grid">
//       <Link to="/dashboard">
//         <div className="dashboardGridBlock navBoxFormat">Dashboard</div>
//       </Link>
//       <Link to="/expense">
//         <div className="expenseGridBlock navBoxFormat">Expenses</div>
//       </Link>
//       <Link to="/income">
//         <div className="incomeGridBlock navBoxFormat">Income</div>
//       </Link>
//       <Link to="/investment">
//         <div className="investmentGridBlock navBoxFormat">Investments</div>
//       </Link>
//       <div className="dataViewGridBlock">
//         {" "}
//         <Routes>
//           <Route path="/" element={<MainGrid />} />
//           <Route path="/dashboard" element={<DashboardPanel />} />
//           <Route path="/expense" element={<ExpensePanel />} />
//           <Route path="/income" element={<IncomePanel />} />
//           <Route path="/investment" element={<InvestmentPanel />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

export default MainGrid;
