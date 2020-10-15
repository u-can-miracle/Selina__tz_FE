import { ILocation, IGroupedLocations } from '../interfaces'

const randomLocations: ILocation[] = []

export function getAllLocations(
	groupedLocations: IGroupedLocations,
): ILocation[] {
	const locations = Object.keys(groupedLocations).reduce<ILocation[]>(
		(acc, nextItem) => acc.concat(groupedLocations[nextItem]),
		[],
	)

	return locations
}

export function getRandomLocations({
	allLocations,
	numberToGet = 3,
}: {
	allLocations: ILocation[],
	numberToGet?: number
}): ILocation[]{
	if (!allLocations.length) {
		return randomLocations
	}

	if (!!randomLocations.length) {
		return randomLocations
	}

	while (numberToGet > 0 && numberToGet--) {
		const randomIndex = Math.floor(Math.random() * allLocations.length)
		const randomLocation = allLocations.splice(randomIndex, 1)

		randomLocations.push(randomLocation[0])
	}

	return randomLocations
}
