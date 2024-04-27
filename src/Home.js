import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './profile.jpg';
import './Home.css';

function Home() {
    return (
        
        <div className="profile-container">
            <br /><br />
            <img className="profile" src={Profile} alt="프로필사진" />
            <div className="btn">
                <Link to="/page1"><button>조혜린</button></Link>
                <br />
                <Link to="/page2"><button>지원동기</button></Link>
            </div>
        </div>
    );
}

export default Home;