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
        .then((respuesta) => respuesta.data)
        .then((data) => {
          return axios  
          .get(`/api/products/admin/${id}`)
          .then(({data})=> {
            dispatch(getOne(data))
            swal("Producto editado!");
          history.push("/adminPanel/productos");
            })
          
        });
    // }
  };

  // dispatch(user(objeto)).then((data) => data);

  // const [nameValidate, setNameValidate] = useState("inicial");
  // const [descriptionValidate, setDescriptionValidate] = useState("inicial");
  // const [photoValidate, setPhotoValidate] = useState("inicial");

  // const [priceValidate, setPriceValidate] = useState("inicial");
  // const [markValidate, setMarkValidate] = useState("inicial");
  // const [modelValidate, setModelValidate] = useState("inicial");

  // const [stockValidate, setStockValidate] = useState("inicial");

  // const requeridoName = (e) => {
  //   let expresion = /([A-Za-z0-9-]+)/;

  //   if (objeto.name != "" && expresion.test(objeto.name)) {
  //     setNameValidate("mostrar");
  //   } else {
  //     // el input esta vacio
  //     setNameValidate("nomostrar");
  //   }
  // };

  // const requeridoDescription = (e) => {
  //   let expresion = /([A-Za-z0-9-]+)/;

  //   if (objeto.description != "" && expresion.test(objeto.description)) {
  //     setDescriptionValidate("mostrar");
  //   } else {
  //     // el input esta vacio
  //     setDescriptionValidate("nomostrar");
  //   }
  // };

  // const requeridoPhoto = (e) => {
  //   if (objeto.photo != "") {
  //     setPhotoValidate("mostrar");
  //   } else {
  //     // el input esta vacio
  //     setPhotoValidate("nomostrar");
  //   }
  // };

  // const requeridoPrice = (e) => {
  //   let expresion = /[0-9]/;

  //   if (objeto.price != "" && expresion.test(objeto.price)) {
  //     setPriceValidate("mostrar");
  //   } else {
  //     // el input esta vacio
  //     setPriceValidate("nomostrar");
  //   }
  // };

  // const requeridoMark = (e) => {
  //   let expresion = /([A-Za-z0-9-]+)/;

  //   if (objeto.mark != "" && expresion.test(objeto.mark)) {
  //     setMarkValidate("mostrar");
  //   } else {
  //     // el input esta vacio
  //     setMarkValidate("nomostrar");
  //   }
  // };

  // const requeridoModel = (e) => {
  //   let expresion = /([A-Za-z0-9-]+)/;

  //   if (objeto.model != "" && expresion.test(objeto.model)) {
  //     setModelValidate("mostrar");
  //   } else {
  //     // el input esta vacio
  //     setModelValidate("nomostrar");
  //   }
  // };

  // const requeridoStock = (e) => {
  //   let expresion = /[0-9]/;

  //   if (objeto.stock != "" && expresion.test(objeto.stock)) {
  //     setStockValidate("mostrar");
  //   } else {
  //     // el input esta vacio
  //     setStockValidate("nomostrar");
  //   }
  // };

  



  return (
    <>
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
                // className={` form-control 
                // ${
                //   nameValidate == "inicial"
                //     ? ""
                //     : nameValidate == "mostrar"
                //     ? "is-valid "
                //     : "is-invalid"
                // }             
                //     `}
                onChange={handleChangeName}
                // onBlur={requeridoName}
              />
              {/* <div className="valid-feedback">Todo bien continúe</div>
              <div className="invalid-feedback">Entre un nombre válido </div> */}
            </div>

            <div class="form-group"></div>

            <div className="form-group">
              <label>Descripción</label>
              <textarea
              value={description}
              className="form-control"
                // className={` form-control ${
                //   descriptionValidate == "inicial"
                //     ? ""
                //     : descriptionValidate == "mostrar"
                //     ? "is-valid "
                //     : "is-invalid"
                // }             
                //     `}
                onChange={handleChangeDescription}
                // onBlur={requeridoDescription}
              ></textarea>

              {/* <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">
                Entre un descripción válida
              </div> */}
            </div>

            <div className="form-group">
              <label>Fotografía</label>
              <input
              value={photo}
              className="form-control"
                // className={` form-control ${
                //   photoValidate == "inicial"
                //     ? ""
                //     : photoValidate == "mostrar"
                //     ? "is-valid "
                //     : "is-invalid"
                // }             
                //     `}
                onChange={handleChangePhoto}
                // onBlur={requeridoPhoto}
              />
              {/* <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">Ingrese una foto válida</div> */}
            </div>

            <div className="form-group">
              <label>Precio</label>
              <input
              value={price}
              className="form-control"
                // className={` form-control ${
                //   priceValidate == "inicial"
                //     ? ""
                //     : priceValidate == "mostrar"
                //     ? "is-valid "
                //     : "is-invalid"
                // }             
                //     `}
                onChange={handleChangePrice}
                // onBlur={requeridoPrice}
              />
              {/* <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">Ingrese un precio</div> */}
            </div>

            <div className="form-group">
              <label> Marca </label>
              <input
              value={mark}
              className="form-control"
                // className={` form-control ${
                //   markValidate == "inicial"
                //     ? ""
                //     : markValidate == "mostrar"
                //     ? "is-valid "
                //     : "is-invalid"
                // }             
                //     `}
                onChange={handleChangeMark}
                // onBlur={requeridoMark}
              />
              {/* <div className="valid-feedback">Todo bien continúe</div>
              <div className="invalid-feedback">Entre una marca válido </div> */}
            </div>

            <div className="form-group">
              <label> Modelo</label>
              <input
              value={model}
              className="form-control"
                // className={` form-control ${
                //   modelValidate == "inicial"
                //     ? ""
                //     : modelValidate == "mostrar"
                //     ? "is-valid "
                //     : "is-invalid"
                // }             
                //     `}
                onChange={handleChangeModel}
                // onBlur={requeridoModel}
              />
              {/* <div className="valid-feedback">Todo bien continúe</div>
              <div className="invalid-feedback">Entre un modelo válido </div> */}
            </div>

            <div className="form-group">
              <label> Stock</label>
              <input
              value={stock}
              className="form-control"
                // className={` form-control ${
                //   stockValidate == "inicial"
                //     ? ""
                //     : stockValidate == "mostrar"
                //     ? "is-valid "
                //     : "is-invalid"
                // }             
                //     `}
                onChange={handleChangeStock}
                // onBlur={requeridoStock}
              />
              {/* <div className="valid-feedback">Todo bien continúe</div>
              <div className="invalid-feedback">Entre un modelo válido </div> */}
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
    </>
  );
};

export default EditarProducto;
