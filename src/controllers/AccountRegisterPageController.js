import React, {Component, useState} from "react";
import AccountRegisterPage from "../components/AccountRegisterPage";
import {addUser} from "../utils/common";

class AccountRegisterPageController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            user: {
                username: "",
                password: "",
                firstname: "",
                lastname: ""
            }
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(event) {
        this.setState({
            show: false
        });
    }

    handleShow(event) {
        this.setState({
            show: true
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            user: {
                username: e.target.username.value,
                password: e.target.password.value,
                firstname: e.target.firstname.value,
                lastname: e.target.lastname.value
            }
        },
            this.addUser
        );
        this.handleClose(e);
    }

    addUser = () => {
        addUser(this.state.user);
    }

    render() {
        return (
            <AccountRegisterPage show={this.state.show}  handleShow={this.handleShow}
                                 handleClose={this.handleClose} handleSubmit={this.handleSubmit}/>
        )
    }
}

export default  AccountRegisterPageController;