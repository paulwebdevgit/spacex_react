import React from 'react';
// import moon from '../../video/';
import './main.css';


const video = {
	'Falcon 1': 'earth',
	'Falcon 9': 'mars',
	'Falcon Heavy': 'moon',
	other: 'space'
}

const Main = ({rocket}) => (
    <section className="main">
		<h1 className="title">
			{rocket ? rocket : 'SpaceX Calendar'}
		</h1>
		
		{rocket && <div className="video-container">
			<video className="video" 
			autoPlay 
			loop 
			muted 
			src={`/video/${video.hasOwnProperty(rocket) ? video[rocket] : video.other}.mp4`}></video>

		</div>}
	</section>
);

export default Main;