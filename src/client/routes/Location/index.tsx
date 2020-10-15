import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Slider from 'react-slick'

import { useLocation } from '../../hooks'

interface ILocationRouterProps {
	id: string   // coming from the router
}

interface IProps extends RouteComponentProps<ILocationRouterProps> {}

const Location = ({
	match: { params: { id } },
}: IProps) => {
	const allLocations = useLocation()
	const currentLocation = allLocations.find(l => l.id === id)

	if (!currentLocation) {
		return <>{'Loading ...'}</>
	}

	return (
		<div className="location">
			<h2 className="location__title">{currentLocation.name}</h2>

			<p className="location__description">{currentLocation.description_web}</p>

			<div className="slider-wrapper">
				<Slider
					infinite
					adaptiveHeight
					arrows
					speed={500}
					slidesToShow={1}
					slidesToScroll={1}
				>
				{currentLocation.photos.map(photo => (
					<div
						key={photo}
						className="slider-photo-wrapper"
					>
						<img
							className="responsive-img"
							alt={currentLocation.name}
							key={photo}
							src={photo}
						/>
					</div>
				))}
				</Slider>
			</div>
		</div>
	)
}

export default Location
