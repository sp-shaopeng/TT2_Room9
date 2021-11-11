import React, { useState } from "react"


const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return user.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
    event.preventDefault();
    }
      
    return (
        <div>
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
                    onChange={(e) => setPassword(e.target.value)}/>
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
