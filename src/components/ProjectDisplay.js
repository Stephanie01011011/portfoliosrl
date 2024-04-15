export const ProjectDisplay = () => {
   
    const projects = [
        {name: "Star Wars Adventure",
        description: "sf",
        tags: "Typescript, Materials UI, React, HTML, Star Wars API",
        color: "#008DC4",
        id: "box7",
        projurl: "https://stephanie01011011.github.io/starwars/",
        giturl: "https://github.com/Stephanie01011011/starwars"
    },
        {name: "Travel Booking Site",
    description: "sf",
    tags: "Typescript, Materials UI, React, HTML/CSS",
    color: "#008DC4",
    id: "box6",
    projurl: "https://stephanie01011011.github.io/travelsite/",
    giturl: "https://github.com/Stephanie01011011/travelsite"
},
        {name: "Product Landing Page",
    description: "sf",
    tags: "JS, React, HTML/CSS, Bootstrap",
    color: "#008DC4",
    id: "box5",
    projurl: "https://stephanie01011011.github.io/solarise/",
    giturl: "https://github.com/Stephanie01011011/solarise"
},
        {name: "Social Media Project",
    description: "sf",
    tags: "JS, React, HTML/CSS, Firebase",
    color: "#008DC4",
    id: "box3",
    projurl: "https://socialmedia-792e1.web.app/",
    giturl: ""
},
        {name: "Weather App",
    description: "sf",
    tags: "JS, HTML/CSS, API Integration, React",
    color: "#008DC4",
    id: "box1",
    projurl: "https://react-weather-api-steph.netlify.app/",
    giturl: "https://github.com/Stephanie01011011/react-weather"
}, {name: "To Do List",
description: "sf",
tags: "JS, React, HTML/CSS",
color: "#008DC4",
id: "box2",
projurl: "https://Stephanie01011011.github.io/ReactTodo",
    giturl: "https://github.com/Stephanie01011011/ReactTodo"
},

{name: "Flash Card Quiz App",
    description: "sf",
    tags: "JS, React, HTML/CSS",
    color: "#008DC4",
    id: "box4",
    projurl: "https://stephanie01011011.github.io/flashcardweb",
    giturl: "https://github.com/Stephanie01011011/flashcardweb"
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
                    <a href={project.projurl}>View Project</a>
                    <a href={project.giturl}>Github Repo</a>
                    </div>
                    </div>
                    
                )
                
            })
            }
            
        </div>
    )
}