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
            <p id="welcomemsg">My name is Stephanie and I am so glad you’ve made it to my portfolio. As a quick introduction, I started college in 2019 to become a web developer and have obtained numerous certificates on the way. Please check out the pages of this site to learn more about me and my process.</p>
            <button id="welcomeBtn">About Me</button>
            </div>
            <div className="welcomeimg"></div>
            </div>
        </div>
    )
}