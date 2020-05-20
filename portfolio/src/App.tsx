import React from 'react'
import Nav from './component/Nav'
import HomeSection from './component/HomeSection'
import About from './component/About'
import './main.scss'

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="container">
                <HomeSection />
                <About />
            </div>
        </div>
    )
}

export default App
