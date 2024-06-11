import { Link } from "react-router-dom";
import { Skills } from "../components/Skills";
import { Welcome } from "../components/Welcome";
import '../App.css';
import { useEffect } from "react";

export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
   

    return(
        <div className="homeWrapper">
            
            <div className="hero">
          
            <h1 style={{color: 'white', 
  fontSize: '10vw', 
  marginTop: 0}} className="webdev">Web Developer</h1>
                <div className="heroItems">
                
               
                <h2 style={{color: 'white'}}>Stephanie Livengood</h2>
                </div>
               
                
            </div>
            <Link to="/projects"><button id="projectBtn">Projects</button></Link>
            <Welcome />
            <Skills />
            
        </div>
    )
}