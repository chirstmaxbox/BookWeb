import React, {useState} from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import AccountRegisterPageController from "../controllers/AccountRegisterPageController";

function AccountRegisterPage(props) {
    return (
        <>
            <Button variant="link" onClick={props.handleShow}>
                Sign up
            </Button>
            <Modal show={props.show} onHide={props.handleClose} centered animation>
                <Modal.Header closeButton>
                    <Modal.Title>User Register</Modal.Title>
                </Modal.Header>
                <form onSubmit={props.handleSubmit}>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email Address</label>
                            <input type="email" className="form-control" id="username"
                                   aria-describedby="emailHelp" placeholder="Enter email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <div className="input-group form-group">
                                <input type="password" className="form-control" id="password"
                                       placeholder="Password" required/>
                                 <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-eye-slash"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">First Name</label>
                            <input type="text" className="form-control" id="firstname"
                                   placeholder="First name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Last Name</label>
                            <input type="text" className="form-control" id="lastname"
                                   placeholder="Last name" required/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Cancel
                        </Button>
                        <div className="form-group text-right">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </Modal.Footer>
                </form>

            </Modal>
        </>
    )
}

export default AccountRegisterPage;