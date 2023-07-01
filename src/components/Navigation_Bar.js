import Resume from "../docs/Reet_Resume.pdf";
import "./styles/navigation_bar.css";
import {Link} from "react-scroll";

export default function Navigation_Bar() {
    return(
        <section id="navigation-section">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a id="personal-name" class="navbar-brand" href="#">REET KOTHARI</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarText">
                        <ul class="navbar-nav">
                            <li class="nav-item nav-link">
                                <Link className="navbar-links" activeClass="active" spy to="home-page">
                                    HOME
                                </Link>
                            </li>
                            <li class="nav-item nav-link">
                                <Link className="navbar-links" activeClass="active" spy to="bio-section">
                                    ABOUT ME
                                </Link>
                            </li>
                            <li class="nav-item nav-link">
                                <Link className="navbar-links" activeClass="active" spy to="experience-section">
                                    EXPERIENCES
                                </Link>
                            </li>
                            <li class="nav-item nav-link">
                                <Link className="navbar-links" activeClass="active" spy to="project-section">
                                    PROJECTS
                                </Link>
                            </li>
                            <li class="nav-item nav-link">
                                <a className="navbar-links" href={Resume} target="_blank" rel="noopener noreferrer">RESUME</a>
                            </li>
                            <li class="nav-item nav-link">
                                <a className="navbar-links" href="https://www.linkedin.com/in/reet-yk/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-lg"></i></a>
                            </li>
                            <li class="nav-item nav-link">
                                <a className="navbar-links" href="https://github.com/reet0512" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-lg"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}

