import { useEffect } from "react";

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return(
        <div className="aboutwrapper">
        <h1 id="aboutTitle">About Me</h1>
        <h3 id="aboutPara">Hello! I am Stephanie Livengood (Lye-VIN-good), and yes, I am living good. I've heard this joke every year since kindergarten and it never gets old (*sarcasm*). Besides having a fun last name, I am also an avid reader. I have a collection of over 300 books of all genres and I hope to one day have enough to be classified a library. When I am not learning and developing projects, you can find me reading, watching Bridgerton over and over again, playing Xbox, or listening to music. My favorite artists are Hozier, Taylor Swift, and Ghost right now, but I love all genres, including everything from classical to synthwave. My friends and family would describe me as upbeat, funny, and hard working. While in college I rarely ever took a break from learning and I loved collecting certificates in anything I was interested in at the time. Please message me if you want to know anything else about ME!</h3>
        <hr />
        <div className="aboutdisplay">
            <div className="area">
                <div className="left">
                    <h2>Work Experience</h2>
                </div>
                <div className="right">
                    <div className="workHead">
                        <div className="date"><p>Sept.2022 -<br/>Aug. 2023</p></div>
                        <div className="workTitle"><p>Web Developer Internship</p></div>
                    </div>
                    <div className="workInfo">
                        <ul id="workList">
                            <li>
                           Made coding updates to the company website using HTML, Javascript, and Bootstrap, leading to an increase in positive web site interactions.
                            </li>
                            <li>
                            Update intranet with content as they were delivered to me by all departments of the company, as well as from international offices using a CMS (Sitefinity), leading to a rise in positive employee interactions.
                            </li>
                            <li>
                          Attended multiple weekly meetings with a vendor on site redesign and development.  
                            </li>
                            <li>
                            Allocated a minimum of one hour every day to developing JavaScript/ React / Bootstrap skills which increased content integration speed by more than 100%.
                            </li>
                            <li>
                            Led research for new ways to manage the website, UX topics for web design, and ways to implement bootstrap on the current website, resulting in my team improving the UX of the new site design.
                            </li>
                            <li>
                            Managed all social media platforms and in charge of content creation, as well as social media analytics, which increased social media following by over 200% for one month.
                            </li>
                            <li>
                           Used feedback from over 10 departments within company to improve website content.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="area">
                   <div className="left">
                        <h2>Education</h2>
                </div>
                <div className="right">
                <div className="eduHead">
                    <div className="eduItem">
                        <div className="date"><p>Aug.2022 -<br/>May. 2024</p></div>
                        <div className="workTitle">
                            <p>B.S Informatics @ IUPUI</p>
                            <p id="nobold">Concentration and certificate in human-computer interactions.</p>
                            <p id="nobold">Started as a dual major in Info and Media Arts, but early on decided to focus on UX and HCI.</p>
                            </div>
                            </div>

                            <div className="eduItem">

                            <div className="date"><p>Aug.2019 -<br/>May. 2022</p></div>
                        <div className="workTitle">
                            <p>A.S Software Development @ Ivy Tech</p>
                            <p id="nobold">Concentration in software and application development.</p>
                            <p id="nobold">Started as a computer science major but discovered quickly that I loved the human side of development more than the code. I also had a strong pull to design classes such as art history and visual communication.</p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="area">
            <div className="left">
                    <h2>Skills</h2>
</div>
<div className="right">
    <div className="skillContainer">
    <p id="skills">React, JavaScript, typescript, jQuery, EJS, Sass, Node.js, Express, Jest testing, Python, C++, Bootstrap, Sitefinity, JSON, CMS, HTML, CSS, GitHub, Git, API development, UX, UI, Figma, Linux commands, SQL, phpMyAdmin, Communication, Creativity, Enthusiasm, Positivity</p>
    </div>
</div>
            </div>
            
        </div>
        
    </div>
    )
}