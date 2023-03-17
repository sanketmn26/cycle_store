import React, { useContext, useState } from 'react';
import { login_context } from '../App';


function LoginModal() {


    const { loggedin, login_update } = useContext(login_context);

    const login = loggedin;

    let title = "Log In";


// function to fetch login data
    const login_data = () => {

    if (loggedin != 1) {

        let user = document.getElementById('username').value;
        let pass = document.getElementById('password').value;
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";

        if (user == "sanket" && pass == "sanket") {
            localStorage.setItem("loggedin", 1);

            login_update(localStorage.getItem("loggedin"));
        }
        else {
            document.getElementById('msg').innerHTML = "* Username or password is incorrect";
        }
    }

        if (loggedin == 1) {
            localStorage.setItem("loggedin", 0);

            login_update(localStorage.getItem("loggedin"));

        }
    }



    if (login == 0) {
        title = "Log In";

        return (
            <>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-3" id="staticBackdropLabel">{title}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className='col-12'>
                                    <label for="username" className="form-label fw-bold mb-0">Username :</label><br />
                                    <input style={{ height: "3rem" }} type="text" className=" d-inline rounded-1 me-0 form-control mt-1 mb-3" id="username" />
                                </div>

                                <div className='col-12'>
                                    <label for="password" className="form-label fw-bold mb-0">Password :</label><br />
                                    <input style={{ height: "3rem" }} type="password" className=" d-inline border rounded-1 me-0 form-control mt-1 mb-3" id="password" />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <span className='text-danger fw-bold' id="msg"></span>
                                <button type="button" onClick={login_data} className="btn btn-primary">Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    else {
        title = "Hello";
        return (
            <>
                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button> */}

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-3" id="staticBackdropLabel">{title}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className='fs-5 fw-bold'>You are logged in as <span style={{ color: "#AD198D" }}> Sanket </span>!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={login_data} className="btn btn-primary">Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LoginModal;