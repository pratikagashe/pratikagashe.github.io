import React from 'react'
import { Grid, Button } from '@material-ui/core'
import './styles.scss'

const academics = [
    {
        year: '2018',
        title: 'Master of Computer Application',
        subText: 'Sikkim Manipal University',
    },
    {
        year: '2013',
        title: 'Bachelor of Science in Information Technology',
        subText: 'Mumbai University',
    },
]

const workExperience = [
    {
        year: '01/2019 to Present',
        title: 'Software Development Engineer II',
        subText: 'Heady',
        description: (
            <ul>
                <li>
                    Working on ReactJS, TypeScript, GraphQL and other front-end
                    tech stacks.
                </li>
                <li>
                    Plays a significant role in breaking down features and plan
                    development.
                </li>
                <li>
                    Follow strictly GIT branching strategy and code standards.
                </li>
                <li>
                    Mentor and train Jr.Developer in order to improve their
                    skills.
                </li>
            </ul>
        ),
    },
    {
        year: '01/2018 - 12/2018',
        title: 'Operations and IT Coordinator',
        subText: 'Daniel Surveying FZC ',
        description: (
            <ul>
                <li>
                    Effectively oversee and manage the efficiency of each
                    department through coordination and communication between
                    support and business function.
                </li>
                <li>
                    Play a significant role in planning and implementation of
                    ERP systems.
                </li>
                <li>Control timely submission of deliverables. </li>
            </ul>
        ),
    },
    {
        year: '02/2017 - 12/2017',
        title: 'UI/UX Developer',
        subText: 'LocoBuzz',
        description: (
            <ul>
                <li>
                    Developing and maintaining the front end functionality of
                    websites.
                </li>
                <li>
                    Carrying out tasks related to Web Based social media
                    product’s flow.
                </li>
                <li>
                    Improving a user’s experience for all application views.
                </li>
                <li>Data Binding on ASP.NET platform with JavaScript.</li>
            </ul>
        ),
    },
    {
        year: '09/2014 - 02/2017',
        title: 'Web Developer, UX and Technology',
        subText: 'Hepta',
        description: (
            <ul>
                <li>
                    Writing cross-browser and mobile compliant HTML, CSS &amp;
                    jQuery
                </li>
                <li>
                    Developed CMS on core PHP and MySql to manage website data.
                </li>
                <li>
                    Suggest and develop animation effects to improve look and
                    feel of Website.
                </li>
                <li>Successfully launched over 25 websites.</li>
                <li>
                    Install and modify WordPress based website as per client’s
                    requirement.
                </li>
            </ul>
        ),
    },
    {
        year: '12/2013 - 06/2014',
        title: 'Jr. Software Developer',
        subText: 'Prachin Healthcare',
        description: (
            <ul>
                <li>
                    Technical Support for Wipro’s Hospital Information System
                    (HIS).
                </li>
                <li>Writing HTML Templates for software.</li>
            </ul>
        ),
    },
    {
        year: '04/2013 - 09/2013',
        title: 'Frontend Developer',
        subText: 'SkyQ Infotech',
        description: (
            <ul>
                <li>Writing HTML, CSS &amp; jQuery as per website designs.</li>
            </ul>
        ),
    },
]

const Resume: React.FunctionComponent = () => {
    return (
        <div className="resume section" id="resume">
            <Grid
                container
                justify="space-between"
                alignItems="stretch"
                spacing={3}
            >
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="title title--centered">
                        <h3>Resume</h3>
                        <h2 className="shadowText">Resume</h2>
                        <p>
                            Little brief about my work experience and academics.
                        </p>
                    </div>
                </Grid>
                <h3 className="subTitle">Work Experience</h3>
                {workExperience &&
                    workExperience.length > 0 &&
                    workExperience.map((item: any, index: number) => (
                        <Grid
                            item
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                            key={`workExperience${index}`}
                        >
                            <div className="resumeTiles">
                                <p className="year">{item.year}</p>
                                <p className="cardTitle">{item.title}</p>
                                <p className="cardSubText">{item.subText}</p>
                                {item.description && item.description}
                            </div>
                        </Grid>
                    ))}
                <h3 className="subTitle">Academics</h3>
                {academics &&
                    academics.length > 0 &&
                    academics.map((item: any, index: number) => (
                        <Grid
                            item
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                            key={`academics${index}`}
                        >
                            <div className="resumeTiles">
                                <p className="year">{item.year}</p>
                                <p className="cardTitle">{item.title}</p>
                                <p className="cardSubText">{item.subText}</p>
                            </div>
                        </Grid>
                    ))}
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="downloadResume"
                >
                    <Button
                        variant="contained"
                        className="yellowFilled"
                        size="large"
                    >
                        Download CV
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Resume
