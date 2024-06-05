import CountUp from "react-countup" ;
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
const Counter = ()=> {
const [counterState , setcounterState] = useState(false)
    return(
        <>
        <section className="fact-areas">
            <div className="container">
                <ScrollTrigger onEnter={()=>setcounterState(true)} onExit={()=>setcounterState(false)}>
                <div className="row">
                    <div className="single-fact">
                        <h1 className="counter">
                            { counterState &&
                                <CountUp start={0} end={25} duration={2.75}>
                                </CountUp>
                            } 
                            <span>+</span>
                        </h1>
                        <p>Project Completed</p>
                    </div>
                    <div className="single-fact">
                        <h1 className="counter">
                            { counterState && 
                                <CountUp start={0} end={30} duration={2.75}>
                                </CountUp>
                            } 
                            <span>+</span>
                        </h1>
                        <p>Happy clients</p>
                    </div>
                    <div className="single-fact">
                        <h1 className="counter">
                            {counterState && 
                                <CountUp start={0} end={500} duration={2.75}>
                                </CountUp>
                            } <span>+</span>
                        </h1>
                        <p>Cup of Coffee</p>
                    </div>
                    <div className="single-fact">
                        <h1 className="counter">
                            {counterState && 
                                <CountUp start={0} end={5} duration={2.75}>
                                </CountUp>
                            } 
                            <span>+</span>
                        </h1>
                        <p>Personal Projects</p>
                    </div>
                </div>
                </ScrollTrigger>
            </div>
        </section>
        </>
    )
}
export default Counter