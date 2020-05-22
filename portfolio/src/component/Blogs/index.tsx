import React from 'react'
import { Grid } from '@material-ui/core'
import { blogList } from './blogs'
import './styles.scss'

const Blogs: React.FunctionComponent = () => {
    return (
        <div className="blogs section">
            <Grid
                container
                justify="space-between"
                alignItems="stretch"
                spacing={3}
            >
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="title title--centered">
                        <h3>My Blogs</h3>
                        <h2 className="shadowText">Blogs</h2>
                    </div>
                </Grid>
                {blogList &&
                    blogList.length > 0 &&
                    blogList.map((blog: any, index: number) => {
                        const blogImagestyle = {
                            backgroundImage: `url('${blog.image}')`,
                        }
                        return (
                            <Grid
                                item
                                lg={6}
                                md={6}
                                sm={6}
                                xs={12}
                                key={`blog${index}`}
                            >
                                <a
                                    href={blog.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="blogTile">
                                        <div
                                            className="blogImagestyle"
                                            style={blogImagestyle}
                                        ></div>
                                        <h3>{blog.title}</h3>
                                        <p>{`${blog.date} - ${blog.readingTime} Read`}</p>
                                    </div>
                                </a>
                            </Grid>
                        )
                    })}
            </Grid>
        </div>
    )
}

export default Blogs
