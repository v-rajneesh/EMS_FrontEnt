import React from "react";
//
//
//
//
//
//
//
const EmployeeTable = ({ headers, items }) => {
  console.log("hs");
  return (
    <div className="table-wrapper">
      <table className="table table-borderless table-dark">
        <thead>
          <tr>
            {headers.map((head, i) => (
              <th scope="col" key={head + i}>
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={item.employee_id}>
              <td>{item.employee_id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.emailId}</td>
              <td>{item.phoneNum.replace(/\./g, "")}</td>
              <td>{item.job_title}</td>
              <td>{item.manager_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
