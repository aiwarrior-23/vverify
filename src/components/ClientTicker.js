import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    '@global': {
        body: {
            overflowX: 'hidden',
        },
    },
    root: {
        display: 'flex',
        overflow: 'hidden',
        height: '50px',
        marginBottom: "5%"
    },
    bannerImages: {
        width: "4em",
        height: "auto"
    },
    marquee: {
        display: 'flex',
        animation: '$marquee 50s linear infinite',
        position: 'absolute',
        width: 'max-content',
        left: '100%'
    },
    marqueeText: {
        padding: '0 2rem',
    },
    "@keyframes marquee": {
        '0%': {
            transform: 'translateX(0)',
        },
        '100%': {
            transform: 'translateX(-100%)',
        },
    },
});

export default function ClientTicker() {
    const classes = useStyles();
    const clientNames = ["microsoft", "apple", "tesla", "infosys", "tcs"];
    const clients = clientNames.map(clientName => <img src={`${clientName}.png`} alt={clientName} className={classes.bannerImages} />);  // add more clients as necessary

    return (
        <div className={classes.root}>
            <div className={classes.marquee}>
                {[...Array(3)].map((_, i) => // Repeat twice (or more for a longer list of clients)
                    clients.map((client, j) => (
                        <Typography variant="h6" noWrap className={classes.marqueeText} key={i * 100 + j}>
                            {client}
                        </Typography>
                    ))
                )}
            </div>
        </div>
    );
}
