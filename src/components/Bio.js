import "./styles/bio.css"

export default function Bio() {
    return(
        <section id="bio-section">
            <h2>About Me</h2>
            <div id="bio-content">
                <div id = "bio-para">
                    <p>
                        Hello! I'm Reet Kothari and I'm originally from Bangalore, India. I'm currently pursuing a Masters degree in Computer Science at Dartmouth College. 
                        I have a strong interest in Data Science, Quantitative Strategies, and Full-Stack Development. 
                        I am fluent in English, Hindi, and Marwari. During my free time, I enjoy cooking, playing Squash, Chess, Video Games, and Guitar. 
                        Things I love:
                    </p>
                    <div id="icon-info">
                        <i className="fa-solid fa-headphones fa-xl icons"></i> {' '} Genre: Rock Music
                        <br/>
                        <i className="fa-solid fa-chess-pawn fa-xl icons"></i> {' '} Chess.com Blitz: 1557
                        <br/>
                        <i className="fa-solid fa-gamepad fa-xl icons"></i> {' '} Video Games: Rocket League, Fortnite, Valorant
                        <br/>
                        <i className="fa-solid fa-cube fa-xl icons"></i> {' '} Rubiks Cubes: 4x4, Square-1
                    </div>
                </div>
                <div id = "bio-pic">
                </div>
            </div>
            
        </section>
    )
}