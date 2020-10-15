import * as React from 'react'
import { Link } from 'react-router-dom'
import { uniqBy, groupBy } from 'lodash'

import Hoverable from '../common/Hoverable'
import ItemsList from '../common/ItemsList'
import { useLocation } from '../../hooks'
import {
	ILocation,
	ICountryLocation,
} from '../../interfaces'

const { useState } = React

const CountriesList = () => {
	const [selectedLocations, setSelectedLocations] = useState<ILocation[]>([])

	const allLocations = useLocation()
	const allCountries = allLocations.map(item => item.location)
	const uniqueCountries = uniqBy<ICountryLocation>(allCountries, 'id')
	const countriesItems = uniqueCountries.map(c => ({ id: c.id, value: c.value }))

	const groupedLocs = groupBy<ILocation>(allLocations, 'location.id')

	const locationItems = selectedLocations.map(
		loc => ({ id: loc.id, value: loc.name }),
	)

	return (
		<ItemsList
			items={countriesItems}
			listClass="countries-list"
			itemClass="countries-list__item"
			childrenRender={country => (
				<Hoverable
					key={country.value}
					keyProp={country.value}
					hoverDelay={500}
					menuComponent={
						<ItemsList
							listClass="location-list"
							itemClass="location-list__item"
							items={locationItems}
							childrenRender={loc => (
								<li
									className="item-list__item item-list__link-wrapper"
									key={loc.id}
								>
									<Link
										className="item-list__link"
										to={`/location/${loc.id}`}
									>
										{loc.value}
									</Link>
								</li>
							)}
						/>
					}
					shouldCallOnLeave={!!locationItems.length}
					onEnter={() => setSelectedLocations(groupedLocs[country.id])}
					onLeave={() => setSelectedLocations([])}
				>
					<div
						className="item-list__item countries-list__item"
						key={country.id}
					>
						{country.value}
					</div>
				</Hoverable>
			)}
		/>
	)
}

export default CountriesList
