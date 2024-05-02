import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from './profile.jpg';
import './Home.css';

function Home() {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1);
    }
    return (
        
        <div className="profile-container">
            <header>self-introduction</header>
            <br /><br />
            <img className="profile" src={Profile} alt="프로필사진" />
            <div className="btn">
                <Link to="/page1"><button>조혜린</button></Link>
                <br />
                <Link to="/page2"><button>지원동기</button></Link>
            </div>
                <button className = "Up" onClick={increase}>증가</button>
                    <div>{count}</div>
        </div>
    );
}

export default Home;