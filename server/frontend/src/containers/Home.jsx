import React, { useState, useEffect } from 'react';
import MusicPlayer from '../components/MusicPlayer';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';

export const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    margin: theme.spacing(1)
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160,
  },
  description: {
  	margin: theme.spacing(0, 2)
  },
  a: {
    textDecoration: 'none',
    color: theme.palette.secondary.main
  }
}));

const defaultPlaylist = [
  {
    name: 'Gotta Get Up',
    singer: 'Harry Nilsson',
    cover:
      'https://res.cloudinary.com/lang-code/image/upload/v1599213505/gotta_get_up_ilmg8w.jpg',
    musicSrc:
      'https://res.cloudinary.com/lang-code/video/upload/v1599213151/Harry_Nilsson_-_Gotta_Get_Up__Official_Audio_t9jftf.mp3',
  },
  {
    name: 'Burning Sky',
    singer: 'Bad Company',
    musicSrc:
      'https://res.cloudinary.com/lang-code/video/upload/v1599214523/01_20Burnin_20Sky_epzvsn.mp3',
  },
  {
    name: 'Prism of life',
    singer: 'Prism of life',
    cover:
      'https://res.cloudinary.com/lang-code/image/upload/v1599214158/presim_jlzurz.jpg',
    musicSrc:
      'https://res.cloudinary.com/lang-code/video/upload/v1599214125/11_20Prism_20of_20Life_bzmbwu.mp3',
  },
];

const Home = (props) => {
	
	const classes = useStyles();
  const [playlist, setPlaylist] = useState([]);

  // the below hook is only rendered once, thus '[]' dependecy array,
  // see MusicPlayer component for description.
  useEffect(() => {
    fetch(`${window.location.origin}/api/playlist`)
    .then(response => {
        response.json().then(data => {
        if(data.error) setPlaylist(defaultPlaylist);
        else if (data.playlist) setPlaylist(data.playlist);
        else setPlaylist(defaultPlaylist);
      })
    })
    .catch(error => {
      setPlaylist(defaultPlaylist);
    });
  }, [])

	return (
		<React.Fragment>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography 
                variant="h5" 
                gutterBottom
              >
                Concentio, enjoy the simplicity, enjoy your music.
              </Typography>
              
              <Typography 
                variant="subtitle2" 
                color="textSecondary"
                paragraph>
                A light, simple and straight-forward music streaming app.
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cardMedia}
            image="https://res.cloudinary.com/lang-code/image/upload/v1599217214/images/music_icon_tkqdsq.png"
            title="Concentio"
          />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Typography 
          variant="subtitle2" 
          color="textSecondary"
          className={classes.description}
          paragraph>
          Minimalistic music streaming app built with React + Material-UI, and served with Flask. Star, 
          fork or contribute if you wish so. 
          <a href="https://github.com/MurphyAdam" 
            target="_blank"
            rel="noopener noreferrer" 
            className={classes.a}> By: @GitHub/MurphyAdam (Majdi)
          </a>
        </Typography>
        <IconButton 
        	component="a"
          title="GitHub" 
          aria-label="GitHub" 
          color="inherit"
          href="https://github.com/MurphyAdam"
          target="_blank"
          rel="noopener noreferrer"
          >
          <GitHubIcon />
        </IconButton>
        <IconButton 
        	component="a"
          title="Source code" 
          aria-label="Source code" 
          color="inherit"
          href="https://github.com/MurphyAdam/Concentio"
          target="_blank"
          rel="noopener noreferrer"
          >
          <CodeIcon />
        </IconButton>
        <IconButton 
        	component="a"
          title="LinkedIn" 
          aria-label="LinkedIn" 
          color="inherit"
          href="https://www.linkedin.com/in/mahfoud-majidi-258461198"
          target="_blank"
          rel="noopener noreferrer"
          >
          <LinkedInIcon />
        </IconButton>
        <IconButton 
        	component="a"
          title="Email" 
          aria-label="Email" 
          color="inherit"
          href="mailto:langandcode@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          >
          <MailIcon />
        </IconButton>
      </Grid>
			<MusicPlayer playlist={playlist}/>
		</React.Fragment>
	);
}

export default Home;