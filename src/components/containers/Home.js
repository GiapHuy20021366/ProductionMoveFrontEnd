import React from "react"
import { Navigate, Route, Switch } from 'react-router-dom';
import { gsap } from "gsap";
import '../../styles/Home.scss'

const Home = (probs) => {
    console.log(probs)

    function onClickLogin(e) {
        let button = e.target.parentNode;

        e.preventDefault();
        
        let box = button.querySelector('.box'),
            truck = button.querySelector('.truck');
        
        if(!button.classList.contains('done')) {
            
            if(!button.classList.contains('animation')) {

                button.classList.add('animation');

                gsap.to(button, {
                    '--box-s': 1,
                    '--box-o': 1,
                    duration: .3,
                    delay: .5
                });

                gsap.to(box, {
                    x: 0,
                    duration: .4,
                    delay: .7
                });

                gsap.to(button, {
                    '--hx': -5,
                    '--bx': 50,
                    duration: .18,
                    delay: .92
                });

                gsap.to(box, {
                    y: 0,
                    duration: .1,
                    delay: 1.15
                });

                gsap.set(button, {
                    '--truck-y': 0,
                    '--truck-y-n': -26
                });

                gsap.to(button, {
                    '--truck-y': 1,
                    '--truck-y-n': -25,
                    duration: .2,
                    delay: 1.25,
                    onComplete() {
                        gsap.timeline({
                            onComplete() {
                                button.classList.add('done');
                                button.style.background = 'none';
                                redirectToLoginPage()
                            }
                        }).to(truck, {
                            x: 0,
                            duration: .4
                        }).to(truck, {
                            x: 40,
                            duration: 1
                        }).to(truck, {
                            x: 20,
                            duration: .6
                        }).to(truck, {
                            x: 96,
                            duration: .4
                        });
                        gsap.to(button, {
                            '--progress': 1,
                            duration: 2.4,
                            ease: "power2.in"
                        });
                    }
                });
            }
        } else {
            button.classList.remove('animation', 'done');
            gsap.set(truck, {
                x: 4
            });
            gsap.set(button, {
                '--progress': 0,
                '--hx': 0,
                '--bx': 0,
                '--box-s': .5,
                '--box-o': 0,
                '--truck-y': 0,
                '--truck-y-n': -26
            });
            gsap.set(box, {
                x: -24,
                y: -6
            });
        }
    }

    function redirectToLoginPage() {
        probs.history.push('/login')
    }

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

                <button className="truck-button loginBtn" onClick={onClickLogin}>
                    <span className="default">Login</span>
                    <span className="success">
                        Success
                        <svg viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                    </span>
                    <div className="truck">
                        <div className="wheel"></div>
                        <div className="back"></div>
                        <div className="front"></div>
                        <div className="box"></div>
                    </div>
                </button>
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
                        <span id="subcribe-text">Subcribe to our newsletter</span>
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