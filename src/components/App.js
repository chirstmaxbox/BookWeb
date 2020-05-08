import React from 'react';
import {Route} from "react-router-dom"
import HomePageController from "../controllers/HomePageController";
import LoginPageController from "../controllers/LoginPageController";

function App(props) {
    return (
        <>
            <Route path="/" exact component={LoginPageController} />
            <Route path="/home" exact component={HomePageController} />
        </>
    )
}

export default App;
