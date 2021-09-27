import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActionArea, CardMedia, Typography, Grid, Container } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary.light,
    },
    card: {
        maxWidth: 250,
        margin: 0,
        height: 420
    },
    media: {
        height: 160,
    },
}));


export default function Portfolio(props) {
    const classes = useStyles();

    if (props.data) {
        var projects = props.data.projects.map(function (projects) {
            var projectImage = 'images/portfolio/' + projects.image;

            return (
                <div key={projects.title} className="columns portfolio-item">
                <Card className={classes.card}>
                    <CardActionArea href = {projects.url} hover = "return false;">
                        <CardMedia className={classes.media} image={projectImage} title={projects.title} />
                        <CardContent height="200px">
                            <Typography onclick = "return false;" color = "black" gutterBottom variant="h5" component="h2" align = "center" underline = "true"><b>{projects.title}</b></Typography>
                            <Typography color = "black">{projects.description}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
            )
        })
    }

    return (
        <section className={classes.root} id="portfolio">
            <Container className="row">
            <h1>Check Out Some of My Projects</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {projects}
                    </div>
            </Container>
        </section>
    );
}

