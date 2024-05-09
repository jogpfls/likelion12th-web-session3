import React, { useState, useEffect } from 'react';
import Home from './Home.js';
import './Login.css';
import { UserInfo } from './UserInfo.js';

const Login = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        localStorage.setItem('userInfo', JSON.stringify(UserInfo));
    }, []); 

    const handleId = (e) => {
        setId(e.target.value);
    };

    const handlePw = (e) => {
        setPw(e.target.value);
    };

    const handleLogin = () => {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (id === storedUserInfo.id && pw === storedUserInfo.password) {
            setIsLogin(true);
        } else {
        alert('ID 또는 비밀번호가 잘못되었습니다.');
        setId('');
        setPw('');
        }
    };

    return (
        <>
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
                    onChange={handleId}  />

                    <input 
                    type="password" 
                    className = "login_input"
                    placeholder="Password"
                    onChange={handlePw}  />

                    <button onClick={handleLogin} type="submit" className="login_btn">
                        Login
                    </button>
                </form>
            </div>
            )}
        </>
        );
    };

export default Login;