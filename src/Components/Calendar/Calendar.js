import React from 'react';
import './calendar.css';
import Main from '../Main/Main';
import {Link} from 'react-router-dom'
import useLaunches from '../useLaunches/useLaunches'




const Calendar = () => {

	const {data} = useLaunches();
	
	return (
		<>
			<Main name={'Calendar SpaceX'}/>
			<section className="calendar">
				{/* <h1 className="calendar-heading">Calendar SpaceX</h1> */}
				<div className="container">
					<ul className="calendar-list">
					{ data && data.map(item => (
						<li className="calendar-item" key={item.id}>
							<article className="launches">
								<div className="launches-image">
									<img src={item.links.patch.small} alt="" />
								</div>
								<div className="launches-content">
									<h2 className="launches-title">
										{item.name}
									</h2>
									<Link 
										to={`/spacex_react/details/${item.id }`}
										className="button launches-details"
										// onClick={() => props.updateCard(item.id)}
									>
										More
									</Link>
								</div>
							</article>
						</li>
						))
					}
					</ul>
				</div>
			</section>
		</>
	);
}

export default Calendar;