import React, { useState } from "react";

const [value, setValue] = useState("");

function handleChange(e) {
  console.log("new value", e.target.value);
  setValue(e.target.value);
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
