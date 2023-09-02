import "./styles/bio.css"

export default function Bio() {
    return(
        <section id="bio-section">
            <h2>About Me</h2>
            <div id="bio-content">
                <div id = "bio-para">
                    <p>
                        Hello! I'm Reet and I am an international student from India pursuing a Bachelors degree in Computer Science at the University of Washington - Seattle. 
                        I have a strong interest in Full-Stack Development, Data Science, Data Engineering, Data Analytics, and Distributed Architecture. 
                        I am fluent in English, Hindi, and Marwari. During my free time, I enjoy playing chess, guitar, video games, and squash. 
                        Things I love:
                    </p>
                    <div id="icon-info">
                        <i className="fa-solid fa-headphones fa-xl icons"></i> {' '} Genre: Rock Music
                        <br/>
                        <i className="fa-solid fa-chess-pawn fa-xl icons"></i> {' '} Chess.com Rapid: 1430
                        <br/>
                        <i className="fa-solid fa-gamepad fa-xl icons"></i> {' '} Video Games: Rocket League, Fortnite, CS:GO
                        <br/>
                        <i className="fa-solid fa-cube fa-xl icons"></i> {' '} Rubiks Cubes:4x4, Square-1
                    </div>
                </div>
                <div id = "bio-pic">
                </div>
            </div>
            
        </section>
    )
}