import React from "react";
import './NavbarHome.css'
import { Link } from "react-router-dom";
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
                    <Link to={'/'} >Home</Link>
                    <Link to={'/alumni_app'} >Alumni Network</Link>
                    <Link to={'/tech_events'}>Tech Events</Link>
                    <Link to={'/contact_us'} className="AboutusHomeNav">Contact Us</Link>
                    <Link to={'/login_signup'} className="FormParentmj"><div className="LoginHomeNav">Login</div></Link>
                    <Link to={'/login_signup'} className="FormParentmj"><div className="SignUpHomeNav">Sign Up</div></Link>
                </div>
                
            </div>
        </>
    )

}

export default NavbarHome;