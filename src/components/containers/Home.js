import React from "react"
import { Navigate, Route, Switch } from 'react-router-dom';
import '../../styles/Home.scss'

const Home = (probs) => {
    console.log(probs)
    return (
        <div className="homeContainer">
            <div className="navBar">
                <span className="home title">BigCorp</span>
                <img className="logo" src="/logo.png" alt="BigCorp Logo"/>
                <button className="loginBtn">Login</button>
            </div>

            <div className="bannerContainer">
                <img className="banner" src="/banner/1642.jpg" alt="banner"></img>
            </div>

            <div className="featureContainer">
                <span className="feature title center">Our features</span>
                <div className="feature one">1</div>
                <div className="feature two">2</div>
                <div className="feature three">3</div>
            </div>

            <div className="footerContainer">
                <div className="left">
                    <div class="left-info">
                        <img className="logo" src="/logo.png" alt="BigCorp Logo"/>
                        <span className="home title">BigCorp</span>
                        <div className="copyright">Copyright (C) 2022. All rights reserved.</div>
                    </div>

                    <div className="left-subcribe">
                        <span className="subcribe-text">Subcribe to our newsletter</span>
                        <input type="text" placeholder="Email Address" className="email"></input>
                        <label htmlFor="email" className=""></label>
                    </div>
                </div>

                <div className="right">
                    <span>About</span>
                    <span>Our story</span>
                    <span>Benefits</span>
                    <span>Team</span>
                    <span>Careers</span>
                </div>


            </div>
        </div>
    )
}

export default Home