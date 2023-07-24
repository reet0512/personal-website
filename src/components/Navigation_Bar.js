import Resume from "../docs/Reet_Kothari_Resume.pdf"
import "./styles/navigation_bar.css"
import {Link} from "react-scroll"

export default function Navigation_Bar() {
    return(
        <section id="navigation-section">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a id="personal-name" className="navbar-brand" href="#home-page">REET KOTHARI</a>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item nav-link">
                                <Link className="navbar-links" activeClass="active" spy to="home-page">
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link className="navbar-links" activeClass="active" spy to="bio-section">
                                    ABOUT ME
                                </Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link className="navbar-links" activeClass="active" spy to="experience-section">
                                    EXPERIENCES
                                </Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link className="navbar-links" activeClass="active" spy to="project-section">
                                    PROJECTS
                                </Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link className="navbar-links" activeClass="active" spy to="gallery-section">
                                    GALLERY
                                </Link>
                            </li>
                            <li className="nav-item nav-link">
                                <a className="navbar-links" href={Resume} target="_blank" rel="noopener noreferrer">RESUME</a>
                            </li>
                            <li className="nav-item nav-link">
                                <a className="navbar-links" href="https://www.linkedin.com/in/reet-yk/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                            </li>
                            <li className="nav-item nav-link">
                                <a className="navbar-links" href="https://github.com/reet0512" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github fa-lg"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

