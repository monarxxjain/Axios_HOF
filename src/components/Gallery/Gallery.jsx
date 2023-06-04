import React, { useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import { estrella, zephyr, utkrisht, goonj, afterdark, crotonia, gal2, gal3 } from "../../assets/index";
import './Gallery.css'
import { motion } from "framer-motion";
export default function Gallery() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // when window width is >= 600px
        breakpoints: {
            600: {
                slidesPerView: 2
            }
        }
    });







    // const nav = useRef(null);

    // useEffect(() => {
    //     const handleScroll = event => {
    //         document
    //             .querySelector("nav")
    //             .classList.toggle("window-scroll", window.scrollY > 0);
    //     };

    //     const element = nav.current;

    //     element.addEventListener('scroll', handleScroll);

    //     return () => {
    //         element.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // window.addEventListener("scroll", () => {
    //     document
    //         .querySelector("nav")
    //         .classList.toggle("window-scroll", window.scrollY > 0);
    // });










    // show/hide nav menu
    // const menu = document.querySelector(".nav__menu");
    // const menuBtn = document.querySelector("#open-menu-btn");
    // const closeBtn = document.querySelector("#close-menu-btn");
    // const openMenuBtn = useRef(null);

    // useEffect(() => {
    //     const handleOpenMenuBtn = () => {
    //         menu.style.display = "flex";
    //         closeBtn.style.display = "inline-block";
    //         menuBtn.style.display = "none";
    //     };

    //     const element = openMenuBtn.current;

    //     element.addEventListener('click', handleOpenMenuBtn);

    //     return () => {
    //         element.removeEventListener('click', handleOpenMenuBtn);
    //     };
    // }, []);

    // menuBtn.addEventListener("click", () => {
    //     menu.style.display = "flex";
    //     closeBtn.style.display = "inline-block";
    //     menuBtn.style.display = "none";
    // });



    // const closeMenuBtn = useRef(null);

    // useEffect(() => {
    //     const handleCloseMenuBtn = () => {
    //         menu.style.display = "none";
    //         closeBtn.style.display = "none";
    //         menuBtn.style.display = "inline-block";
    //     };

    //     const element = closeMenuBtn.current;

    //     element.addEventListener('click', handleCloseMenuBtn);

    //     return () => {
    //         element.removeEventListener('click', handleCloseMenuBtn);
    //     };
    // }, []);


    // close nav menu
    // const closeNav = () => {
    //     menu.style.display = "none";
    //     closeBtn.style.display = "none";
    //     menuBtn.style.display = "inline-block";
    // };

    // closeBtn.addEventListener("click", closeNav);








    //  Start of Scroll-to-Top button

    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;

        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }

        Monark();

        // scrollProgress.addEventListener("click", () => {
        //     document.documentElement.scrollTop = 0;
        // });

        scrollProgress.style.background = `conic-gradient(#0077B5 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    const pro = useRef(null);
    function Monark() {
        useEffect(() => {
            const handlePro = () => {
                document.documentElement.scrollTop = 0;
            };

            const element = pro.current;

            element.addEventListener('click', handlePro);

            return () => {
                element.removeEventListener('click', handlePro);
            };
        }, []);
    }





    //Pure counter
    new PureCounter();

    new PureCounter({
        selector: ".purecounter",

        start: 0,
        end: 100,
        duration: 2,
        delay: 10,
        once: true,
        pulse: false,
        decimals: 0,
        legacy: true,
        filesizing: false,
        currency: false,
        formater: "us-US",
        separator: false,
    });

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;





    // Type Writer Effect -
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName("typewrite");
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute("data-type");
            var period = elements[i].getAttribute("data-period");
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    };



    return (
        <motion.div
            initial={{ opacity: 0, x: "1000px", y: "-1000px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "100px", y: "-1000px" }}
            transition={{ duration: 0.5 }}
            className="bg-primary w-full overflow-hidden">
        <div className='galPage'>
            {/* <nav ref={nav}>
                <div className="container nav__container grad">
                    <a href="index.html">
                        <h4 className="text-5xl ">Gallery</h4>
                    </a>
                    <ul className="nav__menu">
                        <li><a to="/">HOME</a></li>
                        <li><a to="/gallery">GALLERY</a></li>
                        <li><a to="/users">USERS</a></li>
                        <li><a to="/contactus">CONTACT</a></li>
                        <li><a to="/aboutus">ABOUT</a></li>
                        <li><a to="/akshat">LOGOUT</a></li>
                    </ul>
                    <button ref={openMenuBtn} id="open-menu-btn"><i className="uil uil-bars"></i></button>
                    <button ref={closeMenuBtn} id="close-menu-btn"><i className="uil uil-multiply"></i></button>
                </div>
            </nav> */}








            <section className="landingpg text-gray-400  body-font">

                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className=" grad1 button  ml-96 pt-40  flex flex-col md:items-start md:text-left mb-16  items-center text-center">
                        <h1 className="pge1 title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            <b> Exploring <br />
                                <span>Campus Artistry</span>
                                <br className="hidden lg:inline-block" />: A Gallery
                            </b>
                        </h1>
                        <h1>
                            {/* style="font-size: 0.7em;" */}
                            <span href="" className="typewrite" data-period="2000"
                                data-type='[ "Unforgettable College Moments.", "Timeless College Reminiscences.", "Artistic Campus Showcase."]'>
                                <span className="wrap"></span>
                            </span>
                        </h1>
                    </div>
                    <div className="grad1 xs:hidden xl:block button ml-40 pt-40 flex flex-col mb-16 mr-40 p-20 pb-40 items-center text-center">
                        <img className="hero-right p-10 pb-20 ml-20" alt="hero" id="mygal" src={gal2} />
                    </div>
                </div>
                <div className="social-menu">
                    <ul>
                        {/* style="display: none;" */}
                        <li><a href="">
                            <i className="fa fa-facebook"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram"></i></a></li>
                        <li><a href=""><i className="fa fa-youtube"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </section>









            <section id="about">
                <div className="container about__achievements-container">
                    <div className="about__achievements-left">
                        <img className="grad2" id="mygal3" src={gal3} width="10vmin" />
                    </div>

                    <div className="about__achievements-right ">
                        <h1 className="vision grad3">College Life</h1>
                        <p>
                            College life is a unique experience that is full of memories that can last a lifetime. It offers students the
                            opportunity to learn and grow, both academically and personally, while also making lasting connections with
                            peers and mentors.
                            <br /><br />
                            The college experience is not just about attending classNamees and studying for exams; it's
                            about discovering oneself, learning new things, and creating unforgettable moments. These moments can range
                            from joining a club or organization, attending a sports event, or simply hanging out with friends late at
                            night.
                            <br /><br />
                            It's important to cherish and save these moments because they help shape who we are and can serve as a
                            sourcimport from 'firebase/database';
                            e of inspiration and motivation in the future. By saving these memories, we can keep them close to our
                            hearts and relive them whenever we need a reminder of the amazing experiences we had in college
                        </p>

                    </div>
                </div>
            </section>














            <section className="achievement">
                <div className="ach achievements__cards">
                    <article className="achievement__card">
                        <span className="achievement__icon">
                            <i className="uil uil-video"></i>
                        </span>
                        <h3><span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-once="true"
                            className="purecounter">0</span>+</h3>
                        <p>Events</p>
                    </article>

                    <article className="achievement__card">
                        <span className="achievement__icon">
                            <i className="uil uil-users-alt"></i>
                        </span>
                        <h3><span data-purecounter-start="0" data-purecounter-end="2000" data-purecounter-once="true"
                            className="purecounter">0</span>+</h3>
                        <p>Students</p>
                    </article>

                    <article className="achievement__card">
                        <span className="achievement__icon">
                            <i className="uil uil-trophy"></i>
                        </span>
                        <h3><span data-purecounter-start="0" data-purecounter-end="26" data-purecounter-once="true"
                            className="purecounter">0</span>+</h3>
                        <p>Award Cermonies</p>
                    </article>
                </div>
            </section>










            <section className="courses" id="courses">
                <h2 className="headingh2">College Cultural Clubs Gallery</h2>
                <div className="w-4/6 container courses__container">

                    <article className="course">
                        <div className="cont">
                            <div className="course__image">
                                <img src={crotonia} height="10vmin" />
                            </div>
                            <div className="course__info newclassName">
                                <h2>Crotonia</h2>
                            </div>
                        </div>
                        <div className="course__info">
                            <p>
                                Crotonia, the literary club of the college, provides a platform for students to explore their love for
                                literature and express themselves through creative writing.

                            </p>
                            <Link to={'/gallery/crotonia'} className="btn btn-primary">Explore</Link>
                        </div>
                    </article>



                    <article className="course">
                        <div className="cont">
                            <div className="course__image">
                                <img src={zephyr} height="10vmin" />
                            </div>
                            <div className="course__info newclassName">
                                <h2>Zephyr</h2>
                            </div>
                        </div>
                        <div className="course__info">
                            <p>
                                Zephyr, the dance club of the college, promotes artistic expression and cultural diversity through various
                                dance forms and performances.
                            </p>
                            <Link to="/gallery/zephyr" className="btn btn-primary">Explore</Link>
                        </div>
                    </article>

                    <article className="course">
                        <div className="cont">
                            <div className="course__image">
                                <img src={afterdark} />
                            </div>
                            <div className="course__info newclassName">
                                <h2>AfterDark</h2>
                            </div>
                        </div>
                        <div className="course__info">
                            <p>
                                Afterdark, the photography club of the college, provides a space for students to learn and experiment with
                                different photographic techniques and explore their creativity.

                            </p>
                            <Link to="/gallery/afterdark" className="btn btn-primary">Explore</Link>
                        </div>
                    </article>

                    <article className="course">
                        <div className="cont">
                            <div className="course__image">
                                <img src={goonj} height="10vmin" />
                            </div>
                            <div className="course__info newclassName">
                                <h2>Goonj :)</h2>
                            </div>
                        </div>
                        <div className="course__info">
                            <p>
                                Goonj, the drama club of the college, provides a platform for students to showcase their acting skills and
                                collaborate on theatrical productions that entertain and inspire audiences.
                            </p>
                            <Link to="/gallery/goonj" className="btn btn-primary">Explore</Link>
                        </div>
                    </article>



                    <article className="course">
                        <div className="cont">
                            <div className="course__image">
                                <img src={estrella} height="10vmin" />
                            </div>
                            <div className="course__info newclassName">
                                <h2>Estrella</h2>
                            </div>
                        </div>
                        <div className="course__info">
                            <p>
                                Estrlla, the music club of the college, is a vibrant community of musicians and music lovers who come together
                                to learn, create,compose, generate and perform various genres of music.
                            </p>
                            <Link to="/gallery/estrella" className="btn btn-primary">Explore</Link>
                        </div>
                    </article>

                    <article className="course">
                        <div className="cont">
                            <div className="course__image">
                                <img src={utkrisht} height="10vmin" />
                            </div>
                            <div className="course__info newclassName">
                                <h2>Utkrisht</h2>
                            </div>
                        </div>
                        <div className="course__info">
                            <p>
                                Utkrisht, the art and crafts club of the college, encourages students to unleash their creativity and develop
                                their artistic skills through various mediums such as painting, drawing, sculpture, and more.
                            </p>
                            <Link to="/gallery/utkrisht" className="btn btn-primary">Explore</Link>
                        </div>
                    </article>

                </div>
            </section>









            <footer>
                <div className="container footer__container">
                    <div className="footer__1">
                        <a href="index.html" className="footer__logo">
                            <h4>GALLERY</h4>
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum nobis ratione.
                        </p>
                    </div>

                    <div className="footer__2">
                        <h4>Gallery </h4>
                        <ul className="permalinks">
                            <li><a href="/index">HOME</a></li>
                            <li><a href="/contactus">CONTACT US</a></li>
                            <li><a href="/aboutus">ABOUT US</a></li>
                        </ul>
                    </div>

                    <div className="footer__3">
                        <h4>Privacy</h4>
                        <ul className="privacy">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and conditions</a></li>
                            <li><a href="#">Refund Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer__4">
                        <h4>Contact Us</h4>
                        <div>
                            {/* style="color: white;" */}
                            <p><a href="tel:+91 0000000000" >+91 0000000000</a></p>
                            {/* style="color: white;" */}
                            <p><a href="mailto:abc@gmail.com" >abc@gmail.com</a></p>
                        </div>

                        <ul className="footer__socials">
                            <li>
                                <a href="#"><i className="uil uil-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="uil uil-instagram-alt"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="uil uil-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="uil uil-linkedin-alt"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </footer>


            <div ref={pro} id="progress">
                <span id="progress-value"><i className="fa fa-arrow-up" aria-hidden="true"></i></span>
            </div>

        </div>
        </motion.div>
    )
}

