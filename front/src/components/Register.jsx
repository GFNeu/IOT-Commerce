import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../state/user";
import swal from "sweetalert";

const Register = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      emailValidate == "mostrar" &&
      nameValidate == "mostrar" &&
      passwordValidate == "mostrar" &&
      lastNameValidate == "mostrar"
    ) {
      dispatch(register(newUser)).then((data) => {
        if (data.meta.requestStatus === "rejected") {
          return swal("El usuario ya existe");
        } else {
          swal("¡Usuario registrado exitosamente!");
          history.push("/login");
        }
      });
    }
  };

  // validaciones

  const [emailValidate, setEmailValidate] = useState("inicial");
  const [passwordValidate, setPassworsdValidate] = useState("inicial");
  const [nameValidate, setNameValidate] = useState("inicial");
  const [lastNameValidate, setLastNameValidate] = useState("inicial");

  const requeridoEmail = (e) => {
    let expresion = /\w+@\w+\.[a-z]/;
    //     \w (es texto)
    //     \. (es punto)
    if (newUser.email != "" && expresion.test(newUser.email)) {
      setEmailValidate("mostrar");
    } else {
      // el input esta vacio
      setEmailValidate("nomostrar");
    }
  };

  const requeridoPassword = (e) => {
     if (newUser.password != ""  ) {
      setPassworsdValidate("mostrar");
    } else {
      // el input esta vacio
      setPassworsdValidate("nomostrar");
    }
  };
 
  const requeridoName = (e) => {
    let expresion = /[A-Za-z]/;

    if (newUser.name != "" && expresion.test(newUser.name)) {
      setNameValidate("mostrar");
    } else {
      // el input esta vacio
      setNameValidate("nomostrar");
    }
  };
  const requeridoLastName = (e) => {
    let expresion = /[A-Za-z]/;

    if (newUser.lastName != "" && expresion.test(newUser.lastName)) {
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
            <h1 className="mb-3">Register</h1>

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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                onBlur={requeridoEmail}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">Ingrese un email válido</div>
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Contraseña</label>
              <input
                type="password"
                id="password_field"
                className={` form-control ${
                  passwordValidate == "inicial"
                    ? ""
                    : passwordValidate == "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                    `}
                name="password"
                onChange={handleChange}
                onBlur={requeridoPassword}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">Ingrese una contraseña válida</div>
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

export default Register;
