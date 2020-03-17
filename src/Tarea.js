import React, { useState } from "react";

//defino componente de como renderizar cada Tarea con elemento tarea.text

export default function Tarea({ tarea, completeTarea, index, removeTarea }) {
  const [isMouseOver, setMouseOver] = useState("true");

  const handleMouseHover = () => {
    setMouseOver(false);
    console.log("MOUSED");
  };

  const handleMouseOut = () => {
    setMouseOver(true);
    console.log("MOUSED_Out");
  };

  debugger;
  return (
    <div
      className="tarea"
      style={{
        backgroundColor: isMouseOver ? "darkgrey" : "cornflowerblue",
        textDecoration: tarea.isCompleted ? "line-through" : ""
      }}
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseOut}
    >
      {tarea.text}

      <div>
        <button onClick={() => completeTarea(index)}> Completada!</button>
        <button onClick={() => removeTarea(index)}> Eliminar!</button>
      </div>
    </div>
  );
}
