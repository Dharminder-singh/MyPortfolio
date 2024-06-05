import { Link } from "react-router-dom"
import secondImg from "../../../assets/Images/SecondaryImage.png"
const AboutMe = ()=> {

    return(
        <>
        
        <section className="about">
            <div className="container">
                <div className="aboutBox">
                    <div className="aboutLeft">
                        <div className="heroimg">
                            <img src={secondImg} alt="" srcset="" />
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
        
        </>
    )
}

export default AboutMe