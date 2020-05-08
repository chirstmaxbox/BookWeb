import React, {useEffect, useState} from "react"
import HomePage from "../components/HomePage";
import { useLocation } from 'react-router-dom';

const HomePageController = function (props) {
    const location = useLocation();
    const [ user, setUser] = useState("");

    useEffect(() => {
        setUser(location.user);
    },[user])

    return (
        <HomePage username={user}/>
    )
}

export default HomePageController;

