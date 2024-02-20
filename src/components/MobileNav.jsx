import { Link } from "react-router-dom"
import Mail from '../assets/Mail.jsx'
import Call from '../assets/Call.jsx'
import Linkedin from '../assets/LinkedIn.jsx'

const MobileNav = ({MobileNavShow})=>{
    return(
        <>
        <div className={`mobilenavbar`}>
            <div className="mainNav">
                    <ul className="nav-links">
                        <li className="navItem" onClick={()=>MobileNavShow()}><Link to="/">Home</Link></li>
                        <li className="navItem" onClick={()=>MobileNavShow()}><Link to="/about">About</Link></li>
                        <li className="navItem" onClick={()=>MobileNavShow()}><Link to="/projects">Projects</Link></li>
                        <li className="navItem" onClick={()=>MobileNavShow()}><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <span className="mobDivder"></span>
                <div className="mainSocial">
                    <ul className="social">
                        <li><Link to="mailto:mr.dee.ghogha@gmail.com"><Mail /></Link></li>
                        <li><Link to="tel:+91 8528580303"><Call /></Link></li> 
                        <li><Link target="_blank" to="https://www.linkedin.com/in/dharminder-singh-9983861ba/"><Linkedin /></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default MobileNav