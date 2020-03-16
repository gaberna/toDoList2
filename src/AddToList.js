import React, { useState } from "react";

const [value, setValue] = useState("");

function handleChange(evt) {
  console.log("new value", evt.target.value);
  setValue(evt.target.value);
}

export default () => {
  return (
    <form>
      <input
        placeholder="ingrese su tarea"
        onChange={handleChange}
        value={value}
      ></input>
    </form>
  );
};
