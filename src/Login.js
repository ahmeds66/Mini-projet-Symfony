import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Alert } from "react-bootstrap";


const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [user, setUser] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post("https://127.0.0.1:8000/api/users?page=1", { username, password });
        setUser([...user, response.data])

        //check if the user exist in the database or not 
        //if the user exist then redirect to the home page
        //if the user doesn't exist then show an error message

        if (response.data) {
            //redirect to the home page and save the user in the local storage
            return <redirect to="/home" />
            const loggeduser = response.data
            localStorage.setItem("user", JSON.stringify(loggeduser))
        } else {
            //show an error message
            Alert("The username or password is incorrect")
        }
    }

    return (
        <div className="justify-content-center">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

//export the component and logged in user
export default Login;