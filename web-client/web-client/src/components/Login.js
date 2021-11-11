import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
// import APIKit, {setClientToken} from '../APIKit';

const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();


    function validateForm() {
        return user.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (user === "user" && password==="password") {
            console.log("Login successful ! ")
            setLoggedIn(true)
            navigate('/projectView', { replace: true }) 
            console.log(loggedIn)
        }
    }

      
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={handleSubmit}>
                <h3>Log In</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input value={user} type="text" 
                        className="form-control" placeholder="Enter username"
                        onChange={(e) => setUser(e.target.value)}
                     />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={password} type="password" 
                        className="form-control" placeholder="Enter password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" 
                    disabled={!validateForm()}
                    className="btn btn-primary btn-block"
                >
                Submit
                </button>

            </form>
        </div>
    )
}

export default Login
