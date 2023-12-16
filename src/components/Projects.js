import "./styles/projects.css"
import garbagePic from "../docs/garbage_classifier.jpg"

const projectDesc = {
    "IPO Success Report": {
        "libraries": "Pandas, Scikit-learn",
        "link": "https://drive.google.com/file/d/1ujUUAHL_tS80ba49e5KPsoNt-ERjkDNA/view"
    },
    "Code Racer": {
        "libraries": "MongoDB, Express, Socket.io, React",
        "link": "https://github.com/reet0512/CodeRacer"
    },
    "Garbage Classifier": {
        "libraries": "Pytorch",
        "link": "https://github.com/reet0512/GarbageClassifier"
    },
    "Sudoku Universe": {
        "libraries": "REST API, MongoDB, Express, Express-Layouts",
        "link": "https://github.com/reet0512/Sudoku"
    },
    "Intoxication Detection Report": {
        "libraries": "Spark, Keras",
        "link": "https://drive.google.com/file/d/1siL-R0HEhvIQjRCB2vKCC4y7bLdArqxj/view"
    },
    "Flight Reservation Application (CSE 344 - link to spec)": {
        "libraries": "AzureSQL, JDBC",
        "link": "https://docs.google.com/document/d/1_D1WWpJfuOJMIxU9X1X3IU8vCK0Kk4iWgRxdmfE1TTk/edit"
    },
    "Racial Justice": {
        "libraries": "Shiny.R, Dplyr, ggplot, plotly",
        "link": "https://reet0512.shinyapps.io/Racial-Justice/"
    },
    "Sharded Linearizable KV Store (CSE 452 - link to spec)": {
        "libraries": "Java",
        "link": "https://github.com/emichael/dslabs"
    }
}

export default function Projects() {
    function ProjectBlock({projName}) {
        return (
            <div className="project-block">
                <a href={projectDesc[projName]["link"]} target="_blank" rel="noopener noreferrer">
                    <button className="project-button" id={projName.split(" ")[0]}>
                        {/* <img className="object-fit-fill" src={garbagePic} /> */}
                    </button>
                </a>
                <h3 className="project-title">{projName}</h3>
                <h5 className="project-libraries">{projectDesc[projName]["libraries"]}</h5>
            </div>
        )
    }
    return (
        <section id="project-section">
            <h2>Projects and Reports</h2>
            <div id="projects">
                <ProjectBlock projName={"IPO Success Report"}/>
                <ProjectBlock projName={"Code Racer"}/>
                <ProjectBlock projName={"Garbage Classifier"}/>
                <ProjectBlock projName={"Sudoku Universe"}/>
                <ProjectBlock projName={"Intoxication Detection Report"}/>
                <ProjectBlock projName={"Racial Justice"}/>
                <ProjectBlock projName={"Sharded Linearizable KV Store (CSE 452 - link to spec)"}/>
                <ProjectBlock projName={"Flight Reservation Application (CSE 344 - link to spec)"}/>
            </div>
        </section>
    )
}