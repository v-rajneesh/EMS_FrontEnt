import React, { useEffect, useState } from "react";
import EmployeeTable from "./EmployeeTable";
import { getEmployees } from "../services/EmployeeService";
//
//
//
//
//
//
//
const EmployeeList = () => {
  const [employees, setEmployees] = useState();
  const [filteredEmployees, setFEmployees] = useState([]);
  const [isRenderes, setRendered] = useState(false);
  const [job_titles, setJobs] = useState([]);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getEmployees()
        .then(res => {
          if (res.data.statusCode == 200) {
            setEmployees(res.data.employees);
            setFEmployees(res.data.employees);
            setRendered(true);
          } else {
            console.log("error");
          }
        })
        .catch(err => console.log(err));
    }
    return () => {
      mounted = false;
    };
  }, []);

  const populateJobs = () => {
    if (isRenderes) {
      var jobs = {};
      var i = 0;
      for (i = 0; i < employees.length; i++) {
        const j = { [employees[i].job_title]: true };
        jobs = { ...jobs, ...j };
      }
      setJobs(Object.keys(jobs));
    }
  };

  useEffect(() => {
    populateJobs();
  }, [isRenderes]);

  const header_values = [
    "employee_id",
    "firstName",
    "lastName",
    "emailId",
    "phoneNum",
    "job_title",
    "manager_name"
  ];

  const headers = [
    "Employee ID",
    "First Name",
    "Last Name",
    "emailID",
    "Phone Num.",
    "Job_title",
    "Manager_name"
  ];

  const filterEmp = e => {
    const job_title = e.target.value;
    let emp = employees;
    if (job_title === "--option--") {
      setFEmployees(employees);
    } else {
      emp = emp.filter(em => em.job_title === job_title);
      setFEmployees(emp);
    }
  };

  return (
    <div>
      <div className="wrapper filter">
        <h3>Filter By</h3>
        <div>
          <i>
            Job Title:
            <select name="employees" onChange={filterEmp}>
              <option>--option--</option>
              {job_titles.map((jobs, i) => (
                <option value={jobs} key={i}>
                  {jobs}
                </option>
              ))}
            </select>
          </i>
        </div>
      </div>
      {isRenderes && (
        <EmployeeTable
          headers={headers}
          items={filteredEmployees}
          header_values={header_values}
        />
      )}
    </div>
  );
};

export default EmployeeList;
