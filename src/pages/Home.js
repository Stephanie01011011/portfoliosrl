import { Skills } from "../components/Skills"
import { Welcome } from "../components/Welcome"

export const Home = () => {
    return(
        <div className="homeWrapper">
            <div className="hero">
                <button className="heroBtn">See Projects</button>
            </div>
            <Welcome />
            <Skills />
            
        </div>
    )
}