import "./styles/experience.css";
import { useState } from "react";
import {Modal, ModalHeader, ModalBody} from "reactstrap";


const companyDesc = {
    "Dartmouth College": {
        "startDate": "October 07, 2024",
        "endDate": "Present",
        "location": "Hanover, NH",
        "desc": "At Dartmouth, I worked as a Research Assistant and Teaching Assistant. For my research, I worked under Prof. Sarah Preum on the NLP task of Health Conflict Detection. As a TA, I developed rubrics, graded assignments, hosted office hours, and helped setup events for the machine learning course."
    },
    "Dozee Health": {
        "startDate": "April 01, 2024",
        "endDate": "August 09, 2024",
        "location": "Bangalore, KA, India",
        "desc": "During my time at Dozee as a Data Scientist, I developed an algorithm to annotate apnea events from ballistocardiogram data and used metrics like F1, precision, and Cohen's Kappa to evaluatethe it. In the process, I also implemented an internal tool to syncronize the JJ and RR peaks so that the lag between the BCG and ECG signals can be rectified to make working with new data easier. This automated tons of manual labor and sped up the development process by atleast a week."
    },
    "Perasia Technologies LLC": {
        "startDate": "April 04, 2023",
        "endDate": "August 25, 2023",
        "location": "Okemos, MI, USA (Remote)",
        "desc": "At Perasia, I worked as a Embedded Software Intern. I spearheaded the Arrhythmia ECG Classifier Project. Using ECG Data from the MIT-BIH dataset, I denoised the pure time-domain signals using a bandpass filter and wavelet transform, performed heart rate variability analysis using derivate, squared, and moving integral filters, and trained an deep convoluted neural network model for the classification of different beat types. Following that, I worked on the backend to setup an AWS IoT instance to accept MQTT messages, and created a FastAPI to query data from the AWS S3 bucket and DynamoDb to send to the FrontEnd Developer."
    },
    "Siemens Technologies and Services Pvt. Ltd.": {
        "startDate": "July 25, 2022",
        "endDate": "September 30, 2022",
        "location": "Bangalore, KA, India (Hybrid)",
        "desc": "During my time at Siemens as a Cybersecurity Research Intern, I worked with a small team to gather information on exploits through firmware updates and figured out which package and executable files were more susceptible to attacks. I scoured the Siemens Intranet, read multiple relevant research papers, and developed a Security Mindset. The final deliverable was used to improve security features on the SIMATIC controllers."
    },
    "Develop For Good": {
        "startDate": "October 30, 2023",
        "endDate": "February 24, 2024",
        "location": "Seattle, WA (Remote)",
        "desc": "Under Develop For Good, I worked as a Data Engineer Volunteer at the non-profit XtraMath. I created ETL pipelines using AWS Glue (leveraging PySpark) to normalize the data schema, expediting access to pivotal strategic data for the company. I also helped build a new data warehouse on AWS Redshift that can regularly get updates from DynamoDB and enable better reporting for teachers to estimate their students' progress."
    },
    "Husky Satellite Lab": {
        "startDate": "Autumn 2023",
        "endDate": "Present",
        "location": "Seattle, WA, USA",
        "desc": "As a Software Engineer at Husky Satellite Labs, I worked on the PHAT-3 team (Platform for High-Altitude Testing). I worked on a datalink system that supports packaging, encoding, and decoding data to the high altitude test satellite, and also ideated a protocol for satellite movement to support a mockup star tracking camera."
    },
    "University of Washington": {
        "startDate": "Autumn 2021",
        "endDate": "Winter 2023",
        "location": "Seattle, WA, USA",
        "desc": "At the University of Washington, I held 3 roles as a student worker and volunteer. As a volunteer, I was a FIG leaader in Au '22 with a class size of about 24 students. A FIG leader holds weekly seminars to help freshmen navigate through their first-year at college so that they can find their path to success during their four years. As a student worker, I worked as a dining student assistant for Housing and Food Services (HFS) in Au '21 and a classroom technician for Academic Technologies in Wi '23."
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
                <ExperienceBlock companyName={"Dartmouth College"}/>
                <ExperienceBlock companyName={"Dozee Health"}/>
                <ExperienceBlock companyName={"Develop For Good"}/>
                <ExperienceBlock companyName={"Perasia Technologies LLC"}/>
                <ExperienceBlock companyName={"Siemens Technologies and Services Pvt. Ltd."}/>
                <ExperienceBlock companyName={"Husky Satellite Lab"}/>
                <ExperienceBlock companyName={"University of Washington"}/>
            </div>
        </section>
    )
}