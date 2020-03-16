import React, { useState } from "react";

const [mouseOver, setMouseOver] = useState("false");
//defino componente de como renderizar cada Tarea con elemento tarea.text
const handleMouseHover = () => {
  setMouseOver(true);
};

export default function Tarea({ tarea, completeTarea, index, removeTarea }) {
  return (
    <div
      className="tarea"
      onMouseOver={handleMouseHover}
      style={
        ({ textDecoration: tarea.isCompleted ? "line-through" : "" },
        { backgroundColor: mouseOver ? "grey" : "" })
      }
    >
      {tarea.text}
      <div>
        <button onClick={() => completeTarea(index)}> Completada!</button>
        <button onClick={() => removeTarea(index)}> Eliminar!</button>
      </div>
    </div>
  );
}
