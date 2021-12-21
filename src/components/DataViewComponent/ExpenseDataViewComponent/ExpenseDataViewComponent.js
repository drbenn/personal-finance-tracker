import { React, useState } from "react";
import Spreadsheet from "react-spreadsheet";

const ExpensePanel = () => {
  <div>Expense Panel Component</div>;

  const [data, setData] = useState([
    [{ value: "Date" }, { value: "Description" }, { value: "Amount" }],
    [{ value: "12/18/2021" }, { value: "BP - Gas" }, { value: "30.00" }],
    [{ value: "12/18/2021" }, { value: "Groceries" }, { value: "60.00" }],
    [{ value: "12/18/2021" }, { value: "Internet" }, { value: "75.00" }],
    [{ value: "12/18/2021" }, { value: "Five Guys" }, { value: "15.00" }],
  ]);

  return <Spreadsheet data={data} onChange={setData} />;
};

// export const ExpensePanel = () => {
//   return (
//     <div>
//       <div>Expense Panel Component</div>
//       <div>Other</div>
//     </div>
//   );
// };

// function ExpensePanel() {
//   return (
//     <div>
//       <div>Expense Panel Component</div>
//       <div></div>
//     </div>
//   );
// }

export default ExpensePanel;
