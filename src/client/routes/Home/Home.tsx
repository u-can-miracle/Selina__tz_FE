import * as React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
	<div className="home-container">
		<div className="home-container--main-banner">
			<div className="home-container--main-banner-overlay" />

			<div className="home-container--main-banner-content">
				<div className="home-container--main-banner-content-border">
					<h2 className="home-container--main-banner-title">
						homeTitle
						<span className="home-container--logo">
							&nbsp;
							brand
						</span>
					</h2>
				</div>

				<Link
					className="theme-btn btn-large btn-hover-transparent"
					to="/dashboard"
				>
					homeStartBtn
				</Link>
			</div>
		</div>
	</div>
)

export default Home
