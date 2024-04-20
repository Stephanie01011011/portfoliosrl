import { Link } from "react-router-dom";
import { Skills } from "../components/Skills";
import { Welcome } from "../components/Welcome";

import { useEffect } from "react";

export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return(
        <div className="homeWrapper">
            <div className="hero">
                <div className="heroItems">
                <h1 style={{color: 'white', fontSize: '100px', marginTop: 0}}>UX/UI Development</h1>
                <h1 style={{color: 'white'}}>Stephanie Livengood</h1>
                </div>
               
                
            </div>
            <Link to="/portfoliosrl/projects"><button id="projectBtn">Projects</button></Link>
            <Welcome />
            <Skills />
            
        </div>
    )
}