import { ProjectDisplay } from "../components/ProjectDisplay";
import { useEffect } from "react";

export const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return(
        <div className="projectswrapper">
            <div className="projTitleWrapper">
            <h1 id="projectTitle">Projects</h1>
            <div className="ux">
            <h3 style={{marginTop: "40px"}}>Want to see my UX/UI portfolio?</h3>
            <a href="https://sreneelive9.wixsite.com/steph-create" className="skillbtn" style={{textDecoration: "none", color: "black"}}>UX Portfolio</a>
            </div>
            </div>
            <hr />
            <ProjectDisplay />
            
        </div>
    )
}