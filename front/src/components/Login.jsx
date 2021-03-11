import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import { login } from "../state/user"
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login({email:email, password:password}))
        .then((data)=>{
            console.log("LA DATA QUE LLEGA DEL BACK",data)
            localStorage.setItem("token", data.payload.token)})
        .then(history.push("/"))       
    };


    const clickHanlder = ()=>{
        swal("Logged in!")
    };

    return (
    <>
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className="shadow-lg" onSubmit={submitHandler}>
                    <h1 className="mb-3">Login</h1>
                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                            <input type="email" id="email_field" className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_field">Password</label>
                            <input type="password" id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <Link to="/password/forgot" className="float-right mb-4">Forgot Password?</Link>

                        <button id="login_button" type="submit" 
                        className="btn btn-block py-3" onClick={clickHanlder}> LOGIN </button>

                    <Link to="/register" className="float-right mt-3">New User?</Link>
                </form>
            </div>
        </div>
    </>
    )
}

export default Login;
