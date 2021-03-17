import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import {changeCategory, oneCategory} from "../../state/categoriesAdmin"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {getProducts} from "../../state/product"

const EditarCategoria = ({ id }) => {
  const dispatch = useDispatch();
  const products= useSelector(state=> state.product)
  const [nombre, setNombre] = useState("");
  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  console.log(id)
  const category= useSelector(state=> state.categoriesAdmin)
  const history = useHistory();
React.useEffect(()=>{
  axios
      .get(`/api/categories/admin/${id}`)
      .then(({ data }) => dispatch(oneCategory(data)))

      .catch((err) => console.log(err));
  dispatch(getProducts())
}, [])
  const objeto = { statusDescription: nombre};


  console.log(category)
  const user= useSelector (state=>state.user)
  const submitHandler = (e) => {
    e.preventDefault();
    swal("Cambios guardados!")
    history.push("/adminPanel/categorias")
    
  };
  console.log(category, user)
  const cambiarNombre= ()=>{
    return axios
    .put(`/api/categories/admin/${user.id}/${id}`, objeto)
    .then((respuesta) => respuesta.data)
    .then((data) => {
      dispatch(changeCategory(data))
      axios
      .get(`/api/categories/admin/${id}`)
      .then(({ data }) => dispatch(oneCategory(data)))
      swal("Categoria editada!")
    })
    .catch(e=> swal("No esta autorizado para realizar la accion") )
  }

  const removeFromCategory= (userAdmin, categoryId, productId )=>{
     return axios.delete(`/api/categories/admin/${userAdmin}/${categoryId}/${productId}`)
     .then(()=> swal("Removido de la categoria")).then(()=>history.go(0))
     .catch(e=> swal("No esta autorizado para realizar la accion"))
     
  }


  const addToCategory= (userAdmin, categoryId, productId )=>{
    return axios.post(`/api/categories/admin/${userAdmin}/insert`, {category_id: categoryId, product_id: productId})
    .then(({data})=> {
      if(data === "La relacion ya existe"){
        return swal("El producto ya se encuentra en la categoria")
      }else{
        return swal("Agregado a la categoria").then(()=>history.go(0))
      }
      })
      .catch(e=> swal("No esta autorizado para realizar la accion"))
 }

  return (
    <>
      <div className="row no-gutters wrapper">
        <div className="col-10 col-lg-5">
          <form
            className="shadow-lg"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <h1 className="mb-3">Editar categoria</h1>

            <div className="form-group">
              <label htmlFor="name_field"> Nuevo nombre </label>
              <input
                type="name"
                id="name_field"
                name="name"
                onChange={handleChangeNombre}
                className="ml-2"
              />
              <Button onClick={()=>cambiarNombre()}>Cambiar nombre</Button>
              {category.length && category[0] && category[0].products && category[0].products.map(product=>{
                return <Card className="mt-3"key={product.id}>
                <Card.Header as="h5">
                 {product.name} 
                </Card.Header>
                <Card.Title> <Button onClick={()=>removeFromCategory(user.id, category[0].id, product.id)} className="ml-3 mt-3"variant="warning">Remover de la categoria</Button></Card.Title>
              </Card>
              })}
              <h2 className="mt-3">Agregar productos:</h2>
              {products.length ? products.map(product=>{
                return <Card className="mt-3"key={product.id}>
                <Card.Header as="h5">
                 {product.name} 
                </Card.Header>
                <Card.Title> <Button onClick={()=>addToCategory(user.id, category[0].id, product.id)} className="ml-3 mt-3"variant="warning">Agregar a la categoria</Button></Card.Title>
              </Card>
              }): "cargando"}
            </div>
            <button
              id="register_button"
             
              className="btn btn-block py-3"
            >
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarCategoria;