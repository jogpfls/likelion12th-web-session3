import React, { useEffect } from 'react';
import { useState } from 'react';
import "./UserInfo.js";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    function isLogin() {
        return(
            <div>
                {
    
                }
            </div>
        )
    }

    return (
        <div className="wrapper_box">
            <h2>LOG IN</h2>
            <form className="login_form">
            <input type="text" className="login_input" placeholder="ID" />
            <input placeholder="Password" type="Password" className="login_input" />
            <button type="submit" className="login_btn">
                Login
            </button>
            </form>
        </div>
        );
    };

    export default Login;