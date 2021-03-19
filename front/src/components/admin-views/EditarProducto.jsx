import React, { useState } from "react";
// import { editUser } from "../../state/allusers";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import {getOne} from "../../state/product"

const EditarProducto = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user= useSelector(state=> state.user)

  // id name  price mark  photo photo  description
const product= useSelector(state=>state.product)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [mark, setMark] = useState("");
  const [model, setModel] = useState("");
  const [stock, setStock] = useState("");

  React.useEffect(()=> {
    if(product.length){
      setName(product[0].name)
      setDescription(product[0].description)
      setPhoto(product[0].photo)
      setPrice(product[0].price)
      setMark(product[0].mark)
      setModel(product[0].model)
      setStock(product[0].stock)
    }
   
  }, [])
console.log(product[0])
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

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

  const objeto = { name, description, photo, price, mark, model, stock };


  const submitHandler = (e) => {
    e.preventDefault();

    
      return axios
        .put(`/api/products/${id}`, objeto)
        .then((respuesta) => {
          console.log(respuesta)
          dispatch(getOne(id))}).then(()=> {
          swal("Producto editado!");
          history.push(`/adminPanel/productos/`);
        })
            
            
   
  };

  return (
    <>
    <div>

    {user.isAdmin? 
    <div>
    {product.length ? 
      <div className="row no-gutters wrapper">
        <div className="col-10 col-lg-5">
          <form
            className="shadow-lg"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <h1 className="mb-3">Editar Producto</h1>

            <div className="form-group">
              <label> Nombre </label>
              <input
              value={name}
              className="form-control" 
              onChange={handleChangeName}
                
              />
             
            </div>

            <div class="form-group"></div>

            <div className="form-group">
              <label>Descripción</label>
              <textarea
              value={description}
              className="form-control"
               
                onChange={handleChangeDescription}
                
              ></textarea>

            
            </div>

            <div className="form-group">
              <label>Fotografía</label>
              <input
              value={photo}
              className="form-control"
              onChange={handleChangePhoto}
                
              />
             
            </div>

            <div className="form-group">
              <label>Precio</label>
              <input
              value={price}
              className="form-control"
               
              onChange={handleChangePrice}
              />
             
            </div>

            <div className="form-group">
              <label> Marca </label>
              <input
              value={mark}
              className="form-control"
              onChange={handleChangeMark}
               
              />
              
            </div>

            <div className="form-group">
              <label> Modelo</label>
              <input
              value={model}
              className="form-control"
                
              onChange={handleChangeModel}
              
              />
          
            </div>

            <div className="form-group">
              <label> Stock</label>
              <input
              value={stock}
              className="form-control"
              onChange={handleChangeStock}
                // onBlur={requeridoStock}
              />
             
            </div>

            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
            >
              CONFIRMAR
            </button>
          </form>
        </div>
      </div>
      : "loading"}
      </div>
      : <h1 style={{textAlign:'center', marginTop:'15px'}}>Debes ser administrador para ver esta pagina</h1>}
      </div>
    </>
  );
};

export default EditarProducto;
