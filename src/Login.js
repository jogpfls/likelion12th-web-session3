import React, { useState } from 'react';
import Home from './Home.js';
import './Login.css';

const storedUserInfo = JSON.parse(localStorage.getItem('UserInfo'));

const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleId = (e) => {
        setId(e.target.value);
    };

    const handlePw = (e) => {
        setPw(e.target.value);
    };

    const handleLogin = () => {
        if (id === storedUserInfo.id && pw === storedUserInfo.password) {
            setIsLogin(true);
        } else {
        alert('ID 또는 비밀번호가 잘못되었습니다.');
        }
    };

    return (
        <div>
        {isLogin ? (
            <Home />
        ) : (
            <div className="wrapper_box">
                <h2>LOG IN</h2>
                <form className="login_form">
                    <input 
                    type="text" 
                    className = "login_input"
                    placeholder="ID"
                    onChange={handleId} 
                    value={id} />

                    <input 
                    type="password" 
                    className = "login_input"
                    placeholder="Password"
                    onChange={handlePw} 
                    value={pw} />

                    <button onClick={handleLogin} type="button" className="login_btn">
                        Login
                    </button>
                </form>
            </div>
            )}
        </div>
        );
    };

export default Login;