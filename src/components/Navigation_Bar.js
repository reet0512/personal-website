import Resume from "../docs/Reet_Resume.pdf";
import "./styles/navigation_bar.css";
import {Link} from "react-scroll";
import {useEffect, useState} from "react";
import {Nav, NavItem, NavLink} from "reactstrap"; 
import LinkedInPic from "../docs/linkedin.png"

export default function Navigation_Bar() {
    // const [navbarColor, setNavbarColor] = useState("navbar-transparent");
    // useEffect(() => {
    //     const updateNavbarColor = () => {
    //         if (
    //             document.documentElement.scrollTop > 399 ||
    //             document.body.scrollTop > 399
    //         ) {
    //             setNavbarColor("");
    //         } else if (
    //             document.documentElement.scrollTop < 400 ||
    //             document.body.scrollTop < 400
    //         ) {
    //             setNavbarColor("navbar-transparent");
    //         }
    //     };
    //     window.addEventListener("scroll", updateNavbarColor);
    //     return function cleanup() {
    //         window.removeEventListener("scroll", updateNavbarColor);
    //     };
    // });
    // useEffect(() => {
    //     let navElement = document.getElementById("nav");
    //     const updateNavColor = () => {
    //         if(window.scrollY > 0) {
    //             navElement.classList.add('scrolled');
    //         } else {
    //             navElement.classList.remove('scrolled');
    //         }
    //     };
    //     window.addEventListener("scroll", updateNavColor);
    // });
    return(
        <header id="nav">
            {/* <Nav
            tabs
            id="navbar"
            >
                <NavItem>
                    <NavLink active href="home-page">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active href="#bio">
                        About Me
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active href="#experience">
                        Experience
                    </NavLink>
                </NavItem>
            </Nav> */}
            <nav>
                <ul id="navbar">
                    <li>
                        <Link activeClass="active" smooth spy to="home-page">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="bio">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="experience">
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="project-section">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <a href={Resume} target="_blank">Resume</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/reet-yk/" target="_blank">
                             LinkedIn
                        </a>
                    </li>
                    <li>
                    <a href="https://github.com/reet0512/" target="_blank">Github</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

