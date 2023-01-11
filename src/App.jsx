import "./App.css";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

function Formulario(Props) {
  function handleClickClose() {
    Props.onClose();
  }
  return (
    <Dialog open={Props.open}>
      <DialogTitle>Datos Personales</DialogTitle>

      <DialogContent>
        <TextField label="Estado" variant="standard" />
        <TextField label="Usuario" variant="standard" />
        <TextField label="E-mail" variant="standard" />
        <TextField label="Tipo" variant="standard" />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClickClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [arreglo, setArreglo] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const addElement = () => {
    setArreglo([
      ...arreglo,
      {
        estado: "Activo",
        Nombre: "Fabian",
        Email: "fdad@gmail.com",
        Tipo: "admin",
      },
    ]);
  };

  function handleClickClose() {
    setOpen(false);
  }

  return (
    <div className="App">
      <Button onClick={handleClickOpen}>Agregar</Button>

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
      <Formulario open={open} onClose={handleClickClose}></Formulario>
    </div>
  );
}

export default App;
