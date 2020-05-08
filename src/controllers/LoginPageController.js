import React, { useState} from "react"
import LoginPage from "../components/LoginPage";
import {validLogin} from "../utils/common";
import AccountRegisterPage from "../components/AccountRegisterPage";
import { useHistory } from 'react-router-dom';

const LoginPageController = function (prop) {
    const history = useHistory();
    const [ error, setError] = useState("");
    const [ login, setLogin] = useState({
        username:"",
        password:"",
        lastname:"",
        firstname:""
    });

    function handleDataChange(event) {
        const updatedData = {...login, [event.target.id] : event.target.value};
        setLogin(updatedData);
    }

    function handleSubmit(event) {
        event.preventDefault();
        validLogin(login).then((res) => {
            switch (res.status) {
                case 200:
                    history.push({
                        pathname: "/home",
                        user: res.data.lastname
                    });
                    break;
                case 201:
                    // user does not exit
                    setError("Username does not exit. Try again!");
                    break;
                case 202:
                    // wrong password
                    setError("Wrong password. Please try again!");
                    break;
                default:
                    break;
            }
        });
    }

    function handleAccountRegister(event) {
        return (
            <div>
                <AccountRegisterPage/>
            </div>
        )
    }

    return (
        <>
            <LoginPage login={login} onTriggerAccountRegister={handleAccountRegister}
                       onSubmit={handleSubmit} onChange={handleDataChange} error={error}/>
        </>
    )
}

export default LoginPageController;