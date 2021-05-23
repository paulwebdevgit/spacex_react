import React from 'react';
import './header.css';
import {Link, NavLink} from 'react-router-dom'

const Header = ({rockets, changeRocket}) => (
    <header className="header">
		<Link to='/spacex_react/'>
			<img
					src="./img/logo.svg"
					alt="Logo Space X"
					className="logo"
			/>
		 </Link>
		<nav className="main-nav nav">
			<ul className="list">
				{rockets.map((item, i )=> (
					<li  key={i} className="item">
					<Link 
					to="/spacex_react/" 
					onClick={(e) => {
						// e.preventDefault();
						changeRocket(item);
					}}
					className="item-link">
						{item}
					</Link>
					</li>
				))}
			</ul>
		</nav>
		<nav className="secondary-nav">
			<ul className="list">
				<li className="item">
					<NavLink exact to="/spacex_react/info" className="item-link">Info</NavLink>
				</li>
				<li className="item">
					<NavLink exact to="/spacex_react/calendar" className="item-link" activeClassName='active'>Calendar</NavLink>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;