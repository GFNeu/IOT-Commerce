import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import {createCategory} from "../../state/categoriesAdmin"


const CrearCategoria = () => {
  const dispatch = useDispatch();
  const user= useSelector(state=> state.user)
  const [nombre, setNombre] = useState("");

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };


  const objeto = {statusDescription: nombre};
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    return axios
        .post(`/api/categories/admin/${user.id}`, objeto)
        .then((respuesta) => respuesta.data)
        .then((data) => {
          dispatch(createCategory(data));
          swal("Categoria creada!")
          history.push("/adminPanel/categorias")
          
        })
        .catch(e=> swal("No esta autorizado para realizar la accion") )
  };

  // dispatch(user(objeto)).then((data) => data);

  return (
    <>
    <div>
      {user.isAdmin?
      <div className="row no-gutters wrapper">
        <div className="col-10 col-lg-5">
          <form
            className="shadow-lg"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <h1 className="mb-3">Crear categoria</h1>

            <div className="form-group">
              <label htmlFor="name_field"> Nombre </label>
              <input
                type="name"
                id="name_field"
                name="name"
                onChange={handleChangeNombre}
                className="ml-2"
              />
            </div>
            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
            >
              Confirmar
            </button>
          </form>
        </div>
      </div>
: <h1>Debes ser administrador para ver esta pagina</h1>}
      </div>

    </>
  );
};

export default CrearCategoria;