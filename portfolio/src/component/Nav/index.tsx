import React from 'react'
import { Grid, Link } from '@material-ui/core'
import './styles.scss'

const Nav: React.FunctionComponent = () => {
    return (
        <nav className="nav">
            <div className="container">
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <h1>Pratik</h1>
                    </Grid>
                    <Grid item>
                        <ul>
                            <li>
                                <Link color="inherit" className="active">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link color="inherit">About</Link>{' '}
                            </li>
                            <li>
                                <Link color="inherit">Resume</Link>{' '}
                            </li>
                            <li>
                                <Link color="inherit">Skills</Link>{' '}
                            </li>
                            <li>
                                <Link color="inherit">Projects</Link>{' '}
                            </li>
                            <li>
                                <Link color="inherit">Blogs</Link>{' '}
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </div>
        </nav>
    )
}

export default Nav
