import React from "react";
import './NavbarHome.css'

const NavbarHome = () => {
    // const [colorChange, setColorchange] = useState(false);
    // const changeNavbarColor = () => {
    //     if (window.scrollY >= 80) {
    //         setColorchange(true);
    //     }
    //     else {
    //         setColorchange(false);
    //     }
    // };
    // window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <div class="navHome--mj">
                <input type="checkbox" id="navHome--mj-check" />
                <div class="navHome--mj-header">
                    <div class="navHome--mj-title">
                        Axios
                    </div>
                </div>
                <div class="navHome--mj-btn">
                    <label for="navHome--mj-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="navHome--mj-links">
                    {/* <a href="//github.io/jo_geek" target="_blank">Github</a> */}
                    {/* <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a> */}
                    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Alumni Network</a>
                    <a href="https://codepen.io/jo_Geek/" target="_blank">Tech Events</a>
                    <a href="https://jsfiddle.net/user/jo_Geek/" className="AboutusHomeNav" target="_blank">About Us</a>
                    <a href="#" target="_blank" className="FormParentmj"><div className="LoginHomeNav">Login</div></a>
                    <a href="#" target="_blank" className="FormParentmj"><div className="SignUpHomeNav">Sign Up</div></a>
                </div>
                
            </div>
        </>
    )

}

export default NavbarHome;