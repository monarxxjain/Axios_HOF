import React from "react";
import './NavEvents.css'

const NavEvents = () => {
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
            <div class="navEvent--mj">
                <input type="checkbox" id="navEvent--mj-check" />
                <div class="navEvent--mj-header">
                    <div class="navEvent--mj-title">
                        Axios
                    </div>
                </div>
                <div class="navEvent--mj-btn">
                    <label for="navEvent--mj-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="navEvent--mj-links">
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

export default NavEvents;