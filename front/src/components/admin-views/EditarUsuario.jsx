import React, { useState } from "react";
import { editUser } from "../../state/allusers";
import { useDispatch } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const EditarUsuario = ({ id }) => {
  const dispatch = useDispatch();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleChangeApellido = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setCorreo(e.target.value);
  };
  const objeto = { email: correo, name: nombre, lastName: lastName };
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    return axios
      .put(`/api/users/${id}`, objeto)
      .then((respuesta) => respuesta.data)
      .then(data => {
        dispatch(editUser(data));
        swal("Usuario editado!");
        history.push("/adminPanel/usuarios/SingleUsuario");
      });
  };

  // dispatch(user(objeto)).then((data) => data);

  return (
    <div>
      nombre
      <input onChange={handleChangeNombre} />
      <br />
      apellidop
      <input onChange={handleChangeApellido} />
      <br />
      correo
      <input onChange={handleChangeEmail} />
      <button type="submit" onClick={handleSubmit}>
        enviar
      </button>
    </div>
  );
};

export default EditarUsuario;
