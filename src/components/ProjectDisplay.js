export const ProjectDisplay = () => {
   
    const projects = [
        {name: "weather app",
    description: "sf",
    tags: "JS, bootstrap, Sass",
    color: "#8D7A4A",
    id: "box1",
    projurl: "",
    giturl: ""
}, {name: "To Do List app",
description: "sf",
tags: "JS, bootstrap, Sass",
color: "#672243",
id: "box2",
projurl: "",
    giturl: ""
},
{name: "Library app",
    description: "sf",
    tags: "JS, bootstrap, Sass",
    color: "#3E523F",
    id: "box3",
    projurl: "",
    giturl: ""
},
{name: "Flash Card Quiz App",
    description: "sf",
    tags: "JS, bootstrap, Sass",
    color: "#35334C",
    id: "box4",
    projurl: "",
    giturl: ""
}

    ];
    return(
        <div className="projectdisplaywrapper">
            {projects.map((project) => {
                return(
                    <div className="project">
                    <div className="projectbox">
                        <div className="projimg" id={project.id}></div>
                        <div className="projtext" style={{backgroundColor: project.color}}>
                            
                        <h3>{project.name}</h3>
                        <p>{project.tags}</p>
                        
                        </div>
                    </div>
                    <div className="btns">
                    <button>View Project</button>
                    <button>Github Repo</button>
                    </div>
                    </div>
                    
                )
                
            })
            }
            
        </div>
    )
}