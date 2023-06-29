import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import { useState } from "react";
import "./styles/projects.css";
// import RacialJusticePic from "../docs/racial_justice.jpg";
// import KVStorePic from "../docs/kv_store.jpg";

const projectDesc = {
    "Garbage Classifier": {
        "link": "https://github.com/reet0512/GarbageClassifier"
    },
    "Flight Reservation Application (CSE 344 - link to spec)": {
        "link": "https://docs.google.com/document/d/1_D1WWpJfuOJMIxU9X1X3IU8vCK0Kk4iWgRxdmfE1TTk/edit"
    },
    "Racial Justice": {
        "link": "https://reet0512.shinyapps.io/Racial-Justice/"
    },
    "Sharded Linearizable KV Store (CSE 452 - link to spec)": {
        "link": "https://gitlab.cs.washington.edu/cse452-23sp/dslabs/dslabs-handout/-/tree/c73c5c85f9f45e62dc55bc17ea17ff15cd927a70"
    }
}

export default function Projects() {
    function ProjectBlock({projName}) {
        return (
            <div className="project-block">
                <a href={projectDesc[projName]["link"]} target="_blank">
                    <button className="project-button" id={projName.split(" ")[0]}>
                        {/* <img className="company-pic" src={imgLink} alt={companyName + " logo"} /> */}
                    </button>
                </a>
                <h3 className="project-title">{projName}</h3>
            </div>
        )
    }
    return (
        <section id="project-section">
            <h2>Projects</h2>
            <div id="projects">
                <ProjectBlock projName={"Garbage Classifier"}/>
                <ProjectBlock projName={"Flight Reservation Application (CSE 344 - link to spec)"}/>
                <ProjectBlock projName={"Racial Justice"}/>
                <ProjectBlock projName={"Sharded Linearizable KV Store (CSE 452 - link to spec)"}/>
            </div>
        </section>
    )
}