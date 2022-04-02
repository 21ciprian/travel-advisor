import React from 'react'
import HeaderComponent from '../Header'
import List from '../List'
import Map from '../Map'
import {GridContainer} from './styles'

function App() {
	return (
		<article className='app'>
			<HeaderComponent />
			<GridContainer>
				<List />
				<Map />
			</GridContainer>
		</article>
	)
}

export default App
