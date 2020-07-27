import React from 'react'
import { Grid, Button } from '@material-ui/core'
import HeroImage from '../../assets/images/heroImage.jpg'
import './styles.scss'

const HomeSection: React.FunctionComponent = () => {
    return (
        <div className="heroSection" id="home">
            <Grid
                container
                justify="space-between"
                alignItems="center"
                spacing={3}
            >
                <Grid item lg={5} md={5} sm={12} xs={12}>
                    <div className="heroText">
                        <p className="subHeading">Hello!</p>
                        <h1>
                            I'm{' '}
                            <span className="yellowText">Pratik Agashe</span>
                        </h1>
                        <h2>A Sr.Front-End Developer</h2>
                        <a
                            href="https://pratikagashe.github.io/static/media/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            <Button
                                variant="contained"
                                className="yellowFilled"
                            >
                                Download CV
                            </Button>
                        </a>
                    </div>
                </Grid>
                <Grid item lg={7} md={7} sm={12} xs={12}>
                    <div className="heroImage blackFrame blackFrame--style1">
                        <img
                            src={HeroImage}
                            alt="Pratik Agashe"
                            className="fullWidth"
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeSection
