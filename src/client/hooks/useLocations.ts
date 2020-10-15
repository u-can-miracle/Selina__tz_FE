import { useState, useEffect } from 'react'

import request from '../services/request'
import { API_LOCATIONS } from '../constants'
import { ILocation } from '../interfaces'

export function useLocation() {
	const [locations, setLocations] = useState<ILocation[]>([])

	useEffect(() => {
		request({
			apiUrl: API_LOCATIONS,
		})
		.then(locs => {
			setLocations(locs)
		})
	}, [])

	return locations
}
