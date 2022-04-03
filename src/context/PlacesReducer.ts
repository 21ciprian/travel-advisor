import {Action, Actions, State} from '../types'
export default function PlacesReducer(state: State, action: Action) {
	switch (action.type) {
		case Actions.GET_PLACES:
			return {...state, loading: false, places: action.payload}
		default:
			return state
	}
}
