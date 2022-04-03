export interface Cuisine {
	key: string
	name: string
}
export interface Place {
	location_id: string
	address: string
	cuisine: Cuisine[]
	latitude: string
	longiude: string
	name: string
	num_reviews: string
	phone: string
	price: string
	price_level: string
	ranking_position: string
	rating: string
	website: string
	write_review: string
	web_url: string
}

export enum Actions {
	GET_PLACES = 'GET_PLACES',
	GET_ERROR = 'GET_ERROR',
}
export interface Action {
	type: Actions
	payload: Place | Place[] | any
}
export interface State {
	places: Place[]
	error: null
	loading: boolean
}
export interface InitialState extends State {
	getPlacesData?: () => Promise<void>
}
export interface Children {
	children: React.ReactNode
}
