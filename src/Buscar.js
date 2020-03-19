import React, { useState } from "react";

function Buscar({ value }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = e => {
    const value = e.target.value;
    console.log(value);
    setSearchValue(e.target.value);
  };

  return (
    <input
      placeholder="Buscar tarea"
      onChange={handleSearch}
      value={searchValue}
    ></input>
  );
}

export default Buscar;
