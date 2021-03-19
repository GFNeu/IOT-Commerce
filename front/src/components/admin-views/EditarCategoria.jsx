import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { changeCategory, oneCategory } from "../../state/categoriesAdmin";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getProducts } from "../../state/product";
import "../admin-views/admin.css";

const EditarCategoria = ({ id }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const user= useSelector(state=> state.user)
  const [nombre, setNombre] = useState("");
  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  console.log(id);
  const category = useSelector((state) => state.categoriesAdmin);
  const history = useHistory();
  React.useEffect(() => {
    axios
      .get(`/api/categories/admin/${id}`)
      .then(({ data }) => dispatch(oneCategory(data)))

      .catch((err) => console.log(err));
    dispatch(getProducts());
  }, []);
  const objeto = { statusDescription: nombre };

  console.log(category);

  const submitHandler = (e) => {
    e.preventDefault();
    swal("Cambios guardados!");
    history.push("/adminPanel/categorias");
  };
  console.log(category, user);
  const cambiarNombre = () => {
    return axios
      .put(`/api/categories/admin/${user.id}/${id}`, objeto)
      .then((respuesta) => respuesta.data)
      .then((data) => {
        dispatch(changeCategory(data));
        axios
          .get(`/api/categories/admin/${id}`)
          .then(({ data }) => dispatch(oneCategory(data)));
        swal("Categoria editada!");
      })
      .catch((e) => swal("No esta autorizado para realizar la accion"));
  };

  const removeFromCategory = (userAdmin, categoryId, productId) => {
    return axios
      .delete(`/api/categories/admin/${userAdmin}/${categoryId}/${productId}`)
      .then(() => swal("Removido de la categoria"))
      .then(() => history.go(0))
      .catch((e) => swal("No esta autorizado para realizar la accion"));
  };

  const addToCategory = (userAdmin, categoryId, productId) => {
    return axios
      .post(`/api/categories/admin/${userAdmin}/insert`, {
        category_id: categoryId,
        product_id: productId,
      })
      .then(({ data }) => {
        if (data === "La relacion ya existe") {
          return swal("El producto ya se encuentra en la categoria");
        } else {
          return swal("Agregado a la categoria").then(() => history.go(0));
        }
      })
      .catch((e) => swal("No esta autorizado para realizar la accion"));
  };

  return (
    <>
    <div>
      {user.isAdmin?
      <div className=" ">
        <div className="row no-gutters wrapper px-5">
          <form
            className="shadow-lg"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <div className="form-group">
              <div className="row no-gutters">
                <div className="col-sm-12 col-md-12">
                  <h1 className="mb-3">Editar categoria</h1>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-sm-12 col-md-4 p-4">
                  <label htmlFor="name_field" className="px-3"> Nuevo nombre </label>
                  <input
                  value={nombre}
                    type="name"
                    id="name_field"
                    name="name"
                    onChange={handleChangeNombre}
                  />
                  <Button onClick={() => cambiarNombre()}>
                    Cambiar nombre
                  </Button>
                </div>
              </div>

              <div className="row no-gutters p-2 mb-4">
                <div className="col-sm-12 col-md-12">
                  <h2 className="mt-3 ">Remover productos:</h2>
                </div>
              </div>

              <div className="row no-gutters ">
                {category.length &&
                  category[0] &&
                  category[0].products &&
                  category[0].products.map((product) => {
                    return (  
                      <div className="col-sm-12 col-md-4  p-4">
                        <Card  key={product.id}>
                          <Card.Header as="h5" className="cardCateg">
                            {product.name}
                          </Card.Header>
                          <Card.Title>
                            {" "}
                            <Button
                              onClick={() =>
                                removeFromCategory(
                                  user.id,
                                  category[0].id,
                                  product.id
                                )
                              }
                              className="ml-3 mt-3"
                              variant="warning"
                            >
                              Remover de la categoria
                            </Button>
                          </Card.Title>
                        </Card>
                      </div>
                    );
                  })}
              </div>

              <div className="row no-gutters my-5">
                <div className="col-sm-12 col-md-12">
                  <h2 className="mt-3 ">Agregar productos:</h2>
                </div>
              </div>

              <div className="row no-gutters">
                {products.length
                  ? products.map((product) => {
                      return (
                        <div className="col-sm-12 col-md-4  p-4">

                        <Card   key={product.id}>
                          <Card.Header as="h5" className="cardCateg">
                            {product.name}
                          </Card.Header>
                          <Card.Title>
                            {" "}
                            <Button
                              onClick={() =>
                                addToCategory(
                                  user.id,
                                  category[0].id,
                                  product.id
                                )
                              }
                              className="ml-3 mt-3"
                              variant="warning"
                            >
                              Agregar a la categoria
                            </Button>
                          </Card.Title>
                        </Card>
                        </div>

                      );
                    })
                  : "cargando"}
              </div>
            </div>
            <button id="register_button" className="btn btn-block py-3">
              Confirmar
            </button>
          </form>
        </div>
      </div>
      : <h1 style={{textAlign:'center', marginTop:'15px'}}>Debes ser administrador para ver esta pagina</h1>}
      </div>
    </>
  );
};

export default EditarCategoria;
