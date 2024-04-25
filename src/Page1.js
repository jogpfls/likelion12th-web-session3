import React from 'react';
import { Link } from 'react-router-dom';
import instagramLogo from './instagram.png';
import naverLogo from './naver_logo.webp';
import './Page1.css';

function Page1() {
    return (
        <div>
            <header>ABOUT ME</header>
            <br></br>
            <div className="story">
                <h1 className="title">조혜린은 누구인가?</h1>
                <p className="content1">
                    이름: 조혜린<br></br>
                    소속 대학: 명지대학교 자연캠퍼스<br></br>
                    소속 학과: 정보통신공학과<br></br>
                    학번: 60232410<br></br>
                    학년: 2학년<br></br>
                    현재 거주지:경기도 용인시 역북동<br></br>
                </p>

                <h1 className="title">조혜린의 TMI</h1>
                <p className="content2">
                    취미: 사진찍기, 여행<br></br>
                    잘하는 것: 꾸준히 하는 것<br></br>
                    싫어하는 음식: 보쌈, 족발, 피자<br></br>
                    좋아하는 음식: 보쌈, 족발, 피자를 제외한 모든 것<br></br>
                    좋아하는 장소: 바다
                </p>

                <h1 className="title">자신을 표현할 수 있는 단어는?</h1>
                <p className="content2">전 저를 지수 그래프라고 표현하고 싶습니다.<br></br>
                지수 그래프는 천천히 y값이 증가하지만 조금만 지나면 기하급수적으로<br></br>
                y의 값이 증가합니다. 저 또한 처음에는 배움, 실력, 적응에 있어 속도가<br></br>
                다른 사람들보다 느릴 수 있지만 시간이 지나면 많은 성장을 보인다고 생각합니다!
                </p>
            </div>

            <h1 className="sns">SNS</h1>
            <div className="sns">
                <div className="instagram">
                    <Link to="https://www.instagram.com/hour._.2?igsh=MWFteXhqdnFmaGNuYw%3D%3D&utm_source=qr" target="_blank">
                        <img src={instagramLogo} alt="인스타그램 로고"></img></Link>
                    <p>@hour._.2</p>

                </div>

                <div className="naver">
                    <Link to="https://m.blog.naver.com/jogpfls"><img src={naverLogo} alt="네이버 로고"></img></Link>
                    <p>jogpfls@naver.com</p>
                </div>
            </div>
        </div>
    );
}

export default Page1;