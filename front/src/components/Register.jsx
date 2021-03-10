import React, { useState } from 'react'
import './Login.css'
import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import {register} from "../state/user"

const Register = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [newUser, setNewUser] = useState({});
   

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
      };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(newUser))
        .then(history.push("/login")) 

    }
    return (
        <>
            
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                    <h1 className="mb-3">Register</h1>

                    <div className="form-group">
                        <label htmlFor="name_field"> Name </label>
                        <input type="name" id="name_field" className="form-control"
                            name='name' onChange={handleChange}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname_field"> Lastname </label>
                        <input type="lastname" id="lastname_field" className="form-control"
                            name='lastName' onChange={handleChange}  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input type="email" id="email_field" className="form-control"
                                name='email' onChange={handleChange} />
                    </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                name='password'
                                onChange={handleChange}
                                
                            />
                        </div>

                        <button id="register_button" type="submit" className="btn btn-block py-3" >
                            REGISTER
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
