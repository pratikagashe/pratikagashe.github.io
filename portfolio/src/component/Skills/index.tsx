import React from 'react'
import { Grid } from '@material-ui/core'
import './styles.scss'

const skillSet = [
    {
        skill: 'React JS',
        progress: '80%',
    },
    {
        skill: 'JavaScript',
        progress: '85%',
    },
    {
        skill: 'TypeScript',
        progress: '80%',
    },
    {
        skill: 'GraphQL',
        progress: '70%',
    },
    {
        skill: 'Node JS',
        progress: '65%',
    },
    {
        skill: 'HTML',
        progress: '95%',
    },
    {
        skill: 'CSS',
        progress: '90%',
    },
    {
        skill: 'jQuery',
        progress: '88%',
    },
    {
        skill: 'Wordpress',
        progress: '75%',
    },
    {
        skill: 'Core PHP',
        progress: '60%',
    },
]

const Skils: React.FunctionComponent = () => {
    return (
        <div className="skills section" id="skills">
            <Grid
                container
                justify="space-between"
                alignItems="stretch"
                spacing={3}
            >
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="title title--centered">
                        <h3>My Skills</h3>
                        <h2 className="shadowText">Skills</h2>
                    </div>
                </Grid>
                {skillSet &&
                    skillSet.length > 0 &&
                    skillSet.map((item: any, index: number) => (
                        <Grid
                            item
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                            key={`skill${index}`}
                        >
                            <div className="skillSet">
                                <h3>{item.skill}</h3>
                                <div className="progress">
                                    <div
                                        className="progressBar"
                                        style={{ width: item.progress }}
                                    >
                                        <span>{item.progress}</span>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}

export default Skils
