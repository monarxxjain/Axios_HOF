import React from 'react'
import { motion } from "framer-motion";
import {pattern2, pattern3,shadow1,shadow2} from "../../assets/index";
import './Users.css'
export default function Users() {
    return (
        <motion.div
            initial={{ opacity: 0, x: "1000px", y: "-1000px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "100px", y: "-1000px" }}
            transition={{ duration: 0.5 }}
            className="bg-primary w-full overflow-hidden">

            <div className="usersPage">
                {/* <header class="header" data-header>
                    <div class="container">

                        <a href="#" class="logo">
                            <h4 class="pageTitle">
                                Users
                            </h4>
                        </a>

                        <nav class="navbar" data-navbar>

                            <div class="navbar-top">
                                <a href="#" class="logo">
                                    <img src="./assets/images/logo.svg" width="119" height="37" alt="Wren logo" />
                                </a>

                                <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
                                    <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                                </button>
                            </div>

                            <ul class="navbar-list">

                                <li>
                                    <a href="/index" class="navbar-link hover-1" data-nav-toggler>Home</a>
                                </li>

                                <li>
                                    <a href="/gallery" class="navbar-link hover-1" data-nav-toggler>Gallery</a>
                                </li>

                                <li>
                                    <a href="/users" class="navbar-link hover-1" data-nav-toggler>Users</a>
                                </li>

                                <li>
                                    <a href="/aboutus" class="navbar-link hover-1" data-nav-toggler>About Us</a>
                                </li>

                                <li>
                                    <a href="/contactus" class="navbar-link hover-1" data-nav-toggler>Contact Us</a>
                                </li>

                                <li>
                                    <a href="/" class="navbar-link hover-1" data-nav-toggler>Logout</a>
                                </li>

                            </ul>

                        </nav>

                    </div>
                </header> */}





                <main>
                    <article>

                        <section class="hero" id="home" aria-label="home">
                            <div class="container">

                                <div class="hero-content">

                                    <p class="hero-subtitle">Presenting to you !</p>


                                    <h1 class="headline headline-1 section-title">
                                        Our <span class="span">Users</span>
                                    </h1>

                                    <p class="hero-text">
                                        Welcome to our user details page, where you can unlock the full potential of your data. Our intuitive
                                        platform allows you to easily visualize and analyze your information, giving you deep insights and
                                        enabling
                                        smarter decision-making.
                                    </p>

                                    <div class="input-wrapper">

                                        <input type="email" name="email_address" placeholder="Search by Username" required class="input-field"
                                            autocomplete="off" />

                                        <button class="btn1 btn1-primary">
                                            <span class="span">Search</span>

                                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                                        </button>

                                    </div>

                                </div>

                                <div class="hero-banner">


                                    <img src={pattern2} width="27" height="26" alt="shape" class="shape shape-1" />

                                    <img src={pattern3} width="27" height="26" alt="shape" class="shape shape-2" />

                                </div>

                                <img src={shadow1} width="500" height="800" alt="" class="hero-bg hero-bg-1" />

                                <img src={shadow2} width="500" height="500" alt="" class="hero-bg hero-bg-2" />

                            </div>
                        </section>






                        <section class="topics" id="topics" aria-labelledby="topic-label">
                            <div class="container">

                                <div class="card topic-card">

                                    <div class="card-content">
                                        <button class="btn1 btn1-primary" id="dataBtn" onclick="fetchData()">
                                            <span class="span">Fetch Data</span>

                                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                                        </button>
                                        <h2 class="headline headline-2 section-title card-title" id="topic-label">
                                            All Users
                                        </h2>

                                        <p class="card-text">
                                            Visualize and analyze your information like
                                            never before...
                                        </p>

                                        <div class="btn-group">
                                            <button class="btn-icon" aria-label="previous" data-slider-prev>
                                                <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
                                            </button>

                                            <button class="btn-icon" aria-label="next" data-slider-next>
                                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                            </button>
                                        </div>

                                    </div>

                                    <div class="slider" data-slider id="slider">
                                        <ul class="slider-list" data-slider-container id="listAll">



                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </section>

                    </article>
                </main>








                
            </div>

        </motion.div>
    )
}
