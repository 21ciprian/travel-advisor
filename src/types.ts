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
}
