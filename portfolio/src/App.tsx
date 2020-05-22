import React from 'react'
import Nav from './component/Nav'
import HomeSection from './component/HomeSection'
import About from './component/About'
import Resume from './component/Resume'
import Skills from './component/Skills'
import Blogs from './component/Blogs'

import './main.scss'

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="container">
                <HomeSection />
                <About />
                <Resume />
                <Skills />
                <Blogs />
            </div>
        </div>
    )
}

export default App
