import "./styles/bio.css"

export default function Bio() {
    return(
        <section id="bio-section">
            <h2>About Me</h2>
            <div id="bio-content">
                <div id = "bio-para">
                    <p>
                        Hello! I'm Reet and I am an international student from India pursuing a Bachelors degree in Computer Science at the University of Washington - Seattle. 
                        I have a strong interest in Data Science, Software Development, Data Analytics, Embedded Systems, and Distributed Systems.
                        During my free time, I enjoy playing chess, guitar, video games, and squash. Things I love:
                    </p>
                    <div id="icon-info">
                        <i className="fa-solid fa-headphones fa-xl"></i> Rock
                        <br/>
                        <i className="fa-solid fa-chess-board fa-xl"></i> Blitz: 1424
                        <br/>
                        <i className="fa-solid fa-gamepad fa-xl"></i> Rocket League, Fortnite, CS:GO
                        <br/>
                        <i className="fa-solid fa-language fa-xl"></i> English, Hindi, Marwari
                    </div>
                </div>
                <div id = "bio-pic">
                    {/* <img
                        src= {require("../docs/profile_pic.jpg")}
                        id="profile-pic"
                        alt="Profile Pic"
                    /> */}
                </div>
            </div>
            
        </section>
    )
}