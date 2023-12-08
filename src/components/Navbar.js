
import { Link } from 'react-router-dom';

export const Navbar = () => {
    
    const handleClick =() => {
        let fullmenu = document.getElementById('fullmenu');
        fullmenu.style.display = 'block';
    }

    const handleClose =() => {
        let fullmenu = document.getElementById('fullmenu');
        fullmenu.style.display = 'none';
    }
    
    
    return(
       
            
      
        <div className="navWrapper" id='fullmenu'>
            
    <ul>
        
        <Link to="/portfoliosrl" id='homelink'><p>Home</p></Link>
        <Link to="/portfoliosrl/projects" id='projectlink'><p>Projects</p></Link>
        <Link to="/portfoliosrl/about" id='aboutlink'><p>About</p></Link>
        <Link to="/portfoliosrl/contact" id='contactlink'><p>Contact</p></Link>

    </ul>
    <div className="name">Stephanie Livengood</div>
    </div>
   

    )
}