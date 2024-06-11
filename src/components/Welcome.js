import { Link } from "react-router-dom"

export const Welcome = () => {
    return(
        <div className="welcomeWrapper">
            <div className="title">
                <h1 id="largeText">Welcome</h1>
                <p id="smallerText">to my world.</p>
            </div>
            <hr />
            <div className="textimgwrapper">
            <div className="welcmsgwrapper">
            <p id="welcomemsg">My name is Stephanie and I am so glad you’ve made it to my portfolio. As a quick introduction, I started college in 2019 studying informatics with a concentration in human-computer interaction, and have obtained numerous certificates along the way. Please check out the pages of this site to see my projects and learn more about my process.</p>
            <Link to="/contact"><button id="welcomeBtn">Contact Me</button></Link>
            </div>
            <div className="welcomeimg"></div>
            </div>
        </div>
    )
}