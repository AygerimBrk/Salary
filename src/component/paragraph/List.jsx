import React from "react";

const List = (props) => {
  return (
    <div>
      <h2>List</h2>
      <ul>
        {props.paragraph.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
