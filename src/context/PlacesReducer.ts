import {Action, Actions, Place} from '../types'
export default function PlacesReducer(state: Place, action: Action) {
	switch (action.type) {
		case Actions.GET_PLACES:
			return {...state, loading: false, places: action.payload}
		default:
			return state
	}
}
