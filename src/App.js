import React, { useState } from "react";
import "./App.css";
import Tarea from "./Tarea";
import TareaForm from "./TareaForm";
import cars from "./data.js";

function App() {
  //defino estado de tareas y setTareas con useState([array inicial de tareas])
  const [tareas, setTareas] = useState([
    { text: "Estudiar React", isCompleted: false },
    { text: "Limpiar los pisos", isCompleted: false },
    { text: "Armar un mate", isCompleted: false }
  ]);

  const [buddyName, setBuddyName] = useState("");

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  //funcion para agregar tareas que se pasa a TareaForm
  const addTarea = (text, isCompleted) => {
    const newTareas = [{ text, isCompleted: false }, ...tareas];
    setTareas(newTareas);
  };

  //funcion para cambiar estado de tarea a completada
  const completeTarea = index => {
    const newTareas = [...tareas];
    debugger;
    newTareas[index].isCompleted = true;
    setTareas(newTareas);
  };

  //funcion para remover tareas de la lista// splice(indextarea, cantidadDetareasaRemover)
  const removeTarea = index => {
    const newTareas = [...tareas];
    newTareas.splice(index, 1);
    setTareas(newTareas);
  };

  const handleInputChange = e => {
    setBuddyName(e.target.value);
  };

  //con .map por cada elemento de tareas recorro el array agrego index y se lo paso al component Tarea
  return (
    <div className="app">
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <input
              type="text"
              placeholder="your name to start!"
              onChange={handleInputChange}
            ></input>
            <h1>
              Hello {buddyName}
              <br></br>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">
                  Left
                </button>
                <button type="button" class="btn btn-secondary">
                  Middle
                </button>
                <button type="button" class="btn btn-secondary">
                  Right
                </button>
              </div>
            </h1>
            <div className="tarea-list">
              {tareas.map((tarea, index) => (
                <Tarea
                  key={index}
                  index={index}
                  tarea={tarea}
                  completeTarea={completeTarea}
                  removeTarea={removeTarea}
                />
              ))}
            </div>
            <br></br>
            <TareaForm addTarea={addTarea} />
            <br></br>
            <div className="time">
              <button onClick={updateTime}>Refresh TIME</button>
              {time}
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
