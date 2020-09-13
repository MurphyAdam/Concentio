import React from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

const MusicPlayer = (props) => {

	// ReactJkMusicPlayer component expects a playlist, and so we are getting 
	// our playlist as a prop from the Home component, which first makes a GET 
	// request to the server to get a custom playlist defined by your own liking, 
	// if a playlist is returned from the server, it is used, otherwise the default 
	// playlist defined in Home is used.
	const { playlist } = {...props};

	// Read ReactJkMusicPlayer package docs to learn more about the 
	// available props
	return (
		<ReactJkMusicPlayer audioLists={playlist}
			autoPlay={false}
			autoHiddenCover={true}
			spaceBar={true}
			defaultPosition={{left: 0, bottom: 0}}
			/>
		);
}

export default MusicPlayer;
