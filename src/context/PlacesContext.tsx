import axios from 'axios'
import {createContext, useReducer} from 'react'
import {Actions, Children, InitialState} from '../types'
import PlacesReducer from './PlacesREducer'

const initialState = {
	places: [],
	error: null,
	loading: false,
}
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
export const PlacesContext = createContext<InitialState>(initialState)
export const PlacesProvider = ({children}: Children) => {
	const [state, dispatch] = useReducer(PlacesReducer, initialState)

	async function getPlacesData(): Promise<void> {
		try {
			const response = await axios.get(URL, options)
			console.log('response.data.data from get axios: ', response.data.data)
			dispatch({type: Actions.GET_PLACES, payload: response.data.data})
		} catch (error: any) {
			console.log('get error:', error.message)
			dispatch({
				type: Actions.GET_ERROR,
				payload: error.message,
			})
		}
	}

	return (
		<PlacesContext.Provider
			value={{
				places: state.places,
				error: state.error,
				loading: state.loading,
				getPlacesData,
			}}>
			{children}
		</PlacesContext.Provider>
	)
}
