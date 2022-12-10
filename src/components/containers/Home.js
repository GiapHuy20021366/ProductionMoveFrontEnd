import React from "react"
import { Navigate, Route, Switch } from 'react-router-dom';
import TruckBtn from './TruckBtn'
import '../../styles/Home.scss'

const Home = (probs) => {
    console.log(probs)

    function Feature({img, title, desc}) {
        return (
            <div className="feature">
                <img src={img}/>
                <span className="feature-title center">{title}</span>
                <p className="feature-description">{desc}</p>
            </div>
        )
    }

    return (
        <div className="homeContainer">
            <div className="navBar">
                <span className="home title">BigCorp</span>
                
                <div className="logoContainer">
                    <img className="logo" src="/logo.png" alt="BigCorp Logo"/>
                </div>

                <TruckBtn/>
            </div>

            <div className="bannerContainer">
                <img className="banner" src="/banner/1642.jpg" alt="banner"></img>
            </div>

            <div className="featureContainer">
                <span className="title center">Our features</span>
                <Feature 
                    className="one"
                    img="/banner/1642.jpg"
                    title="Outstanding design"
                    desc="Designed to be flexible according to all your needs. Create your site with all module position."
                />
                <Feature
                    className="two"
                    img=""
                    title=""
                    desc=""
                />
                <Feature/>
                <Feature/>

                <Feature/>
                <Feature/>
                <Feature/>
                <Feature/>
                
            </div>

            <div className="footerContainer">

                <div className="left column">
                    <div className="left-info">
                        <div className="logoContainer">
                            <img className="logo" src="/logo.png" alt="BigCorp Logo"/>
                        </div>
                        <span className="home title">BigCorp</span>
                        <div className="copyright">Copyright (C) 2022. All rights reserved.</div>
                    </div>

                    <div className="left-subcribe">
                        <span class="subscribe-text">Subscribe to our newsletter</span>
                        <input type="text" placeholder="Email Address" className="email"></input>
                        <label htmlFor="email" className=""></label>
                    </div>
                </div>

                <div className="right column">
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