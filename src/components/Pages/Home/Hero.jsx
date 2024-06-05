import { Link } from "react-router-dom"
import mainImg from "../../../assets/Images/MainImage.png"
import Dotgifs from "../../../assets/Images/dot.webm"
const Hero = ()=> {

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
                                    <video src={Dotgifs} type="video/webm" autoPlay loop muted />
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
        
        </>
    )
}

export default Hero