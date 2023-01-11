import "./App.css";
import { useState } from "react";

function App() {
  const [arreglo, setArreglo] = useState([]);
  console.log(arreglo);

  const addElement = () => {
    setArreglo([
      ...arreglo,
      { estado: "Activo", Nombre: "Fabian", Email: "fdad@gmail.com", Tipo: "admin" },
    ]);
  };
  return (
    <div className="App">
      <ol></ol>
      <button onClick={addElement}>Agregar</button>

      <table>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Usuario</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {arreglo.map((item) => {
            return (
              <tr>
                <td>{item.estado}</td>
                <td>{item.Nombre}</td>
                <td>{item.Email}</td>
                <td>{item.Tipo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
