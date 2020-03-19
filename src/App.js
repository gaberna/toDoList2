import React, { useState } from "react";
import "./App.css";
import Tarea from "./Tarea";
import TareaForm from "./TareaForm";
import Buscar from "./Buscar";

function App() {
  //defino estado de tareas y setTareas con useState([array inicial de tareas])

  const [tareas, setTareas] = useState([
    { text: "Estudiar React", isCompleted: false, filtro: 0 },
    { text: "Limpiar los pisos", isCompleted: true, filtro: 0 },
    { text: "Armar un mate", isCompleted: false, filtro: 0 }
  ]);

  const [filtro, setFiltro] = useState("0");

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

  const valBuscado = value => {
    console.log("app value", value);
  };

  //funcion para cambiar estado de tarea a completada
  const completeTarea = index => {
    const newTareas = [...tareas];
    //debugger;
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
    setTareas(tareas);
  };

  const handleSelect = e => {
    // const selectedOpt = e.target.value;
    // const newTareas = [...tareas];
    // newTareas.map((tarea, index) => (tarea.filtro = selectedOpt));
    // setTareas(newTareas);
    setFiltro(e.target.value);

    debugger;
  };

  //con .map por cada elemento de tareas recorro el array agrego index y se lo paso al component Tarea
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <input
              type="text"
              placeholder="your name to start!"
              onChange={handleInputChange}
            ></input>
            <h1>
              Hello {buddyName}
              <br></br>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  onClick={handleSelect}
                  value="0"
                  type="button"
                  className="btn btn-secondary"
                >
                  Todas
                </button>
                <button
                  onClick={handleSelect}
                  type="button"
                  value="1"
                  className="btn btn-secondary"
                >
                  Pendientes
                </button>
                <button
                  onClick={handleSelect}
                  type="button"
                  value="2"
                  className="btn btn-secondary"
                >
                  Terminadas
                </button>
              </div>
            </h1>
            <div className="tarea-list">
              {tareas
                .filter(
                  tarea =>
                    (!tarea.isCompleted && filtro === "1") ||
                    (tarea.isCompleted && filtro === "2") ||
                    filtro === "0"
                )
                .map((tarea, index) => (
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
          <div className="col">
            <Buscar onChange={valBuscado} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
