import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Navigation_Bar from "./components/Navigation_Bar.js";
import Bio from "./components/Bio.js";
import Projects from "./components/Projects.js";
import Experience from "./components/Experience.js";

export default function App() {
    return(
        <>
            <Navigation_Bar />
            <Home />
            <Bio />
            <Experience />
            <Projects />
            <Footer />
        </>
    )
}