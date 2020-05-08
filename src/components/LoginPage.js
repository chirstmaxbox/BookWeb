import React from 'react';
import AccountRegisterPageController from "../controllers/AccountRegisterPageController";

const logo = require("../img/Tulips_Book_Glasses_Bokeh_571055_1920x1280.jpg");

/* This is for login page */
function LoginPage(props) {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col">
                    <img className="img-fluid" src={logo} alt="Logo"/>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-4 bg-light">
                    <form onSubmit={props.onSubmit}>
                        <div className="form-group card-header">
                            <h3>Sign In</h3>
                        </div>
                        <div className="form-group card-body">
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user-circle"></i></span>
                                </div>
                                <input
                                    className="form-control"
                                    id="username"
                                    type="email"
                                    placeholder="Email"
                                    onChange={props.onChange}
                                    value={props.login.username}
                                    required
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-key"></i></span>
                                </div>
                                <input type="password"
                                       className="form-control"
                                       id="password"
                                       placeholder="Password"
                                       onChange={props.onChange}
                                       value={props.login.password}
                                       required
                                />
                            </div>
                            <div className="form-group text-right">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            {props.error && (
                                <div class="alert alert-danger">{props.error}</div>
                            )}
                        </div>

                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                <div className="align-self-center">Don't have an account?</div><div><AccountRegisterPageController/></div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;