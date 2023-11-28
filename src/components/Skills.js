export const Skills = () => {
    const skills = ["React", "Javascript", "Html/Css", "Bootstrap", "Python", "Adobe Creative Suites", "UX Design", "Bootstrap"]
    return(
        <div className="skillswrapper">
            <h1>Skills</h1>
            <div className="skillboxwrapper">
            {skills.map((skill) => {
                return(
                    <div className="skillbox"><h2>{skill}</h2></div>
                    
                )
            })}
            </div>
            <button id="skillsBtn">See More</button>
        </div>
    )
}