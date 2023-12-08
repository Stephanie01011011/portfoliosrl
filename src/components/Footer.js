import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <div className="footerwrapper">
        <div className="spacing"></div>
        <hr />
        <div className="links">
            <div className="nameandlinks">
                <h1>Stephanie</h1>
                <ul id="footerLinks">
                <Link to="/portfoliosrl" className='footerLink'><p>Home</p></Link>
                <Link to="/portfoliosrl/projects" className='footerLink'><p>Projects</p></Link>
                <Link to="/portfoliosrl/about" className='footerLink'><p>About</p></Link>
                <Link to="/portfoliosrl/contact" className='footerLink'><p>Contact</p></Link>
                </ul>
            </div>
            <div className="sociallinks">
                <div className="col1">
                <div className="text">Socials</div>
                <a href="https://www.instagram.com/stephiirenee/"><div className="instagram"></div></a>
                </div>
                <div className="col2">
                <a href="https://www.linkedin.com/in/slivengood01/"><div className="linkedin"></div></a>
                <a href="https://github.com/Stephanie01011011"><div className="github"></div></a>
                </div>
               
                
            </div>
        </div>
        </div>
            
            
    )
}