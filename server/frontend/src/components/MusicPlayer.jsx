import React from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

const MusicPlayer = (props) => {

	const audioList1 = [
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

	return (
		<ReactJkMusicPlayer audioLists={audioList1}
			autoPlay={false}
			autoHiddenCover={true}
			spaceBar={true}
			defaultPosition={{left: 0, bottom: 0}}
			/>
		);
}

export default MusicPlayer;
