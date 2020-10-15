import * as React from 'react'
import { Link } from 'react-router-dom'

import ItemsList from '../common/ItemsList'
import { useLocation } from '../../hooks'
import { getRandomLocations } from '../../services/location.utils'

const Footer = () => {
	const allLocations = useLocation()
	const randomLocs = getRandomLocations({ allLocations })
	const items = randomLocs.map(l => ({ id: l.id, value: l.name }))

	return (
		<div className="footer container">
			<ItemsList
				listClass="footer-list"
				itemClass="footer-list__item"
				items={items}
				childrenRender={loc => (
					<li
						key={loc.id}
					>
						<Link
							className="footer-list__link"
							to={`/location/${loc.id}`}
						>
							{loc.value}
						</Link>
					</li>
				)}
			/>
		</div>
	)
}

export default Footer
