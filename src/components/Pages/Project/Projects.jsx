import { Link } from "react-router-dom"
import Weatherwebm from "../../../assets/Images/WeatherApp.webm"
import VedioEditor from "../../../assets/Images/VedioEditor.webm"
import music from "../../../assets/Images/music.webm"
import SlideSignup from "../../../assets/Images/SlideSignup.webm"
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
                            <video src={Weatherwebm} type="video/webm" autoPlay="autoplay" loop playsInline muted />
                                <h3>Weather App</h3>
                            </a>
                        </div>
                        <div className="single-project">
                            <a href="https://dharminder-video-editor.netlify.app/" target="_blank">
                            <video src={VedioEditor} type="video/webm" autoPlay="autoplay" loop playsInline muted />
                                <h3>Video Editor UI</h3>
                            </a>
                        </div>
                        <div className="single-project">
                            <a href="https://slidesignup.netlify.app/" target="_blank">
                            <video src={SlideSignup} type="video/webm" autoPlay="autoplay" playsInline loop muted />  
                                <h3>Slide Signup</h3>
                            </a>
                        </div>
                        <div className="single-project">
                            <a href="https://myharmonium.netlify.app/" target="_blank">
                            <video src={music} type="video/webm" autoPlay="autoplay" loop playsInline muted /> 
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