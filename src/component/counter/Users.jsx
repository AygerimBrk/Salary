import React, { useState } from "react";

const Users = (props) => {
  return (
    <div className="table">
      <h2>User List</h2>
      <table border={1}>
        <thead className="tr">
          <tr>
            <th>Name</th>
            <th>SurName</th>
            <th>Days</th>
            <th>Salary Per Day</th>
            <th>Count Salary</th>
          </tr>
        </thead>
        <tbody className="tr">
          {props.users.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>
                <input defaultValue={item.days} type="number" />
              </td>
              <td>
                <input defaultValue={item.salaryPerDay} type="number" />
              </td>
              <td>{item.days * item.salaryPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
