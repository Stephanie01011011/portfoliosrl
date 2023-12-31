export const Skills = () => {
    const skills = [{skill: "React", color: "#8D7A4A"}, 
    {skill: "javascript", color: "#672243"}, 
    {skill: "HTML/ CSS", color: "#3E523F"}, 
    {skill: "Bootstrap", color: "#35334C"}, 
     
    
    
    {skill: "API's", color: "#35334C"},
    {skill: "UX Design", color: "#3E523F"}, 
    {skill: "Adobe", color: "#672243"}, 
    {skill: "Python", color: "#8D7A4A"}]
    return(
        <div className="skillswrapper">
            <h1>Skills</h1>
            <div className="skillboxwrapper">
            {skills.map((skill) => {
                return(
                    <div className="skillbox" style={{backgroundColor: skill.color}}><h2>{skill.skill}</h2></div>
                    
                )
            })}
            </div>
            <div className="skillbtn">
            <a href="https://www.linkedin.com/in/slivengood01/details/featured/1635551310909/single-media-viewer/?profileId=ACoAADHDYysBKolT3tXI-IFLrIKkbWWaFoDHtFM" id="skillsBtn">See More</a>
            </div>
            <p id="topBtn" onClick={() => {
                 window.scrollTo(0, 0)
            }}>Back To Top</p>
        </div>
    )
}