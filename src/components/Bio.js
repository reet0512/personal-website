import "./styles/bio.css"
import profilePic from "../docs/profile_pic.jpg";

export default function Bio() {
    return(
        <section id="bio">
            <h2>About Me</h2>
            <div id="bio-content">
                <div id = "bio-para">
                    <p>
                        I am currently pursuing a Bachelors degree in Computer Science at the University of Washington - Seattle. 
                        I have a strong interest in Data Science, Software Development, Data Analytics, Embedded Software Development, and Distributed Systems.
                        During my free time, I dabble between playing chess, guitar, video games, and squash. Some information about me:
                        <ul>
                            <li>Citizenship: India</li>
                            <li>Favorite Genre of Music: Rock</li>
                            <li>Highest chess.com Blitz rating: 1416</li>
                            <li>Favorite Video Games: Rocket League, CS:GO, Fortnite</li>
                            <li>Languages I speak:
                                <ul>
                                    <li>English</li>
                                    <li>Hindi</li>
                                    <li>Marwari</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>
                <div id = "bio-pic">
                    <img
                        src= "https://media.licdn.com/dms/image/D5603AQHuiwRGrwFl0w/profile-displayphoto-shrink_400_400/0/1682884517588?e=1693440000&v=beta&t=-cfTNHNRd5viGG1z1TNyUFrK32hA1viAjuZL4A2yDcA"
                        id="profile-pic"
                        alt="Profile Pic"
                    />
                </div>
            </div>
            
        </section>
    )
}