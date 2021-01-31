import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxHeight: 510,
    background: 'rgba(0,0,0,0.1)',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '10px',
    marginRight: '10px',
  },
  media: {
    height: 200,
  },
  title: {
    fontSize: '2rem',
    color: '#000',
  },
  desc: {
    fontSize: '1rem',
    color: '#000',
  },
});

export default function SectionCard({ sectionContent, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={sectionContent.imageUrl}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {sectionContent.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {sectionContent.description}
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Collapse>
  );
}