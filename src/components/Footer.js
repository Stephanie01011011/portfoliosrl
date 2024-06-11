import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <div className="footerwrapper">
        <div className="spacing"></div>
        
        <div className="links">
            <div className="nameandlinks">
                <h1>Stephanie</h1>
                <ul id="footerLinks">
                <Link to="/" className='footerLink'><p>Home</p></Link>
                <Link to="/projects" className='footerLink'><p>Projects</p></Link>
                <Link to="/about" className='footerLink'><p>About</p></Link>
                <Link to="/contact" className='footerLink'><p>Contact</p></Link>
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