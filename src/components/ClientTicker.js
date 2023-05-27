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
        height: '100%'
    },
    bannerImages: {
        width: "4em",
        height: "auto"
    },
    clients: {
        position: 'relative', // new style
        overflow: 'hidden'
    },
    marquee: {
        display: 'flex',
        animation: '$marquee 120s linear infinite',
        width: 'max-content',
        marginTop: "1%"
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
    const clients = clientNames.map(clientName => <img src={`${clientName}.png`} alt={clientName} className={classes.bannerImages} />);

    return (
        <div className={classes.root}>
            <div className={classes.clients}>
                <h1>Our Clients</h1>
                <div className={classes.marquee}>
                    {[...Array(10)].map((_, i) => 
                        clients.map((client, j) => (
                            <Typography variant="h6" wrap className={classes.marqueeText} key={i * 100 + j}>
                                {client}
                            </Typography>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
