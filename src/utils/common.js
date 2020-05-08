import axios from "axios";

const api = "http://localhost:3000/api";

export function validLogin(login) {
    return axios.post(`${api}/users/isvalid`,
        {
            username: login.username,
            password: login.password
        })
        .then((response) => {
            return response;
        })
}

export function addUser(user) {
    return axios.post(`${api}/users`,
        {
            username: user.username,
            password: user.password,
            firstname: user.firstname,
            lastname: user.lastname
        })
        .then((response) => {
            return response;
        })
}
