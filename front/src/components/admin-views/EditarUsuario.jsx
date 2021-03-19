import React, { useState } from "react";
import { changePermits, editUser, exactUser } from "../../state/allusers";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form'


const EditarUsuario = ({ id }) => {
  const user= useSelector(state=> state.allUser)
  
  const dispatch = useDispatch();
  const loggedUser= useSelector(state=> state.user)
  const history = useHistory();
  const userId= history.location.pathname.split("/")[5]
  React.useEffect(()=>{
    axios.
        get(`/api/users/admin/${userId}`)
        .then(({data})=> dispatch(exactUser(data))).then(()=>{
          setNombre(user.name)
          setLastName(user.lastName)
          setCorreo(user.email)
        })
        .catch(e=> console.log(e))
  }, [])

  console.log("AAAAAAAAAAAAAA", loggedUser)
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
  
  
  const cambiarPermisos= async(id) =>{ 
    if(loggedUser.id == user.id){
      return swal("No puedes cambiar tus propios permisos!")
    }
try{
const res = await axios.put(`/api/users/${id}/permits`)

        console.log('ACA ESTA EL AXIOS',res);
      
       
       dispatch(changePermits(res.data))
    
       swal("Permisos cambiados")
}catch(err){
        console.error(err)
}
} 


  const submitHandler = (e) => {
    e.preventDefault();
   
      return axios
        .put(`/api/users/${id}`, objeto)
        .then((respuesta) => respuesta.data)
        .then((data) => {
          dispatch(editUser(data));
          swal("Usuario editado!");
          history.push("/adminPanel/usuarios");
        });
    
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
    <div>
      {loggedUser.isAdmin ? 
      <div className="row no-gutters wrapper">
        <div className="col-10 col-lg-5">
        <button
              style={{fontSize:'1.5rem', backgroundColor:'#fa9c23',marginBottom:'1rem'}}
              className="btn btn-block py-2"
              onClick={()=>cambiarPermisos(user.id)}
            >
              {user.isAdmin ? "Revocar permisos": "Promover a administrador"}
            </button>
          <form
            className="shadow-lg"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <h1 className="mb-3">Editar usuario</h1>

            <div className="form-group">
              <label htmlFor="name_field"> Nombre </label>
              <input
              value={nombre}
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
              value={lastName}
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
              value={correo}
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
              style={{fontSize:'1.1rem', color:'black'}}
            >
              CONFIRMAR
            </button>
            
          </form>
          

          
          
        </div>
      </div>
      : <h1>Debes ser administrador para ver esta pagina</h1>}
      </div>
    </>
  );
};

export default EditarUsuario;

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
