import "./styles/experience.css";
import PerasiaLogo from "../docs/perasia_logo.png";
import SiemensLogo from "../docs/siemens_logo.png";
import { useState } from "react";
import {Modal} from "react-modal";
import {ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const companyDesc = {
    "Perasia Technologies LLC": {
        "startDate": "April 2023",
        "endDate": "September 2023",
        "desc": "Perasia desc....."
    },
    "Siemens Technologies and Services Pvt. Ltd.": {
        "startDate": "July 2022",
        "endDate": "September 2022",
        "desc": ""
    }
}

export default function Experience() {
    function ExperienceBlock({companyName, imgLink}) {
        const [modalOpen, setModalOpen] = useState(false);
        const toggle = () => setModalOpen(!modalOpen);
        const closeBtn = (
            <button className="close" onClick={toggle} type="button">
              &times;
            </button>
        );
        return (
            <button onClick={toggle} className="experience-button" id={companyName.split(" ")[0]}>
                
                    {/* <img className="company-pic" src={imgLink} alt={companyName + " logo"} /> */}
                {/* <ReactModal
                    isOpen={modalOpen}
                    onRequestClose={toggle}
                    contentLabel="Example"
                    //onClose={toggle}
                    // contentLabel="Perasia"
                    className="experience-modal">
                        {/* <ModalHeader toggle={toggle} close={closeBtn}>{companyName}</ModalHeader>
                        <ModalBody>{companyDesc[companyName]["desc"]}</ModalBody>
                        <ModalFooter>
                            <button onClick={toggle}>Close</button>
                        </ModalFooter> */}
                {/* </ReactModal> */} */}
            </button>
        )
    }
    return (
        <section id="experience">
            <h2>Experiences</h2>
            <div id="experiences">
                <ExperienceBlock companyName={"Perasia Technologies LLC"} imgLink={PerasiaLogo}/>
                <ExperienceBlock companyName={"Siemens Technologies and Services Pvt. Ltd."} imgLink={SiemensLogo}/>
            </div>
        </section>
    )
}