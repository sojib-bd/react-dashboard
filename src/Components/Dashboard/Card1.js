import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SingleLineStroke from './SingleLineStroke';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Card1() {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardContent >
                <Typography className={classes.title} color="textPrimary" gutterBottom style={{ marginLeft: -200 }}>
                    Visit Today
               </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography component="h1" style={{ fontSize: '20', fontWeight: 'bold', marginRight: 20 }}>
                        12,875
                        </Typography>
                    <SingleLineStroke />

                </div><br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography className={classes.pos}>
                        Registration
                        860
                        </Typography>
                    <Typography className={classes.pos}>
                        Sign Out
                        32
                        </Typography>
                    <Typography>
                        Rate
                        3.25%
                        </Typography>
                </div>


            </CardContent>

        </Card>
    );
}
