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

function Formulario(Props) {
  function handleClickClose() {
    Props.onClose();
  }

  const [Usuario, changeUsser] = useState({
    Estado: "",
    Usuario: "",
    Email: "",
    Tipo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    changeUsser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function AggUser() {
    Props.Agguser(Usuario);
  }
  return (
    <Dialog open={Props.open}>
      <DialogTitle>Datos Personales</DialogTitle>

      <DialogContent>
        <TextField
          name="Estado"
          label="Estado"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          name="Usuario"
          label="Usuario"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          name="Email"
          label="Email"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          name="Tipo"
          label="Tipo"
          variant="standard"
          onChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={AggUser}>Agregar</Button>
      </DialogActions>

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
  const addElement = (User) => {
    setArreglo([...arreglo, User]);
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
                <td>{item.Estado}</td>
                <td>{item.Usuario}</td>
                <td>{item.Email}</td>
                <td>{item.Tipo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Formulario
        open={open}
        onClose={handleClickClose}
        Agguser={addElement}
      ></Formulario>
    </div>
  );
}

export default App;
