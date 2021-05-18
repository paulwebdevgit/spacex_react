import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import './features.css';

const rocketImage = {
	'Falcon 1': 'falcon-1.png',
	'Falcon 9': 'falcon-9.png',
	'Falcon Heavy': 'falcon-heavy.png',
	'Starship': 'starship.png'
}

const Features = ({name, height, mass, diameter, payload_weights, description}) => {
	
	console.log(name);
	return (
    <section className="features">
		<h2 className="features-title">
		{name} <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">{`${height.meters} m / ${height.feet}`}</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td> 
						<td className="table-column">{diameter.meters} m / {diameter.feet} </td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">{mass.kg} kg / {mass.lb} lb</td>
					</tr>
					{payload_weights.map((item, id) => (
						<tr key={id}>
							<td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
							<td className="table-column">{item.kg} kg / {item.lb} lb</td>
						</tr>
					))}
				</thead>
			</table>
			<RellaxWrapper speed={14}>
			<img
					src={`/img/${rocketImage[name]}`}
					alt="rocket"
					className="rocket"
					// data-rellax-speed="14"
			/>
			</RellaxWrapper>
			
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{description}
				</p>
			</article>
		</div>
	</section>
);}

export default Features;