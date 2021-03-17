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

  // id name  price mark  photo photo  description

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [mark, setMark] = useState("");
  const [model, setModel] = useState("");
  const [stock, setStock] = useState("");

 

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);

  const handleChangePhoto = (e) => {
    setPhoto(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeMark = (e) => {
    setMark(e.target.value);
  };

  const handleChangeModel = (e) => {
    setModel(e.target.value);
  };


  const handleChangeStock = (e) => {
    setStock(e.target.value);
  };
 
   

  const objeto = { name , description, photo, price, mark, model, stock};
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

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [mark, setMark] = useState("");
  const [model, setModel] = useState("");
  const [stock, setStock] = useState("");

  const [nameValidate, setNameValidate] = useState("inicial");
  const [descriptionValidate, setDescriptionValidate] = useState("inicial");
  const [photoValidate, setPhotoValidate] = useState("inicial");

  const [priceValidate, setPriceValidate] = useState("inicial");
  const [markValidate, setMarkValidate] = useState("inicial");
  const [modelValidate, setValidate] = useState("inicial");
  const [idValidate, setIdValidate] = useState("inicial");

   
  const requeridoId = (e) => {
    let expresion = /[0-9]/;

    if (objeto.name != "" && expresion.test(objeto.name)) {
      setNameValidate("mostrar");
    } else {
      // el input esta vacio
      setNameValidate("nomostrar");
    }
  };
  const requeridoName = (e) => {
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
 