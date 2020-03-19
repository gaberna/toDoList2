import React, { useState } from "react";

//componente TareaForm para manejar la adicion de tareas
export default function TareaForm({ addTarea }) {
  //estado de tarea inicial en vacio para tomar el onChange del input y setear state.
  const [newTarea, setNewTarea] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    if (!newTarea) return;
    addTarea(newTarea);
    setNewTarea("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresá tu tarea...."
          className="input"
          value={newTarea}
          onChange={e => setNewTarea(e.target.value)}
        />
      </form>
    </div>
  );
}
