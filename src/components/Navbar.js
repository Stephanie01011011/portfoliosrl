
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
 const [open, setOpen] = useState(false);   
   
const handleClick = () => {
    if(open === false){
        document.getElementById("mobile").style.display = "block";
        setOpen(true);
    } else {
        document.getElementById("mobile").style.display = "none";
        setOpen(false);
    }
    
}
    
    
    return(
       <>
            
            <i className="fa-solid fa-bars fa-xl menuIcon" style={{color: "#B2214E"}} onClick={handleClick}></i>
        <div className="navWrapper" id='fullmenu'>
            
    <ul>
        
        <Link to="/" id='homelink'><p>Home</p></Link>
        <Link to="/projects" id='projectlink'><p>Projects</p></Link>
        <Link to="/about" id='aboutlink'><p>About</p></Link>
        <Link to="/contact" id='contactlink'><p>Contact</p></Link>

    </ul>
    <div className="name">Stephanie Livengood</div>
    </div>
    <div className="mobileMenu" id='mobile'>
    <ul onClick={handleClick}>
        
        <Link to="/" id='homelink'><p>Home</p></Link>
        <Link to="/projects" id='projectlink'><p>Projects</p></Link>
        <Link to="/about" id='aboutlink'><p>About</p></Link>
        <Link to="/contact" id='contactlink'><p>Contact</p></Link>

    </ul>
    </div>
    </>

   

    )
}