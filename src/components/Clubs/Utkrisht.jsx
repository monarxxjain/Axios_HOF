import React from 'react'
import style from './Estrella.module.css'
import { aklavate, saniya } from "../../assets/index"
import { motion } from "framer-motion";
export default function Utkrisht() {
    const calcScrollValue = () => {
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

        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });

        scrollProgress.style.background = `conic-gradient(#0077B5 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    }
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
    return (
        <motion.div
            initial={{ opacity: 0, x: "1000px", y: "-1000px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "100px", y: "-1000px" }}
            transition={{ duration: 0.5 }}
            className="bg-primary w-full overflow-hidden">
            <div>
                <body id="clubBody">
                    <div className={`${style.container} ${style.grad1} grad1 mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-20`} >
                        <h1 className={`${style.pge1} flex title-font mb-4 font-medium text-white`} >
                            <b id="estrella">
                                <span className={`${style.clubName} `}>Utkrisht</span>
                            </b>
                        </h1>
                    </div>


                    <section className={style.courses} id="courses">
                        <h2 className={style.headingh}>~ Coordinator's ~</h2>
                        <div className={`${style.container} ${style.coursescontainer}`}>

                            <article className={style.course} id="coordi1">
                                <div className={style.courseimage}>
                                    <a href="../Pics/shreya.jpg" target="_blank"><img src={aklavate} /></a>
                                </div>
                                {/* style="margin-top: 3vmin; margin-bottom: 3vmin;" */}
                                <h3 >Akshay Lavate</h3>

                                <p>IIITL ~ 3rd Year</p>
                            </article>



                            <article className={style.course}>
                                <div className={style.courseimage}>
                                    <a href="../Pics/priyanshu.png" target="_blank"><img src={saniya} /></a>
                                </div>
                                {/* style="margin-top: 3vmin; margin-bottom: 3vmin;" */}
                                <h3 >Saniya Maheshwari</h3>


                                <p>IIITL ~ 3rd Year</p>

                            </article>


                        </div>
                    </section>
















                    <div className={style["big-grid"]}>
                        <div className={`${style.grid} ${style["image-grid"]}`} id="one">
                            {/* style="margin: 1rem 33%;" */}
                            <div className={style["grid-block"]} >
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img1"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <br />



                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img2"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3eO9L51TGiTghLao-VLNhO_C0egdgv7NfamlpdYbMAKCfXNlkk7WPPcxMJTaU9hO-HNnTqUivtavZ-6iK9mzoq0Qf3kJ5MAcnCoDUqbzd8VzpFKhu3mqDYZBG0KNGVxNHSEUwUiTxCUEFf_yFnNNLL0=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>


                            <br />

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img3"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3dhqk2CMZiOyFNPfjfffFIRIp1r9XjSNhfWHXk3gHDNf0hGwwWtXlQbtTf7DBp9t_KnCVull_WGpXNDVRtLkslw1qskUAjbSMEilFituKSeJVKqzVbsTFOeLfvd92nowevb7EGG3Pno37_WfsShZnYP=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img4"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3eYKEnL-pUFhF9aCKHKKRNrWEyJJ-7SCD8-EJLpBkVKp6jIHEKvBGiOL0hPW5f6UAcyoxaR06XRDUayk0NaQMxpSWCjnNyqdypHsIzrPfSwQZmOBR4-i3VCc0Ywg9CUmFYv2vs-rbmEmio2-4ZUuokZ=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img5"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3ckl0QrFbuW3W6VJ88rW0TeCZYumT9H7ZzN1dW6nrxOcf6mxEYT79iai43_T8i9AbiViFkpJBqVtS6d7loh-IgUwviFhdnkg1U-BNgeBPvstSBHCqWokHbx3EIHTkZFh3QkaTykBxZH7BqYvni2ukTL=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img1"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <br />
                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img6"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3csXE_23DqssKWd76nUGNa5re7em4ySmZEif2L_jxJBpIV0pV3qHYXQope682nX2Qs04nhMHVZlNNwbUGzz6CWjaywX5VaH5TX2Wrh0iocAk5aRrN2ud7H55mGYdR-z-QEyK5ckiZ4BGZLiSpXe-TmD=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img7"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3fbpkwsUjaB8Cv6JFW_Z5E_7WjTwR3hEfafXoDmSsxBN_I_TKHLw3ngMCcOhYVv0KrzdJpjBfRzmTPVUikRZpyy53lb10ENbvWxrP-Hf83Y1KXc2RG0zLXoXqQjaT7NP9bBKEY7iv2I8sRIUJxCU9ql=w1703-h973-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img8"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3cCwp7dKtvwMA8uf_Y3OTxZz-CiYRpay0fSZhfqYXCeDWBBfQERYnB7DzDCbsyyzdzoOU7_9BbW3WR5VaY9YPD3syn3VgZDxj6-2qTOwDw_HDlnLd92LlvCZIEr8oDKVt4AU7q-oJNHE6O9sRhGAVMi=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img8"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3cCwp7dKtvwMA8uf_Y3OTxZz-CiYRpay0fSZhfqYXCeDWBBfQERYnB7DzDCbsyyzdzoOU7_9BbW3WR5VaY9YPD3syn3VgZDxj6-2qTOwDw_HDlnLd92LlvCZIEr8oDKVt4AU7q-oJNHE6O9sRhGAVMi=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            {/* style="margin: 1rem 33%;" */}
                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img9"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3ffctj4lOMbhO6QA2a-9o24LTDFytAw4WAnxkpZr3fCDQHPyXTXeXqaI7KrD2ktnpXyfzGKvsax_oekoUGojWEGc9Ghte4ycSxgx6ZydR3LsnJlXO5zKwpoZYIBCIlYxxpq2PNcc9irUdA7P68_rdSY=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            {/* style="display: none;" */}
                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img10"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3dM37DnDx6OrPA4-VazUuGM5p9grWJtW8SLNQ9vo3xZlGTHw8wt6NXShF3umpCjoaM6XUyvIDl8una8MAd4z-hU23Fuz9_AjCkTpQ4YV3k5C0cXPzAq70WhaKHAEFHKcDXGVqAZVl5HgOSr9hSbHrLr=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className={`${style.grid} ${style["image-grid"]} ${style["neg-grid"]}`} id="two">
                            {/* style="margin: 1rem 33%;" */}
                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img1"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <br />



                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img2"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3eO9L51TGiTghLao-VLNhO_C0egdgv7NfamlpdYbMAKCfXNlkk7WPPcxMJTaU9hO-HNnTqUivtavZ-6iK9mzoq0Qf3kJ5MAcnCoDUqbzd8VzpFKhu3mqDYZBG0KNGVxNHSEUwUiTxCUEFf_yFnNNLL0=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img3"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3dhqk2CMZiOyFNPfjfffFIRIp1r9XjSNhfWHXk3gHDNf0hGwwWtXlQbtTf7DBp9t_KnCVull_WGpXNDVRtLkslw1qskUAjbSMEilFituKSeJVKqzVbsTFOeLfvd92nowevb7EGG3Pno37_WfsShZnYP=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img4"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3eYKEnL-pUFhF9aCKHKKRNrWEyJJ-7SCD8-EJLpBkVKp6jIHEKvBGiOL0hPW5f6UAcyoxaR06XRDUayk0NaQMxpSWCjnNyqdypHsIzrPfSwQZmOBR4-i3VCc0Ywg9CUmFYv2vs-rbmEmio2-4ZUuokZ=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img5"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3ckl0QrFbuW3W6VJ88rW0TeCZYumT9H7ZzN1dW6nrxOcf6mxEYT79iai43_T8i9AbiViFkpJBqVtS6d7loh-IgUwviFhdnkg1U-BNgeBPvstSBHCqWokHbx3EIHTkZFh3QkaTykBxZH7BqYvni2ukTL=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>



                            <br />
                            {/* style="display: none;" */}
                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img1"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <br />
                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img6"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3csXE_23DqssKWd76nUGNa5re7em4ySmZEif2L_jxJBpIV0pV3qHYXQope682nX2Qs04nhMHVZlNNwbUGzz6CWjaywX5VaH5TX2Wrh0iocAk5aRrN2ud7H55mGYdR-z-QEyK5ckiZ4BGZLiSpXe-TmD=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>


                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img7"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3fbpkwsUjaB8Cv6JFW_Z5E_7WjTwR3hEfafXoDmSsxBN_I_TKHLw3ngMCcOhYVv0KrzdJpjBfRzmTPVUikRZpyy53lb10ENbvWxrP-Hf83Y1KXc2RG0zLXoXqQjaT7NP9bBKEY7iv2I8sRIUJxCU9ql=w1703-h973-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img8"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3cCwp7dKtvwMA8uf_Y3OTxZz-CiYRpay0fSZhfqYXCeDWBBfQERYnB7DzDCbsyyzdzoOU7_9BbW3WR5VaY9YPD3syn3VgZDxj6-2qTOwDw_HDlnLd92LlvCZIEr8oDKVt4AU7q-oJNHE6O9sRhGAVMi=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>


                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img1"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <br />
                            {/* style="margin: 1rem 33%;" */}
                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img9"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3ffctj4lOMbhO6QA2a-9o24LTDFytAw4WAnxkpZr3fCDQHPyXTXeXqaI7KrD2ktnpXyfzGKvsax_oekoUGojWEGc9Ghte4ycSxgx6ZydR3LsnJlXO5zKwpoZYIBCIlYxxpq2PNcc9irUdA7P68_rdSY=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            {/* style="display: none;" */}
                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img10"]}`}
                                            src="https://lh3.googleusercontent.com/pw/ACtC-3dM37DnDx6OrPA4-VazUuGM5p9grWJtW8SLNQ9vo3xZlGTHw8wt6NXShF3umpCjoaM6XUyvIDl8una8MAd4z-hU23Fuz9_AjCkTpQ4YV3k5C0cXPzAq70WhaKHAEFHKcDXGVqAZVl5HgOSr9hSbHrLr=w1384-h791-no"
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>















                    {/* 
                <div className={style["btn-div"]}>
                    <button id="mj-btn" className={`${style.btn} ${style.ViewButton} mb-5 `} onclick="simpleView()">Simpler View</button>
                </div> */}


                    <footer>
                        <div className={`${style.container} ${style.footercontainer}`}>
                            <div className={style.footer1}>
                                <a href="/gallery" className={style.footerlogo}>
                                    <h4>GALLERY</h4>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum nobis ratione.
                                </p>
                            </div>

                            <div className={style.footer2}>
                                <h4>Gallery </h4>
                                <ul className={style.permalinks}>
                                    <li><a href="/index">HOME</a></li>
                                    <li><a href="/contactus">CONTACT US</a></li>
                                    <li><a href="/aboutus">ABOUT US</a></li>
                                </ul>
                            </div>

                            <div className={style.footer3}>
                                <h4>Privacy</h4>
                                <ul className={style.privacy}>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms and conditions</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                </ul>
                            </div>

                            <div className={style.footer4}>
                                <h4>Contact Us</h4>
                                <div>
                                    {/* style="color: white;" */}
                                    <p><a href="tel:+91 0000000000">+91 0000000000</a></p>
                                    {/* style="color: white;" */}
                                    <p><a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
                                </div>

                                <ul className={style.footersocials}>
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


                    <div id="progress">
                        <span id="progress-value"><i className="fa fa-arrow-up" aria-hidden="true"></i></span>
                    </div>














                </body>
            </div>
        </motion.div>
    )
}
