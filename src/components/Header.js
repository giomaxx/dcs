import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Collapse, IconButton, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import colo from '../assets/images/colo.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${colo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
    appbar: {
        background: 'rgba(0,0,0,0.5)',
    },
    appbarWrapper: {
        justifyContent: 'space-between',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    greenText: {
        color: '#5AFF3D',
    },
    redText: {
        color: '#fc2803',
    },
    container: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '2.5rem',
    },
    goDown: {
        color: '#fff',
        fontSize: '3.5rem',
    },
    button: {
        color: '#fff',
        size: 'extrasmall',
        margin: '10px'
    },
}));

const sections = [
    { title: 'Services', url: '#' },
    { title: 'About', url: '#' },
    { title: 'Eligibility', url: '#' },
    { title: 'Apply in Italy', url: '#' },
    { title: 'Resources', url: '#' },
    { title: 'Contacts', url: '#' },
];

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <div>
                        <h2 className={classes.appbarTitle}>
                            <span className={classes.greenText}>Dual</span>Citizenship<span className={classes.redText}>Support</span>
                        </h2>
                    </div>
                    <div>
                        {sections.map((section) =>
                            <Button key={section.title} className={classes.button} size="small" to={section.url}>
                                {section.title}
                            </Button>
                        )}
                    </div>
                </Toolbar>
            </AppBar>

            <Collapse
                in={checked}
                {...(checked ? { timeout: 2000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Get Italian Dual Citizenship!
                    </h1>
                    
                    <Scroll to="content" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}