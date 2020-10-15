import * as React from 'react'
import { Link } from 'react-router-dom'

import Hoverable from '../common/Hoverable'
import CountriesList from '../CountriesList'

const Header = () => (
	<header className="header container">
		<div className="header__logo">
			<Link to="/">
				<img
					className="responsive-img"
					src="https://www.selina.com/static/media/selina_logo_black.b62a0982.svg"
					alt="Selina"
				/>
			</Link>
		</div>

		<ul className="header__nav">
			<Hoverable
				className="full-height"
				menuComponent={
					<CountriesList />
				}
			>
				<div className="header__nav-title full-height">Locations</div>
			</Hoverable>
		</ul>
	</header>
)

export default Header
