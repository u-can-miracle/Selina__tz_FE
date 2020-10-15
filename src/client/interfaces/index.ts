export interface ICountryLocation {
	id: string
	value: string
	uiRegion: string
}

export interface IEvent {
	name: string
	description: string
	imageUrl: string
}

interface IFeatuture {
	image: string
	label: string
}

interface IDirections {
	label: string
	type: string
	value: string
}

interface ITag {
	id: string
	value: string
}

export interface ILocation {
	address: string
	agentIDInfluencer: string
	agentIDMobile: string
	agentIDResidency: string
	agentIDWeb: string
	biLocationID: null
	booking_id: string
	contact: {
		email: string
		phones: string[]
		website: string
	}
	description: string
	description_title: string
	description_web: string
	directions: IDirections[]
	features: IFeatuture[]
	id: string
	location: ICountryLocation
	name: string
	opening_date: string
	options: { requiresCheckConfirmation: boolean }
	photos: string[]
	position: { longitude: number, latitude: number }
	status: string
	tags: ITag[]
	winks_accommodation_id: number
}

export interface IGroupedLocations {
	[key: string]: ILocation[]
}
