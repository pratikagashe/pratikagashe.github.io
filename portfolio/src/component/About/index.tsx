import React from 'react'
import { Grid, Button } from '@material-ui/core'
import aboutImage from '../../assets/images/about.jpg'
import './styles.scss'

const About: React.FunctionComponent = () => {
    return (
        <div className="about section">
            <Grid
                container
                justify="space-between"
                alignItems="center"
                spacing={3}
            >
                <Grid item lg={5} md={5} sm={10} xs={10}>
                    <div className="aboutImage blackFrame blackFrame--style2">
                        <img
                            src={aboutImage}
                            alt="Pratik Agashe"
                            className="fullWidth"
                        />
                    </div>
                </Grid>
                <Grid item lg={6} md={6} sm={10} xs={10}>
                    <div className="aboutMe">
                        <div className="title">
                            <h3>About Me</h3>
                            <h2 className="shadowText">About</h2>
                        </div>
                        <ul>
                            <li>
                                <strong>Name:</strong>
                                <span>Pratik Agashe</span>
                            </li>
                            <li>
                                <strong>Phone:</strong>
                                <span>
                                    <a href="tel:+919920151562">
                                        +91 9920 151562
                                    </a>
                                </span>
                            </li>
                            <li>
                                <strong>Email-id:</strong>
                                <span>
                                    <a href="mailto:pratikagashe007@gmail.com">
                                        pratikagashe007@gmail.com
                                    </a>
                                </span>
                            </li>
                            <li>
                                <strong>GitHub:</strong>
                                <span>
                                    <a
                                        href="https://github.com/pratikagashe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        github.com/pratikagashe
                                    </a>
                                </span>
                            </li>
                            <li>
                                <strong>LinkedIn:</strong>
                                <span>
                                    <a
                                        href="https://www.linkedin.com/in/pratik-agashe-5096147a/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        linkedin.com/in/pratik-agashe-5096147a
                                    </a>
                                </span>
                            </li>
                            <li>
                                <strong>Medium:</strong>
                                <span>
                                    <a
                                        href="https://medium.com/@pratikagashe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        medium.com/@pratikagashe
                                    </a>
                                </span>
                            </li>
                        </ul>
                        <Button variant="contained" className="yellowFilled">
                            Download CV
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default About
