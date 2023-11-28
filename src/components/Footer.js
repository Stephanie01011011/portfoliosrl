import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <div className="footerwrapper">
        <p>Back To Top</p>
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

            </div>
        </div>
        </div>
            
            
    )
}