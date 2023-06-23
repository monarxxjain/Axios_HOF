import React, { useEffect } from 'react'
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BrushIcon from '@mui/icons-material/Brush';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import CameraIcon from '@mui/icons-material/Camera';
import { Link } from "react-router-dom";


import { topic1, topic2, topic3, topic4, topic5, pat2, pat3, sh1, sh2, sh3, heroBanner, auth1, feat1, recPost1 } from "../../assets/index";
import './AboutUs.css'
const AboutUs = () => {

    'use strict';


    useEffect(()=>{
   



    /**
     * SLIDER
     */

    const slider = document.querySelector("[data-slider]");
    const sliderContainer = document.querySelector("[data-slider-container]");
    const sliderPrevBtn = document.querySelector("[data-slider-prev]");
    const sliderNextBtn = document.querySelector("[data-slider-next]");

    let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    let currentSlidePos = 0;

    const moveSliderItem = function () {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    }

    /**
     * NEXT SLIDE
     */

    const slideNext = function () {
        const slideEnd = currentSlidePos >= totalSlidableItems;

        if (slideEnd) {
            currentSlidePos = 0;
        } else {
            currentSlidePos++;
        }

        moveSliderItem();
    }

    sliderNextBtn.addEventListener("click", slideNext);

    /**
     * PREVIOUS SLIDE
     */

    const slidePrev = function () {
        if (currentSlidePos <= 0) {
            currentSlidePos = totalSlidableItems;
        } else {
            currentSlidePos--;
        }

        moveSliderItem();
    }

    sliderPrevBtn.addEventListener("click", slidePrev);

    /**
     * RESPONSIVE
     */
    window.addEventListener("resize", function () {
        totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
        totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

        moveSliderItem();
    }); 
},[])

    return (
        <div id="top">


            <main>
                <article>



                    <section className="hero" id="home" aria-label="home">
                        <div className="container">

                            <div className="hero-content">

                                <p className="hero-subtitle" style={{ fontSize: "15px" }}>Hello Everyone!</p>

                                <h1 className="headline headline-1 section-title" style={{ fontSize: "60px" }}>
                                    We are <span className="span">Brute Force</span>
                                </h1>

                                <p className="hero-text" style={{ fontSize: "16px" }}>
                                    Welcome ! to our About Us page, where you can learn more about the team behind our website. 
                                    Our skilled contributors work tirelessly to provide exceptional service that
                                    meets the diverse needs of our valued visitors. 
                                </p>

                                <div className="input-wrapper" style={{ fontSize: "16px" }}>

                                    <input type="email" name="email_address" placeholder="Want to Contact Us ?" required
                                        className="input-field pointer-events-none  " autoComplete="off" />

                                    <button className="btn btn-primary" style={{ fontSize: "14px" }}>
                                        <span className="span"><Link to={'/contact_us'}>Contact</Link></span>

                                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                                    </button>

                                </div>

                            </div>

                            <div className="hero-banner">

                                <img src={heroBanner} width="327" height="490" alt="Wren Clark" className="w-100 z-10" />

                                <img src={pat3} width="270" height="26" alt="shape" className="shape shape-1" />

                                <img src={pat3} width="27" height="26" alt="shape" className="shape shape-2" />

                            </div>

                            <img src={sh1} width="500" height="800" alt="" className="hero-bg hero-bg-1" />

                            <img src={sh2} width="500" height="500" alt="" className="hero-bg hero-bg-2" />

                        </div>
                    </section>







                    <section className="topics" id="topics" aria-labelledby="topic-label">
                        <div className="container w-7/12">

                            <div className="card topic-card">

                                <div className="card-content">

                                    <h2 className="headline headline-2 section-title card-title" id="topic-label" style={{ fontSize: "20px", fontWeight: "bolder" }}>
                                        Contributors
                                    </h2>

                                    <p className="card-text" style={{ fontSize: "16px" }}>
                                        Meet the team behind our website's creation.<br /> <br />The Brute Force ....
                                    </p>

                                    <div className="btn-group" style={{ fontSize: "20px" }}>
                                        <button className="btn-icon" aria-label="previous" data-slider-prev>
                                            <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
                                        </button>

                                        <button className="btn-icon" aria-label="next" data-slider-next>
                                            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                        </button>
                                    </div>

                                </div>

                                <div className="slider" data-slider>
                                    <ul className="slider-list" data-slider-container style={{ width: "800px" }}>

                                        <li className="slider-item">
                                            <a href="#" className="slider-card">
                                                <figure className="slider-banner img-holder" >
                                                    <img src={topic1} width="507" height="618" loading="lazy" alt="Sport"
                                                        className="img-cover" />
                                                </figure>

                                                <div className="slider-content">
                                                    <span className="slider-title" style={{ fontSize: "18px" }}>Monark Jain</span>

                                                    <p className="slider-subtitle" style={{ fontSize: "14px" }}>50 Commits</p>
                                                </div>

                                            </a>
                                        </li>

                                        <li className="slider-item">
                                            <a href="#" className="slider-card">
                                                <figure className="slider-banner img-holder" >
                                                    <img src={topic3} width="507" height="618" loading="lazy" alt="Design"
                                                        className="img-cover" />
                                                </figure>

                                                <div className="slider-content">
                                                    <span className="slider-title" style={{ fontSize: "18px" }}>Akshat Bhansali</span>

                                                    <p className="slider-subtitle" style={{ fontSize: "14px" }}>30 Commits</p>
                                                </div>

                                            </a>
                                        </li>
                                        <li className="slider-item">
                                            <a href="#" className="slider-card">
                                                <figure className="slider-banner img-holder" >
                                                    <img src={topic2} width="507" height="618" loading="lazy" alt="Travel"
                                                        className="img-cover" />
                                                </figure>

                                                <div className="slider-content">
                                                    <span className="slider-title" style={{ fontSize: "18px" }}>Aarjav Jain</span>

                                                    <p className="slider-subtitle" style={{ fontSize: "14px" }}>20 Commits</p>
                                                </div>

                                            </a>
                                        </li>


                                        <li className="slider-item">
                                            <a href="#" className="slider-card">
                                                <figure className="slider-banner img-holder" >
                                                    <img src={topic4} width="507" height="618" loading="lazy" alt="Movie"
                                                        className="img-cover" />
                                                </figure>

                                                <div className="slider-content">
                                                    <span className="slider-title" style={{ fontSize: "18px" }}>Ayush Sharma</span>

                                                    <p className="slider-subtitle" style={{ fontSize: "14px" }}>35 Commits</p>
                                                </div>

                                            </a>
                                        </li>

                                        <li className="slider-item">
                                            <a href="#" className="slider-card">
                                                <figure className="slider-banner img-holder" >
                                                    <img src={topic5} width="507" height="618" loading="lazy" alt="Lifestyle"
                                                        className="img-cover" />
                                                </figure>

                                                <div className="slider-content">
                                                    <span className="slider-title" style={{ fontSize: "18px" }}>Raghunandan</span>

                                                    <p className="slider-subtitle" style={{ fontSize: "14px" }}>15 Commits</p>
                                                </div>

                                            </a>
                                        </li>

                                        <li className="slider-item">
                                            <a href="#" className="slider-card">
                                                <figure className="slider-banner img-holder" >
                                                    <img src={topic5} width="507" height="618" loading="lazy" alt="Lifestyle"
                                                        className="img-cover" />
                                                </figure>

                                                <div className="slider-content">
                                                    <span className="slider-title" style={{ fontSize: "18px" }}>Dhruv Bharuka</span>

                                                    <p className="slider-subtitle" style={{ fontSize: "14px" }}>25 Commits</p>
                                                </div>

                                            </a>
                                        </li>

                                    </ul>
                                </div>

                            </div>

                        </div>
                    </section>




                    <section className="section feature " aria-label="feature" id="featured">
                        <div className="container w-7/12">

                            <h2 className="headline headline-2 section-title">
                                <span className="span" style={{fontSize: "45px", fontWeight: "bolder"}}>Team's Insights</span>
                            </h2>

                            <p className="section-text" style={{fontSize: "18px"}}>
                                Contributions speak volumes and inspire greatness in others.
                            </p>

                            <ul className="feature-list flex justify-center">

                                <li>
                                    <div className="card feature-card">
                                        {/* style="--width: 507; --height: 618;" */}
                                        <figure className="card-banner img-holder">
                                            <img src={feat1} width="1602" height="903" loading="lazy"
                                                alt="Self-observation is the first step of inner unfolding" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <div className="card-wrapper">
                                                <div className="card-tag" style={{ fontSize: "14px" }}>
                                                    <a href="#" className="span hover-2">#frontend </a>

                                                    <a href="#" className="span hover-2">#backend </a>

                                                    <a href="#" className="span hover-2">#springBoot </a>
                                                </div>

                                                <div className="wrapper" style={{ fontSize: "14px" }}>
                                                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                                                    <span className="span">Devoted 99 hrs</span>
                                                </div>
                                            </div>

                                            <h3 className="headline headline-3">
                                                <a href="#" className="card-title hover-2" style={{ fontSize: "25px", fontWeight: "bolder" }}>
                                                    The best error message is the one that never shows up.
                                                </a>
                                            </h3>

                                            <div className="card-wrapper">

                                                <div className="profile-card">
                                                    <img src={auth1} width="48" height="48" loading="lazy" alt="Joseph"
                                                        className="profile-banner" />

                                                    <div>
                                                        <p className="card-title" style={{fontSize: "17px"}}>Monark</p>

                                                        <p className="card-subtitle" style={{ fontSize: "14px" }}>Team Leader</p>
                                                    </div>
                                                </div>

                                                <a href="#" className="card-btn" style={{ fontSize: "14px" }}>Read more</a>

                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="card feature-card">
                                        {/* style="--width: 507; --height: 618;" */}
                                        <figure className="card-banner img-holder">
                                            <img src="./assets/images/featured-2.png" width="1602" height="903" loading="lazy"
                                                alt="Self-observation is the first step of inner unfolding" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <div className="card-wrapper" style={{ fontSize: "14px" }}>
                                                <div className="card-tag">
                                                    <a href="#" className="span hover-2">#frontend</a>

                                                    <a href="#" className="span hover-2">#tailwind</a>
                                                </div>

                                                <div className="wrapper">
                                                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                                                    <span className="span">Devoted 30 hrs</span>
                                                </div>
                                            </div>

                                            <h3 className="headline headline-3">
                                                <a href="#" className="card-title hover-2" style={{ fontSize: "25px", fontWeight: "bolder" }}>
                                                    Simplicity is the ultimate sophistication.
                                                </a>
                                            </h3>

                                            <div className="card-wrapper">

                                                <div className="profile-card">
                                                    <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                                                        className="profile-banner" />

                                                    <div>
                                                        <p className="card-title" style={{ fontSize: "17px" }}>Ayush</p>

                                                        <p className="card-subtitle" style={{ fontSize: "14px" }}>Co-Leader</p>
                                                    </div>
                                                </div>

                                                <a href="#" className="card-btn" style={{ fontSize: "14px" }}>Read more</a>

                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="card feature-card">
                                        {/* style="--width: 507; --height: 618;" */}
                                        <figure className="card-banner img-holder">
                                            <img src="./assets/images/featured-3.png" width="1602" height="903" loading="lazy"
                                                alt="Self-observation is the first step of inner unfolding" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <div className="card-wrapper" style={{ fontSize: "14px" }}>
                                                <div className="card-tag">
                                                    <a href="#" className="span hover-2">#Design</a>

                                                    <a href="#" className="span hover-2">#frontend</a>
                                                </div>

                                                <div className="wrapper">
                                                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                                                    <span className="span">Devoted 45 hrs</span>
                                                </div>
                                            </div>

                                            <h3 className="headline headline-3">
                                                <a href="#" className="card-title hover-2" style={{ fontSize: "20px", fontWeight: "bolder" }}>
                                                    The best way to predict the future is to invent it.
                                                </a>
                                            </h3>

                                            <div className="card-wrapper">

                                                <div className="profile-card">
                                                    <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                                                        className="profile-banner" />

                                                    <div>
                                                        <p className="card-title" style={{ fontSize: "17px" }}>Akshat</p>

                                                        <p className="card-subtitle" style={{ fontSize: "14px" }}>Member</p>
                                                    </div>
                                                </div>

                                                <a href="#" className="card-btn" style={{ fontSize: "14px" }}>Read more</a>

                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="card feature-card">
                                        {/* style="--width: 507; --height: 618;" */}
                                        <figure className="card-banner img-holder">
                                            <img src="./assets/images/featured-4.png" width="1602" height="903" loading="lazy"
                                                alt="Self-observation is the first step of inner unfolding" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <div className="card-wrapper" style={{ fontSize: "14px" }}>
                                                <div className="card-tag">
                                                    <a href="#" className="span hover-2">#frontend</a>

                                                    <a href="#" className="span hover-2">#materialUI</a>
                                                </div>

                                                <div className="wrapper">
                                                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                                                    <span className="span">Devoted 60 hrs</span>
                                                </div>
                                            </div>

                                            <h3 className="headline headline-3">
                                                <a href="#" className="card-title hover-2" style={{ fontSize: "20px", fontWeight: "bolder" }}>
                                                    Believe you can and you're halfway there.
                                                </a>
                                            </h3>

                                            <div className="card-wrapper">

                                                <div className="profile-card">
                                                    <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                                                        className="profile-banner" />

                                                    <div>
                                                        <p className="card-title" style={{ fontSize: "17px" }}>Aarjav</p>

                                                        <p className="card-subtitle" style={{ fontSize: "14px" }}>Member</p>
                                                    </div>
                                                </div>

                                                <a href="#" className="card-btn" style={{ fontSize: "14px" }}>Read more</a>

                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="card feature-card">
                                        {/* style="--width: 507; --height: 618;" */}
                                        <figure className="card-banner img-holder">
                                            <img src="./assets/images/featured-5.png" width="1602" height="903" loading="lazy"
                                                alt="Self-observation is the first step of inner unfolding" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <div className="card-wrapper" style={{ fontSize: "14px" }}>
                                                <div className="card-tag">
                                                    <a href="#" className="span hover-2">#frontend</a>

                                                </div>

                                                <div className="wrapper">
                                                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                                                    <span className="span">Devoted 25 hrs</span>
                                                </div>
                                            </div>

                                            <h3 className="headline headline-3">
                                                <a href="#" className="card-title hover-2" style={{ fontSize: "20px", fontWeight: "bolder" }}>
                                                    Life is a journey, not a destination.
                                                </a>
                                            </h3>

                                            <div className="card-wrapper">

                                                <div className="profile-card">
                                                    <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                                                        className="profile-banner" />

                                                    <div>
                                                        <p className="card-title" style={{ fontSize: "17px" }}>Raghunandan</p>

                                                        <p className="card-subtitle" style={{ fontSize: "14px" }}>Member</p>
                                                    </div>
                                                </div>

                                                <a href="#" className="card-btn" style={{ fontSize: "14px" }}>Read more</a>

                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="card feature-card">
                                        {/* style="--width: 507; --height: 618;" */}
                                        <figure className="card-banner img-holder">
                                            <img src="./assets/images/featured-5.png" width="1602" height="903" loading="lazy"
                                                alt="Self-observation is the first step of inner unfolding" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <div className="card-wrapper" style={{ fontSize: "14px" }}>
                                                <div className="card-tag">
                                                    <a href="#" className="span hover-2">#frontend</a>

                                                </div>

                                                <div className="wrapper">
                                                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                                                    <span className="span">Devoted 45 hrs</span>
                                                </div>
                                            </div>

                                            <h3 className="headline headline-3">
                                                <a href="#" className="card-title hover-2" style={{ fontSize: "20px", fontWeight: "bolder" }}>
                                                    Good code is its own best documentation.
                                                </a>
                                            </h3>

                                            <div className="card-wrapper">

                                                <div className="profile-card">
                                                    <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                                                        className="profile-banner" />

                                                    <div>
                                                        <p className="card-title" style={{ fontSize: "17px" }}>Dhruv</p>

                                                        <p className="card-subtitle" style={{ fontSize: "14px" }}>Member</p>
                                                    </div>
                                                </div>

                                                <a href="#" className="card-btn" style={{ fontSize: "14px" }}>Read more</a>

                                            </div>

                                        </div>

                                    </div>
                                </li>

                            </ul>

                            {/* <a href="#" className="btn btn-secondary">
                                <span className="span">Show More Posts</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </a> */}

                        </div>

                        <img src={sh3} width="500" height="1500" loading="lazy" alt="" className="feature-bg" />

                    </section>





                    <section className="tags" aria-labelledby="tag-label">
                        <div className="container w-7/12">

                            <h2 className="headline headline-2 section-title" id="tag-label">
                                <span className="span" style={{ fontSize: "45px", fontWeight: "bolder" }}>Wings & Clubs</span>
                            </h2>

                            <p className="section-text" style={{ fontSize: "18px" }}>
                                Things a College must have !!
                            </p>

                            <ul className="grid-list" style={{ fontSize: "18px" }}>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag1.png" width="32" height="32" loading="lazy" alt="Travel" /> */}
                                        <div className='muiIcon'><ClosedCaptionOffIcon /></div>
                                        <p className="btn-text">Comp. Programming</p>
                                    </button>
                                </li>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag2.png" width="32" height="32" loading="lazy" alt="Culture" /> */}
                                        <div className='muiIcon'><CodeIcon /></div>

                                        <p className="btn-text">Website Develop.</p>
                                    </button>
                                </li>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag3.png" width="32" height="32" loading="lazy" alt="Lifestyle" /> */}
                                        <div className='muiIcon'><DeveloperModeIcon /></div>

                                        <p className="btn-text">App Develop.</p>
                                    </button>
                                </li>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag4.png" width="32" height="32" loading="lazy" alt="Fashion" /> */}
                                        <div className='muiIcon'><PrecisionManufacturingIcon /></div>

                                        <p className="btn-text">Machine Learning</p>
                                    </button>
                                </li>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag5.png" width="32" height="32" loading="lazy" alt="Food" /> */}
                                        <div className='muiIcon'><CurrencyBitcoinIcon /></div>

                                        <p className="btn-text">Blockchain & Design</p>
                                    </button>
                                </li>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag6.png" width="32" height="32" loading="lazy" alt="Space" /> */}
                                        <div className='muiIcon'><GitHubIcon /></div>

                                        <p className="btn-text">Infosec & Foss</p>
                                    </button>
                                </li>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag7.png" width="32" height="32" loading="lazy" alt="Animal" /> */}
                                        <div className='muiIcon'><LibraryMusicIcon /></div>

                                        <p className="btn-text">Estrella</p>
                                    </button>
                                </li>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag8.png" width="32" height="32" loading="lazy" alt="Minimal" /> */}

                                        <div className='muiIcon'><EmojiPeopleIcon /></div>
                                        <p className="btn-text">Zephyr</p>
                                    </button>
                                </li>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag9.png" width="32" height="32" loading="lazy" alt="Interior" /> */}
                                        <div className='muiIcon'><AutoStoriesIcon /></div>

                                        <p className="btn-text">Crotonia</p>
                                    </button>
                                </li>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag10.png" width="32" height="32" loading="lazy" alt="Plant" /> */}
                                        <div className='muiIcon'><SentimentVerySatisfiedIcon /></div>

                                        <p className="btn-text">Goonj</p>
                                    </button>
                                </li>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag11.png" width="32" height="32" loading="lazy" alt="Nature" /> */}
                                        <div className='muiIcon'><CameraIcon /></div>

                                        <p className="btn-text">AfterDark</p>
                                    </button>
                                </li>

                                <li>
                                    <button className="card tag-btn">
                                        {/* <img src="./assets/images/tag12.png" width="32" height="32" loading="lazy" alt="Business" /> */}
                                        <div className='muiIcon'><BrushIcon /></div>

                                        <p className="btn-text">Utkrisht</p>
                                    </button>
                                </li>

                            </ul>

                        </div>
                    </section>





                    <section className="section recent-post" id="recent" aria-labelledby="recent-label">
                        <div className="container w-7/12">

                            <div className="post-main">

                                <h2 className="headline headline-2 section-title">
                                    <span className="span" style={{ fontSize: "45px", fontWeight: "bolder" }}>Contributions</span>
                                </h2>

                                <p className="section-text" style={{ fontSize: "18px" }}>
                                    Team Performance Breakdown
                                </p>

                                <ul className="grid-list">

                                    <li>
                                        <div className="recent-post-card">
                                            {/* style="--width: 271; --height: 258;" */}
                                            <figure className="card-banner img-holder">
                                                <img src={recPost1} width="271" height="258" loading="lazy"
                                                    alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <a href="#" className="card-badge" style={{fontSize: "14px"}}>Monark Jain</a>

                                                <h3 className="headline headline-3 card-title">
                                                    <a href="#" className="link hover-2" style={{fontSize: "23px", fontWeight: "bolder"}}>Helpful Tips for Working from Home as a Freelancer</a>
                                                </h3>

                                                <p className="card-text" style={{fontSize: "14px"}}>
                                                    Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                                                    roadrunner flapped lynx far that and jeepers giggled far and far
                                                </p>

                                                <div className="card-wrapper" style={{ fontSize: "14px" }}>
                                                    <div className="card-tag">
                                                        <a href="#" className="span hover-2"># Travel</a>

                                                        <a href="#" className="span hover-2"># Lifestyle</a>
                                                    </div>

                                                    <div className="wrapper">
                                                        <ion-icon name="time-outline" aria-hidden="true" style={{ fontSize: "14px" }}></ion-icon>

                                                        <span className="span">3 mins read</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                    <li>
                                        <div className="recent-post-card">
                                            {/* style="--width: 271; --height: 258;" */}
                                            <figure className="card-banner img-holder">
                                                <img src="./assets/images/recent-post-2.jpg" width="271" height="258" loading="lazy"
                                                    alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <a href="#" className="card-badge" style={{ fontSize: "14px" }}>Ayush Sharma</a>

                                                <h3 className="headline headline-3 card-title" style={{ fontSize: "23px", fontWeight: "bolder" }}>
                                                    <a href="#" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                                                </h3>

                                                <p className="card-text" style={{ fontSize: "14px" }}>
                                                    Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                                                    roadrunner flapped lynx far that and jeepers giggled far and far
                                                </p>

                                                <div className="card-wrapper" style={{ fontSize: "14px" }}>
                                                    <div className="card-tag">
                                                        <a href="#" className="span hover-2"># Travel</a>

                                                        <a href="#" className="span hover-2"># Lifestyle</a>
                                                    </div>

                                                    <div className="wrapper">
                                                        <ion-icon name="time-outline" aria-hidden="true" style={{ fontSize: "14px" }}></ion-icon>

                                                        <span className="span">3 mins read</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                    <li>
                                        <div className="recent-post-card">
                                            {/* style="--width: 271; --height: 258;" */}
                                            <figure className="card-banner img-holder">
                                                <img src="./assets/images/recent-post-3.jpg" width="271" height="258" loading="lazy"
                                                    alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <a href="#" className="card-badge" style={{ fontSize: "14px" }}>Aarjav Jain</a>

                                                <h3 className="headline headline-3 card-title" style={{ fontSize: "23px", fontWeight: "bolder" }}>
                                                    <a href="#" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                                                </h3>

                                                <p className="card-text" style={{ fontSize: "14px" }}>
                                                    Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                                                    roadrunner flapped lynx far that and jeepers giggled far and far
                                                </p>

                                                <div className="card-wrapper" style={{ fontSize: "14px" }}>
                                                    <div className="card-tag">
                                                        <a href="#" className="span hover-2"># Travel</a>

                                                        <a href="#" className="span hover-2"># Lifestyle</a>
                                                    </div>

                                                    <div className="wrapper">
                                                        <ion-icon name="time-outline" aria-hidden="true" style={{ fontSize: "14px" }}></ion-icon>

                                                        <span className="span">3 mins read</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                    <li>
                                        <div className="recent-post-card">
                                            {/* style="--width: 271; --height: 258;" */}
                                            <figure className="card-banner img-holder">
                                                <img src="./assets/images/recent-post-4.jpg" width="271" height="258" loading="lazy"
                                                    alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <a href="#" className="card-badge" style={{ fontSize: "14px" }}>Akshat Bhansali</a>

                                                <h3 className="headline headline-3 card-title" style={{ fontSize: "23px", fontWeight: "bolder" }}>
                                                    <a href="#" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                                                </h3>

                                                <p className="card-text" style={{ fontSize: "14px" }}>
                                                    Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                                                    roadrunner flapped lynx far that and jeepers giggled far and far
                                                </p>

                                                <div className="card-wrapper" style={{ fontSize: "14px" }}>
                                                    <div className="card-tag">
                                                        <a href="#" className="span hover-2"># Travel</a>

                                                        <a href="#" className="span hover-2"># Lifestyle</a>
                                                    </div>

                                                    <div className="wrapper">
                                                        <ion-icon name="time-outline" aria-hidden="true" style={{ fontSize: "14px" }}></ion-icon>

                                                        <span className="span">3 mins read</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                    <li>
                                        <div className="recent-post-card">
                                            {/* style="--width: 271; --height: 258;" */}
                                            <figure className="card-banner img-holder">
                                                <img src="./assets/images/recent-post-5.jpg" width="271" height="258" loading="lazy"
                                                    alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <a href="#" className="card-badge" style={{ fontSize: "14px" }}>Dhruv Bharuka</a>

                                                <h3 className="headline headline-3 card-title" style={{ fontSize: "23px", fontWeight: "bolder" }}>
                                                    <a href="#" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                                                </h3>

                                                <p className="card-text" style={{ fontSize: "14px" }}>
                                                    Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                                                    roadrunner flapped lynx far that and jeepers giggled far and far
                                                </p>

                                                <div className="card-wrapper" style={{ fontSize: "14px" }}>
                                                    <div className="card-tag">
                                                        <a href="#" className="span hover-2"># Travel</a>

                                                        <a href="#" className="span hover-2"># Lifestyle</a>
                                                    </div>

                                                    <div className="wrapper">
                                                        <ion-icon name="time-outline" aria-hidden="true" style={{ fontSize: "14px" }}></ion-icon>

                                                        <span className="span">3 mins read</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                    <li>
                                        <div className="recent-post-card">
                                            {/* style="--width: 271; --height: 258;" */}
                                            <figure className="card-banner img-holder">
                                                <img src="./assets/images/recent-post-5.jpg" width="271" height="258" loading="lazy"
                                                    alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <a href="#" className="card-badge" style={{ fontSize: "14px" }}>Raghunandan</a>

                                                <h3 className="headline headline-3 card-title" style={{ fontSize: "23px", fontWeight: "bolder" }}>
                                                    <a href="#" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                                                </h3>

                                                <p className="card-text" style={{ fontSize: "14px" }}>
                                                    Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                                                    roadrunner flapped lynx far that and jeepers giggled far and far
                                                </p>

                                                <div className="card-wrapper" style={{ fontSize: "14px" }}>
                                                    <div className="card-tag">
                                                        <a href="#" className="span hover-2"># Travel</a>

                                                        <a href="#" className="span hover-2"># Lifestyle</a>
                                                    </div>

                                                    <div className="wrapper">
                                                        <ion-icon name="time-outline" aria-hidden="true" style={{ fontSize: "14px" }}></ion-icon>

                                                        <span className="span">3 mins read</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                </ul>

                                {/* <nav aria-label="pagination" className="pagination" style={{ fontSize: "20px" }}>

                                    <a href="#" className="pagination-btn" aria-label="previous page">
                                        <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
                                    </a>

                                    <a href="#" className="pagination-btn">1</a>
                                    <a href="#" className="pagination-btn">2</a>
                                    <a href="#" className="pagination-btn">3</a>
                                    <a href="#" className="pagination-btn" aria-label="more page">...</a>

                                    <a href="#" className="pagination-btn" aria-label="next page">
                                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                    </a>

                                </nav> */}

                            </div>

                            <div className="post-aside grid-list">

                                <div className="card aside-card">

                                    <h3 className="headline headline-2 aside-title">
                                        <span className="span" style={{ fontSize: "20px", fontWeight: "bolder" }}>Popular Posts</span>
                                    </h3>

                                    <ul className="popular-list">

                                        <li>
                                            <div className="popular-card">

                                                {/* style="--width: 64; --height: 64;" */}
                                                <figure className="card-banner img-holder" >
                                                    <img src="./assets/images/popular-post-1.jpg" width="64" height="64" loading="lazy"
                                                        alt="Creating is a privilege but it’s also a gift" className="img-cover" />
                                                </figure>

                                                <div className="card-content">

                                                    <h4 className="headline headline-4 card-title">
                                                        <a href="#" className="link hover-2" style={{ fontSize: "16px", fontWeight: "bolder" }}>Creating is a privilege but it’s also a gift</a>
                                                    </h4>

                                                    <div className="warpper" style={{fontSize: "14px"}}>
                                                        <p className="card-subtitle">15 mins read</p>

                                                        <time className="publish-date" dateTime="2022-04-15">15 April 2022</time>
                                                    </div>

                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="popular-card">

                                                {/* style="--width: 64; --height: 64;" */}
                                                <figure className="card-banner img-holder" >
                                                    <img src="./assets/images/popular-post-2.jpg" width="64" height="64" loading="lazy"
                                                        alt="Being unique is better than being perfect" className="img-cover" />
                                                </figure>

                                                <div className="card-content">

                                                    <h4 className="headline headline-4 card-title">
                                                        <a href="#" className="link hover-2" style={{ fontSize: "16px", fontWeight: "bolder" }}>Being unique is better than being perfect</a>
                                                    </h4>

                                                    <div className="warpper" style={{ fontSize: "14px" }}>
                                                        <p className="card-subtitle">15 mins read</p>

                                                        <time className="publish-date" dateTime="2022-04-15">15 April 2022</time>
                                                    </div>

                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="popular-card">

                                                {/* style="--width: 64; --height: 64;" */}
                                                <figure className="card-banner img-holder" >
                                                    <img src="./assets/images/popular-post-3.jpg" width="64" height="64" loading="lazy"
                                                        alt="Every day, in every city and town across the country" className="img-cover" />
                                                </figure>

                                                <div className="card-content">

                                                    <h4 className="headline headline-4 card-title">
                                                        <a href="#" className="link hover-2" style={{ fontSize: "16px", fontWeight: "bolder" }}>Every day, in every city and town across the country</a>
                                                    </h4>

                                                    <div className="warpper" style={{ fontSize: "14px" }}>
                                                        <p className="card-subtitle">15 mins read</p>

                                                        <time className="publish-date" dateTime="2022-04-15">15 April 2022</time>
                                                    </div>

                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="popular-card">

                                                {/* style="--width: 64; --height: 64;" */}
                                                <figure className="card-banner img-holder" >
                                                    <img src="./assets/images/popular-post-4.jpg" width="64" height="64" loading="lazy"
                                                        alt="Your voice, your mind, your story, your vision" className="img-cover" />
                                                </figure>

                                                <div className="card-content">

                                                    <h4 className="headline headline-4 card-title">
                                                        <a href="#" className="link hover-2" style={{ fontSize: "16px", fontWeight: "bolder" }}>Your voice, your mind, your story, your vision</a>
                                                    </h4>

                                                    <div className="warpper" style={{ fontSize: "14px" }}>
                                                        <p className="card-subtitle">15 mins read</p>

                                                        <time className="publish-date" dateTime="2022-04-15">15 April 2022</time>
                                                    </div>

                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="popular-card">

                                                {/* style="--width: 64; --height: 64;" */}
                                                <figure className="card-banner img-holder" >
                                                    <img src="./assets/images/popular-post-2.jpg" width="64" height="64" loading="lazy"
                                                        alt="Being unique is better than being perfect" className="img-cover" />
                                                </figure>

                                                <div className="card-content">

                                                    <h4 className="headline headline-4 card-title" style={{ fontSize: "16px", fontWeight: "bolder" }}>
                                                        <a href="#" className="link hover-2">Being unique is better than being perfect</a>
                                                    </h4>

                                                    <div className="warpper" style={{ fontSize: "14px" }}>
                                                        <p className="card-subtitle">15 mins read</p>

                                                        <time className="publish-date" dateTime="2022-04-15">15 April 2022</time>
                                                    </div>

                                                </div>

                                            </div>
                                        </li>

                                    </ul>

                                </div>

                                <div className="card aside-card">

                                    <h3 className="headline headline-2 aside-title">
                                        <span className="span" style={{ fontSize: "20px", fontWeight: "bolder" }}>Last Comment</span>
                                    </h3>

                                    <ul className="comment-list">

                                        <li>
                                            <div className="comment-card">

                                                <blockquote className="card-text" style={{fontSize: "14px"}}>
                                                    “ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                                                    roadrunner “
                                                </blockquote>

                                                <div className="profile-card">
                                                    <figure className="profile-banner img-holder">
                                                        <img src="./assets/images/author-6.png" width="32" height="32" loading="lazy" alt="Jane Cooper" />
                                                    </figure>

                                                    <div style={{ fontSize: "14px" }}>
                                                        <p className="card-title">Jane Cooper</p>

                                                        <time className="card-date" dateTime="2022-04-15" style={{ fontSize: "14px" }}>15 April 2022</time>
                                                    </div>
                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="comment-card">

                                                <blockquote className="card-text" style={{ fontSize: "14px" }}>
                                                    “ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                                                    roadrunner “
                                                </blockquote>

                                                <div className="profile-card">
                                                    <figure className="profile-banner img-holder">
                                                        <img src="./assets/images/author-7.png" width="32" height="32" loading="lazy" alt="Katen Doe" />
                                                    </figure>

                                                    <div style={{ fontSize: "14px" }}>
                                                        <p className="card-title">Katen Doe</p>

                                                        <time className="card-date" dateTime="2022-04-15" style={{ fontSize: "14px" }}>15 April 2022</time>
                                                    </div>
                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="comment-card">

                                                <blockquote className="card-text" style={{ fontSize: "14px" }}>
                                                    “ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                                                    roadrunner “
                                                </blockquote>

                                                <div className="profile-card">
                                                    <figure className="profile-banner img-holder">
                                                        <img src="./assets/images/author-8.png" width="32" height="32" loading="lazy"
                                                            alt="Barbara Cartland" />
                                                    </figure>

                                                    <div style={{ fontSize: "14px" }}>
                                                        <p className="card-title">Barbara Cartland</p>

                                                        <time className="card-date" dateTime="2022-04-15" style={{ fontSize: "14px" }}>15 April 2022</time>
                                                    </div>
                                                </div>

                                            </div>
                                        </li>

                                    </ul>

                                </div>

                                <div className="card aside-card insta-card">

                                    <a href="#" className="logo">
                                        <img src="./assets/images/logo.svg" width="119" height="37" loading="lazy" alt="Wren logo" />
                                    </a>

                                    <p className="card-text" style={{ fontSize: "17px" }}>
                                        Follow us on instagram
                                    </p>

                                    <ul className="insta-list">

                                        <li>
                                            {/* style="--width: 276; --height: 277;" */}
                                            <a href="#" className="insta-post img-holder" >
                                                <img src="./assets/images/insta-post-1.png" width="276" height="277" loading="lazy" alt="insta post"
                                                    className="img-cover" />
                                            </a>
                                        </li>

                                        <li>
                                            {/* style="--width: 276; --height: 277;" */}
                                            <a href="#" className="insta-post img-holder" >
                                                <img src="./assets/images/insta-post-2.png" width="276" height="277" loading="lazy" alt="insta post"
                                                    className="img-cover" />
                                            </a>
                                        </li>

                                        <li>
                                            {/* style="--width: 276; --height: 277;" */}
                                            <a href="#" className="insta-post img-holder" >
                                                <img src="./assets/images/insta-post-3.png" width="276" height="277" loading="lazy" alt="insta post"
                                                    className="img-cover" />
                                            </a>
                                        </li>

                                        <li>
                                            {/* style="--width: 276; --height: 277;" */}
                                            <a href="#" className="insta-post img-holder" >
                                                <img src="./assets/images/insta-post-4.png" width="276" height="277" loading="lazy" alt="insta post"
                                                    className="img-cover" />
                                            </a>
                                        </li>

                                        <li>
                                            {/* style="--width: 276; --height: 277;" */}
                                            <a href="#" className="insta-post img-holder" >
                                                <img src="./assets/images/insta-post-5.png" width="276" height="277" loading="lazy" alt="insta post"
                                                    className="img-cover" />
                                            </a>
                                        </li>

                                        <li>
                                            {/* style="--width: 276; --height: 277;" */}
                                            <a href="#" className="insta-post img-holder" >
                                                <img src="./assets/images/insta-post-6.png" width="276" height="277" loading="lazy" alt="insta post"
                                                    className="img-cover" />
                                            </a>
                                        </li>

                                        <li>
                                            {/* style="--width: 276; --height: 277;" */}
                                            <a href="#" className="insta-post img-holder" >
                                                <img src="./assets/images/insta-post-7.png" width="276" height="277" loading="lazy" alt="insta post"
                                                    className="img-cover" />
                                            </a>
                                        </li>

                                        <li>
                                            {/* style="--width: 276; --height: 277;" */}
                                            <a href="#" className="insta-post img-holder" >
                                                <img src="./assets/images/insta-post-8.png" width="276" height="277" loading="lazy" alt="insta post"
                                                    className="img-cover" />
                                            </a>
                                        </li>

                                        <li>
                                            {/* style="--width: 276; --height: 277;" */}
                                            <a href="#" className="insta-post img-holder" >
                                                <img src="./assets/images/insta-post-9.png" width="276" height="277" loading="lazy" alt="insta post"
                                                    className="img-cover" />
                                            </a>
                                        </li>

                                    </ul>

                                </div>

                            </div>

                        </div>
                    </section>

                </article>
            </main>

            <footer className='aboutUsFooter'>
                <div className="container w-8/12">

                    <div className="card footer">

                        <div className="section footer-top">

                            <div className="footer-brand">

                                <a href="#" className="logo">
                                    <img src="./assets/images/logo.svg" width="119" height="37" loading="lazy" alt="Wren logo" />
                                </a>

                                <p className="footer-text" style={{fontSize:"15px"}}>
                                    When an unknown prnoto sans took a galley and scrambled it to make specimen book not only five When an
                                    unknown prnoto sans took a galley and scrambled it to five centurie.
                                </p>

                                <p className="footer-list-title" style={{ fontSize: "18px" }}>Address</p>

                                <address className="footer-text address" style={{ fontSize: "15px" }}>
                                    123 Main Street <br />
                                    New York, NY 10001
                                </address>

                            </div>

                            <div className="footer-list">

                                <p className="footer-list-title" style={{ fontSize: "20px" }}>Categories</p>

                                <ul>

                                    <li>
                                        <a href="#" className="footer-link hover-2">Action</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-link hover-2">Business</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-link hover-2">Adventure</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-link hover-2">Canada</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-link hover-2">America</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-link hover-2">Curiosity</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-link hover-2">Animal</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-link hover-2">Dental</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-link hover-2">Biology</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-link hover-2">Design</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-link hover-2">Breakfast</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-link hover-2">Dessert</a>
                                    </li>

                                </ul>

                            </div>

                            <div className="footer-list">

                                <p className="footer-list-title" style={{ fontSize: "20px" }}>Newsletter</p>

                                <p className="footer-text">
                                    Sign up to be first to receive the latest stories inspiring us, case studies, and industry news.
                                </p>

                                <div className="input-wrapper">
                                    <input type="text" name="name" placeholder="Your name" required className="input-field about-input" autoComplete="off" style={{ fontSize: "16px" }} />

                                    <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                                </div>

                                <div className="input-wrapper">
                                    <input type="email" name="email_address" placeholder="Emaill address" required className="input-field about-input"
                                        autoComplete="off" style={{ fontSize: "16px" }}/>

                                    <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                                </div>

                                <a href="#" className="btn btn-primary">
                                    <span className="span" style={{ fontSize: "14px" }}>Subscribe</span>

                                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                </a>

                            </div>

                        </div>

                        <div className="footer-bottom">

                            <p className="copyright">
                                &copy; Developed by <a href="#" className="copyright-link">bruteforce</a>
                            </p>

                            <ul className="social-list">

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>

                                        <span className="span">Twitter</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>

                                        <span className="span">LinkedIn</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-instagram"></ion-icon>

                                        <span className="span">Instagram</span>
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>
            </footer>





            <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
                <ion-icon name="arrow-up-outline" aria-hidden="true"></ion-icon>
            </a>



            <script src="./assets/js/script.js"></script>


            

        </div>
    )
}

export default AboutUs
