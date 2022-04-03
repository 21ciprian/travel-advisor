import axios from 'axios'
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
	params: {
		bl_latitude: '11.847676',
		tr_latitude: '12.838442',
		bl_longitude: '109.095887',
		tr_longitude: '109.149359',
	},
	headers: {
		'X-RapidAPI-Host': process.env.REACT_APP_RHOST!,
		'X-RapidAPI-Key': process.env.REACT_APP_RKEY!,
	},
}

export async function getPlacesData() {
	try {
		const response = await axios.get(URL, options)
		console.log('response.data.data from get axios: ', response.data.data)
		return response.data.data
	} catch (error: any) {
		console.log(error.message)
	}
}
