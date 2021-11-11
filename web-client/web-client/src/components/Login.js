import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({})
    
    const navigate = useNavigate();

    function validateForm() {
        return user.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const onSuccess = ({data}) => {
            setIsAuthorized(true)
            setIsLoading(false)
            navigate('/projectView', { replace: true }) 
        }
      
        const onFailure = error => {
            console.log(error && error.response);
            setError(error.response.data)
            console.log(error)
            setIsLoading(false)
        }

        // loading...
        setIsLoading(true)

        const username = user
        axios.post("http://178.128.111.201:49161/login", {username, password})
        .then(onSuccess)
        .catch(onFailure);
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
