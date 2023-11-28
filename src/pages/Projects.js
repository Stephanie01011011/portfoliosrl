import { ProjectDisplay } from "../components/ProjectDisplay";
import { useEffect } from "react";

export const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return(
        <div className="projectswrapper">
            <h1 id="projectTitle">Projects</h1>
            <hr />
            <ProjectDisplay />
            
        </div>
    )
}