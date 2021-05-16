import React from 'react';
// import moon from '../../video/';
import './main.css';


const video = {
	'Falcon 1': 'earth',
	'Falcon 9': 'mars',
	'Falcon Heavy': 'moon',
	other: 'space'
}

const Main = (props) => (
    <section className="main">
		<h1 className="title">
			{props.rocket}
		</h1>
		
		<div className="video-container">
			<video className="video" 
			autoPlay 
			loop 
			muted 
			src={`/video/${video.hasOwnProperty(props.rocket) ? video[props.rocket] : video.other}.mp4`}></video>

		</div>
	</section>
);

export default Main;