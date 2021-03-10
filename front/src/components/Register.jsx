import React, { useState } from 'react'
import './Login.css'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        lastname:'',
        email: '',
        password: '',
    });
    const { name, lastname, email, password } = user;

    const submitHandler = (e) => {
        e.preventDefault();

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
                            name='name' value={name}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname_field"> Lastname </label>
                        <input type="lastname" id="lastname_field" className="form-control"
                            name='lastname' value={lastname}  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input type="email" id="email_field" className="form-control"
                                name='email'value={email} />
                    </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                name='password'
                                value={password}
                                
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
