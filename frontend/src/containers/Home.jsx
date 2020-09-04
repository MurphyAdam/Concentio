import React from 'react';
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
  }
}));

const Home = (props) => {
	
	const classes = useStyles();

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
                Musicorum, enjoy the simplicity, enjoy your music.
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
            title="Musicorum"
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
          href="https://github.com/MurphyAdam/Musicorum"
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
			<MusicPlayer />
		</React.Fragment>
	);
}

export default Home;