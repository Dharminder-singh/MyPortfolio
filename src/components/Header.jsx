import Nav from './Nav'
import logo from '../assets/logo.png'
import MobileNav from './MobileNav'
import { useState ,useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Header = ()=> {

    const [show , setShow] = useState(false)

    const menu = useRef();
    const closemenu = useRef();

    const MobileNavShow = ()=>{
        setShow(pre => !pre)
        document.body.classList.toggle('navBarActive');
    }

    useEffect(()=>{

        let handelcheck = (e)=>{
            if(!closemenu.current.contains(e.target)){
                if(!menu.current.contains(e.target)){
                    setShow(false)
                    document.body.classList.remove('navBarActive');
                }
            }
            if(closemenu.current.contains(e.target)){
                setShow(show)
                if(!document.body.classList.contains('navBarActive')){
                    document.body.classList.remove('navBarActive');
                }
                
                
            }
        };
        document.addEventListener("mousedown" , handelcheck)

        return() =>{
            document.removeEventListener("mousedown" , handelcheck)
        }
    })

    return(
        <>
        <header>
            <div className='container'>
                <div className='main_header'>
                    <div className='logo'>
                        <div className='logoImg'>
                            <Link to='/'>
                                <img src={logo} alt="Logo" width="80" height="80" />
                            </Link>
                        </div>
                        <div className='logoText'>
                            <span></span>
                        </div>
                    </div>
                    <Nav />
                        <div className='burger' ref={closemenu}>
                        <div className="burger" onClick={() => MobileNavShow()} >
                            <div className="line1 line"></div>
                            <div className="line2 line"></div>
                            <div className="line3 line"></div>
                        </div>
                        </div>
                </div>
            </div>
        </header>
        <div className={`mobileNav ${show ? "show" : ""}`} ref={menu} >
            <MobileNav 
            MobileNavShow={MobileNavShow}
            />
        </div>
        
        </>
    )
}

export default Header