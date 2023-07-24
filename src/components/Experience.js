import "./styles/experience.css";
// import PerasiaLogo from "../docs/perasia_logo.png";
// import SiemensLogo from "../docs/siemens_logo.png";
import { useState } from "react";
import {Modal, ModalHeader, ModalBody} from "reactstrap";


const companyDesc = {
    "Perasia Technologies LLC": {
        "startDate": "April 2023",
        "endDate": "September 2023",
        "location": "Okemos, MI, USA (Remote)",
        "desc": "During my time at Perasia as a Embedded Software Design Intern, I worked on two main projects for the company. Over spring quarter I worked part-time to learn about ST Microcontrollers and help develop software around Atonomous, Advanced Driver Assistance Systems. During Summer, I worked full-time on the Arrythmia Project. Using ECG Data from the MIT-BIH Arrythmia database as my data, I denoise the signals using various filters, perform heart rate variability analysis, and trained a convoluted neural network model for the classification of different beat types. Following that, I created a FastAPI to query data from the AWS S3 bucket and DynamoDb to send to the FrontEnd Developer. I also worked with the firmware engineers to create IoT rules to denoise the ECG data received from the embedded system using AWS Kinesis Data Firehose and finally storing the data in the S3 bucket."
    },
    "Siemens Technologies and Services Pvt. Ltd.": {
        "startDate": "July 2022",
        "endDate": "September 2022",
        "location": "Bengaluru, KA, India (Hybrid)",
        "desc": "During my time at Siemens as a Cybersecurity Research Intern, I worked with a small team to gather information on exploits through firmware updates and figuring out which package and executable files were more susceptible to attacks. The final deliverable was used to improve security features on the SIMATIC controllers. Through this experience, I got to use the Siemens Intranet, winCC software, and research papers to understand Operational Technologies better."
    },
    "University of Washington": {
        "startDate": "Autumn 2021",
        "endDate": "Winter 2023",
        "location": "Seattle, WA, USA (In-Person)",
        "desc": "During my time as a student in the University of Washington, I held 3 roles as a student worker and volunteer. As a volunteer, I was a FIG leaader in Au '22 with a class size of about 24 students. A FIG leader holds weekly seminars to help freshmen navigate their first-year at college so that they can find their path to success during their four years. As a student worker, I worked as a dining student assistant for Housing and Food Services (HFS) in Au '21 and a classroom technician for Academic Technologies in Wi '23."
    }
}

export default function Experience() {
    function ExperienceBlock({companyName}) {
        const [modalOpen, setModalOpen] = useState(false);
        const toggleModal = () => {
            setModalOpen(!modalOpen);
        }
        const closeBtn = (
            <button className="close-btn" onClick={toggleModal} type="button">
              &times;
            </button>
        );
        return (
            <div>
                <button onClick={toggleModal} className="experience-button" id={companyName.split(" ")[0]}>
                    {/* <img className="company-pic" src={imgLink} alt={companyName + " logo"} /> */}
                </button>
                <Modal
                    isOpen={modalOpen}
                    toggle={toggleModal}>
                        <ModalHeader close={closeBtn} className="modal-header">
                            <h3>{companyName}</h3>
                            <p>Start Date: {companyDesc[companyName]["startDate"]}</p>
                            <p>End Date: {companyDesc[companyName]["endDate"]}</p>
                            <p>Location: {companyDesc[companyName]["location"]}</p>
                        </ModalHeader>
                        <ModalBody>{companyDesc[companyName]["desc"]}</ModalBody>
                </Modal>
            </div>
        )
    }
    return (
        <section id="experience-section">
            <h2>Experiences</h2>
            <div id="experiences">
                <ExperienceBlock companyName={"Perasia Technologies LLC"}/>
                <ExperienceBlock companyName={"Siemens Technologies and Services Pvt. Ltd."}/>
                <ExperienceBlock companyName={"University of Washington"}/>
            </div>
        </section>
    )
}