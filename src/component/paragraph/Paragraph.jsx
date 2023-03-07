import React, { useState } from "react";

const Paragraph = (props) => {
  let [AddList, setAddList] = useState("");
  function list(e) {
    setAddList(e.target.value);
    console.log(e.target.value);
  }
  function post() {
    let newObj = {
      task: AddList,
      id: Date.now(),
    };
    props.AddPara(newObj);

    setAddList("");
  }

  return (
    <div>
      <h4>Paragraph</h4>
      <input
        type="text"
        placeholder="Paragraph"
        value={AddList}
        onChange={list}
      />
      <button onClick={post}>Send</button>
    </div>
  );
};

export default Paragraph;
