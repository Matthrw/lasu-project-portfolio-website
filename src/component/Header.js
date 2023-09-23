import React from 'react';
import './style/Header.css';

export default function Header() {
	return (
		<>
			<nav>
				<div className='icon'>
					<div className='red-box'></div>
					<div className='black-box'></div>
					<h1>PORTFOLIO</h1>
				</div>
				<div className='header-item'>
					<ul>
						<li>
							<a href='Home.html'>Home</a>
						</li>
						<li>
							<a href='About.html'>About</a>
						</li>
						<li>
							<a href='Service.html'>Service</a>
						</li>
						<li>
							<a href='Portfolio.html'>Portfolio</a>
						</li>
						<li>
							<a href='Page.html'>Page</a>
						</li>
						<li>
							<a href='Contact'>Contact</a>
						</li>
						<li>
							<a className='btn' href='#btn'>
								Get Free Consultant
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
