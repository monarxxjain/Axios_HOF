import React from "react";
import "./Footer.css";
import { Fb, Tt, insta, ytube, Lkdin, phone, maiL, Locat } from "../../../assets/index";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="left-col">
                    <div className="logo"></div>
                    <div className="social-media  flex  ">
                        <a href="#">
                            <img src={Fb} />
                        </a>
                        <a href="#">
                            <img src={insta} />
                        </a>
                        <a href="#">
                            <img src={Tt} />
                        </a>
                        <a href="#">
                            <img src={ytube} />
                        </a>
                        <a href="#">
                            <img src={Lkdin} />
                        </a>
                    </div>
                    <br />
                    <br />

                    <br />
                    <p>
                        <img src={Locat} /> Indian Institute Of
                        Information Technology , Lucknow
                        <br />
                        Ahmamau,Lucknow - 226002
                    </p>
                    <br />
                    <p>
                        <img src={phone} /> +91-1234-567-890
                        <br />
                        <img src={maiL} /> KAMPIV@gmail.com
                    </p>
                </div>
                <div className="right-col">
                    <h1 style={{ color: "#fff" }}>Write To Us At</h1>
                    <div className="border"></div>
                    <br />
                    <p>Enter Your Email to get our News and updates.</p>
                    <form className="newsletter-form">
                        <input
                            className="txtb"
                            type="email"
                            placeholder="Enter Your Email"
                        />
                        <input className="btn" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;