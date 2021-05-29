import React from 'react';
// import moon from '../../video/';
import './main.css';


const video = {
	'Falcon Heavy': 'earth',
	'Falcon 1': 'moon',
	'Falcon 9': 'mars',
	other: 'space'
}

const rocketDescription = {
	'Falcon Heavy': 'the most powerful operational rocket in the world by a factor of two',
	'Falcon 1': 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006–2009.',
	'Falcon 9': 'Falcon 9 is a partially reusable two-stage-to-orbit medium-lift launch vehicle designed and manufactured by SpaceX',
	'Starship': 'The Starship system is a fully reusable, two‑stage‑to‑orbit super heavy‑lift launch vehicle under development by SpaceX.',
	other: 'SpaceX'
}

const Main = ({rocket, name}) => {
	
	console.log(rocket)
	return (
		<section className="main">
			<h1 className="title">
				{rocket ? rocket : name}
			</h1>
			<h5 className="description">
			{rocketDescription[rocket]}
			</h5>
			
			{rocket && <div className="video-container">
				<video className="video" 
				playsInline autoPlay loop muted 
				src={`/spacex_react/video/${video.hasOwnProperty(rocket) ? video[rocket] : video.other}.mp4`}>
				</video>
	
			</div>}
		</section>
	);
}

export default Main;