import React, { useState } from "react";
import { editUser } from "../../state/allusers";
import { useDispatch } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const EditarProducto = ({ id }) => {
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

  const handleChangeCorreo = (e) => {
    setCorreo(e.target.value);
  };

  const objeto = { email: correo, name: nombre, lastName: lastName };
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      emailValidate == "mostrar" &&
      nameValidate == "mostrar" &&
      lastNameValidate == "mostrar"
    ) {
      return axios
        .put(`/api/users/${id}`, objeto)
        .then((respuesta) => respuesta.data)
        .then((data) => {
          dispatch(editUser(data));
          swal("Usuario editado!");
          history.push("/adminPanel/usuarios");
        });
    }
  };

  // dispatch(user(objeto)).then((data) => data);

  const [emailValidate, setEmailValidate] = useState("inicial");
  const [nameValidate, setNameValidate] = useState("inicial");
  const [lastNameValidate, setLastNameValidate] = useState("inicial");

  const requeridoEmail = (e) => {
    let expresion = /\w+@\w+\.[a-z]/;
    //     \w (es texto)
    //     \. (es punto)
    if (objeto.email != "" && expresion.test(objeto.email)) {
      setEmailValidate("mostrar");
    } else {
      // el input esta vacio
      setEmailValidate("nomostrar");
    }
  };

  const requeridoName = (e) => {
    let expresion = /[A-Za-z]/;

    if (objeto.name != "" && expresion.test(objeto.name)) {
      setNameValidate("mostrar");
    } else {
      // el input esta vacio
      setNameValidate("nomostrar");
    }
  };
  const requeridoLastName = (e) => {
    let expresion = /[A-Za-z]/;

    if (objeto.lastName != "" && expresion.test(objeto.lastName)) {
      setLastNameValidate("mostrar");
    } else {
      // el input esta vacio
      setLastNameValidate("nomostrar");
    }
  };

  return (
    <>
      <div className="row no-gutters wrapper">
        <div className="col-10 col-lg-5">
          <form
            className="shadow-lg"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <h1 className="mb-3">Editar usuario</h1>

            <div className="form-group">
              <label htmlFor="name_field"> Nombre </label>
              <input
                type="name"
                id="name_field"
                className={` form-control ${
                  nameValidate == "inicial"
                    ? ""
                    : nameValidate == "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                    `}
                name="name"
                onChange={handleChangeNombre}
                onBlur={requeridoName}
              />
              <div className="valid-feedback">Todo bien continúe</div>
              <div className="invalid-feedback">Entre un nombre válido </div>
            </div>
            <div className="form-group">
              <label htmlFor="lastname_field"> Apellido </label>
              <input
                type="lastname"
                id="lastname_field"
                className={` form-control ${
                  lastNameValidate == "inicial"
                    ? ""
                    : lastNameValidate == "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                    `}
                name="lastName"
                onChange={handleChangeApellido}
                onBlur={requeridoLastName}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">Entre un apellido válido </div>
            </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className={` form-control ${
                  emailValidate == "inicial"
                    ? ""
                    : emailValidate == "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                    `}
                name="email"
                onChange={handleChangeCorreo}
                onBlur={requeridoEmail}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">Ingrese un email válido</div>
            </div>

            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarProducto;

// <Form>
//   <Form.Check
//     type="switch"
//     id="custom-switch"
//     label="Check this switch"
//   />
//   <Form.Check
//     disabled
//     type="switch"
//     label="disabled switch"
//     id="disabled-custom-switch"
//   />
// </Form>

// nombre
//       <input onChange={handleChangeNombre} />
//       <br />
//       apellidop
//       <input onChange={handleChangeApellido} />
//       <br />
//       correo
//       <input onChange={handleChangeEmail} />
//       <button type="submit" onClick={handleSubmit}>
//         enviar
//       </button>
