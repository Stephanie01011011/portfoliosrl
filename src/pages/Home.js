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
                <Link to="/portfoliosrl/projects"><button className="heroBtn">See Projects</button></Link>
            </div>
            <Welcome />
            <Skills />
            
        </div>
    )
}