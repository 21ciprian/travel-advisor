import React, {useEffect, useState} from 'react'
import {getPlacesData} from '../../api/index'
import {PlacesProvider} from '../../context/PlacesContext'
import HeaderComponent from '../Header'
import List from '../List'
import Map from '../Map'
import {GridContainer} from './styles'

function App(): JSX.Element {
	const [places, setPlaces] = useState([])
	console.log('places: ', places)
	useEffect(() => {
		getPlacesData().then(data => {
			console.log('data from app: ', data)
			// setPlaces()
		})
	}, [])
	return (
		<PlacesProvider>
			<article className='app'>
				<HeaderComponent />
				<GridContainer>
					<List />
					<Map />
				</GridContainer>
			</article>
		</PlacesProvider>
	)
}

export default App
