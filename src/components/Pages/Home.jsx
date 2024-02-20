import { Link } from "react-router-dom"
import mainImg from "../../assets/Images/MainImage.png"
import Dotgifs from "../../assets/Images/dot.gif"
import { useState } from "react";
const Home = ()=> {

    return(
        <>

        <section className="hero">
            <div className="container">
                <div className="herobox">
                    <div className="heroLeft">
                        <div className="context">
                            <p className="title">This is Me</p>
                            <h1>Dharminder Singh</h1>
                            <p className="text">Welcome to My Front End Developer Portfolio, where creativity meets functionality and every line of code tells a story. With a passion for crafting engaging user experiences and a commitment to cutting-edge technologies, I specialize in bringing ideas to life through beautifully designed and seamlessly interactive websites.</p>
                            <Link className="primaryBtn">Discover Now</Link>
                        </div>
                    </div>
                    <div className="heroRight">
                        <div className="banner">
                            <div className="colorBg">
                                <div className="mainDotBox">
                                    <div className="dotgif">
                                        <img src={Dotgifs} alt="" />
                                    </div>
                                    <div className="heroimg">
                                        <img src={mainImg} alt="" srcset="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about">
            <div className="container">
                <div className="aboutBox">
                    <div className="aboutLeft">
                        <div className="heroimg">
                            {/* <img src={mainImg} alt="" srcset="" /> */}
                        </div>
                    </div>
                    <div className="aboutRight">
                        <div className="content">
                            <p className="title">
                                About me
                            </p>
                            <h2 className="maintitle">Personal Details</h2>
                            <p className="text">I am at web developer ground and have a knowledge of doing anything related to this platform. Also, I have got an impressive urgency of learning and gaining new skills and knowledge with total ease. I am skillful at programming / coding languages and other skills such as (CSS/HTML, Photoshop, javascript , React.js)
</p>
                            <Link to='about' className="primaryBtn">VIEW FULL DETAILS</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="services">
            <div className="container">
                <div className="servicesbox">
                    <div className="content">
                        <h2 className="maintitle">My Offered Services</h2>
                        <p className="text">At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.</p>
                    </div>
                    <div className="myServices">
                        <div className="single-services">
                            <span className="lnr lnr-pie-chart"></span>
                            <h3>Web Design</h3>
                        </div>
                        <div className="single-services">
                            <span className="lnr lnr-laptop-phone"></span>
                            <h3>Web Development</h3>
                        </div>
                        <div className="single-services">
                            <span className="lnr lnr-camera"></span>
                            <h3>Photography</h3>
                        </div>
                        <div className="single-services">
                            <span className="lnr lnr-picture"></span>
                            <h3>Clipping Path</h3>
                        </div>
                        <div className="single-services">
                            <span className="lnr lnr-tablet"></span>
                            <h3>Apps Interface</h3>
                        </div>
                        <div className="single-services">
                            <span className="lnr lnr-rocket"></span>
                            <h3>Graphic Design</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home