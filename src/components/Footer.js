import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <div className="footerwrapper">
        <div className="spacing"></div>
        <hr />
        <div className="links">
            <div className="nameandlinks">
                <h1>Stephanie</h1>
                <ul>
                <Link to="/" className='footerLink'><p>Home</p></Link>
                <Link to="/projects" className='footerLink'><p>Projects</p></Link>
                <Link to="/about" className='footerLink'><p>About</p></Link>
                <Link to="/contact" className='footerLink'><p>Contact</p></Link>
                </ul>
            </div>
            <div className="sociallinks">
                <div className="col1">
                <div className="text">Socials</div>
                <div className="instagram"></div>
                </div>
                <div className="col2">
                <div className="linkedin"></div>
                <div className="github"></div>
                </div>
               
                
            </div>
        </div>
        </div>
            
            
    )
}