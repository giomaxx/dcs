import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SectionCard from './SectionCard';
import sectionContent from '../assets/static/sectionContent';
import useWindowPosition from '../hook/useWindowPosition';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // [theme.breakpoints.down('sm')]: {
    //   flexDirection: 'column',
    // },
    marginTop: "8%"
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Sections() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="content">
      <Container className={classes.root} maxWidth="lg">
        <Grid container spacing={4} className={classes.grid} >
          {sectionContent.map(content => (
            <Grid item sm={12} md={4} key={content.title}>
              <SectionCard sectionContent={content} checked={checked} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}