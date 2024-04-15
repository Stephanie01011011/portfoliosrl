export const Skills = () => {
    const skills = [{skill: "React", color: "#EF6D57"}, 
    {skill: "Javascript", color: "#10315B"}, 
    {skill: "Typescript", color: "#B2214E"}, 
    {skill: "Bootstrap", color: "#008DC4"}, 
     
    
    
    {skill: "Material UI", color: "#008DC4"},
    {skill: "UX Design", color: "#B2214E"}, 
    {skill: "Adobe", color: "#10315B"}, 
    {skill: "Python", color: "#EF6D57"}]
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
            <a href="https://www.linkedin.com/in/slivengood01" id="skillsBtn">See LinkedIn</a>
            </div>
            <p id="topBtn" onClick={() => {
                 window.scrollTo(0, 0)
            }}>Back To Top</p>
        </div>
    )
}