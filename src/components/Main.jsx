import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { Routes , Route, } from 'react-router-dom'
const Main = ()=> {

    return(
        <>
        <main className='main'>
            
                <Routes>
                    <Route path='/' element= {<Home />} />
                    <Route path='/home' element= {<Home />} />
                    <Route path='/about' element= {<About />} />
                    <Route path='/projects' element= {<Projects />} />
                    <Route path='/contact' element= {<Contact />} />
                    <Route path='*' element= {<div>404</div>} />
                </Routes>
           
        </main>
        </>
    )
}

export default Main