from server.api_bp import api_bp

@api_bp.route('/playlist')
def send_playlist():
	"""
	Serve your own playlist.
	When the app renders first on the browser, it attempts to 
	make a request to this endpoint, when this endpoint responds with
	data as below, the a special method in the frontend replaces 
	the default playlist (my playlist) that is defined in the frontend
	with this one. if however for some reason, the request or server failed 
	to respond with correct data or status, that special method will use the 
	frontend predefined playlist. The playlist below is the exact one defined 
	in the frontend. 
	idea: You can make a frontend interface where you let authenticated users choose their favourite
	songs and then save them to database, so anytime they login, they are welcomed with their
	favourite songs.
	"""
	playlist = [
		{
			'name': 'Gotta Get Up',
			'singer': 'Harry Nilsson',
			'cover':
			'https://res.cloudinary.com/lang-code/image/upload/v1599213505/gotta_get_up_ilmg8w.jpg',
			'musicSrc':
			'https://res.cloudinary.com/lang-code/video/upload/v1599213151/Harry_Nilsson_-_Gotta_Get_Up__Official_Audio_t9jftf.mp3',
		},
		{
			'name': 'Burning Sky',
			'singer': 'Bad Company',
			'musicSrc':
			'https://res.cloudinary.com/lang-code/video/upload/v1599214523/01_20Burnin_20Sky_epzvsn.mp3',
		},
		{
			'name': 'Prism of life',
			'singer': 'Prism of life',
			'cover':
			'https://res.cloudinary.com/lang-code/image/upload/v1599214158/presim_jlzurz.jpg',
			'musicSrc':
			'https://res.cloudinary.com/lang-code/video/upload/v1599214125/11_20Prism_20of_20Life_bzmbwu.mp3',
		},
	]
	return {
		'playlist': playlist
	}, 200