import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
        color: 'red',
        fontSize: 25
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent style={{ marginLeft: -150 }}>
                <Typography className={classes.title} color="textPrimary" gutterBottom variant='h5' component='h5'>
                    App Performance
        </Typography>
                <Typography variant="p" component="p">
                    {bull}Integration <span>{bull}SDK</span>
                </Typography>


            </CardContent>

        </Card>
    );
}
