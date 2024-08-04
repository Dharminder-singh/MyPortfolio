import { Link } from "react-router-dom"
import WeatherGif from "../../../assets/Images/WeatherApp.gif"
import VedioEditor from "../../../assets/Images/VedioEditor.gif"
import music from "../../../assets/Images/music.gif"
import SlideSignup from "../../../assets/Images/SlideSignup.gif"
const Projects = ()=> {

    return(
        <>
            <section className="Projects">
                <div className="container">
                    <div className="HeadingContent">
                        <h2 className="maintitle">Our Latest Featured Projects</h2>
                        <p className="text">Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="project">
                        <div className="single-project">
                            <a href="https://dharminderweatherapp.netlify.app/" target="_blank">
                                <img src={WeatherGif} alt="" srcset="" />
                                <h3>Weather App</h3>
                            </a>
                        </div>
                        <div className="single-project">
                            <a href="https://dharminder-video-editor.netlify.app/" target="_blank">
                                <img src={VedioEditor} alt="" srcset="" />
                                <h3>Video Editor UI</h3>
                            </a>
                        </div>
                        <div className="single-project">
                            <a href="https://slidesignup.netlify.app/" target="_blank">
                                <img src={SlideSignup} alt="" srcset="" />  
                                <h3>Slide Signup</h3>
                            </a>
                        </div>
                        <div className="single-project">
                            <a href="https://myharmonium.netlify.app/" target="_blank">
                                <img src={music} alt="" srcset="" />  
                                <h3>Harmonium</h3>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects