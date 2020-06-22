import React, { useState } from 'react'
import { Grid, Link } from '@material-ui/core'
import './styles.scss'

const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
        const sectionTop: number = section.offsetTop - 75
        window.scrollTo({ left: 0, top: sectionTop, behavior: 'smooth' })
    }
}

const Menu = () => {
    return (
        <ul>
            <li>
                <Link
                    color="inherit"
                    onClick={() => scrollToSection('home')}
                    className="active"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link color="inherit" onClick={() => scrollToSection('about')}>
                    About
                </Link>
            </li>
            <li>
                <Link color="inherit" onClick={() => scrollToSection('resume')}>
                    Resume
                </Link>
            </li>
            <li>
                <Link color="inherit" onClick={() => scrollToSection('skills')}>
                    Skills
                </Link>
            </li>
            <li>
                <Link color="inherit" onClick={() => scrollToSection('blogs')}>
                    Blogs
                </Link>
            </li>
        </ul>
    )
}

const Nav: React.FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="nav">
            <div className="container">
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <h1>Pratik</h1>
                    </Grid>
                    <Grid item className="hide-mobile hide-tablet">
                        <Menu />
                    </Grid>
                </Grid>
                <div
                    className="mobileMenu hide-desktop"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div
                        className={isMenuOpen ? 'menuOpen menuBtn' : 'menuBtn'}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu">{isMenuOpen && <Menu />}</div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
