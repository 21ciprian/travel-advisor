// import GoogleMapReact from 'google-map-react'
import React from 'react'
import {MapSection} from './styles'
// import {LocationOnOutlined} from '@mui/icons-material'
// import {Rating} from '@mui/material'
type Props = {}

function Map({}: Props) {
	const defaultProps = {
		center: {
			lat: 0,
			lng: 0,
		},
		zoom: 11,
	}
	console.log(defaultProps)
	return (
		<MapSection>
			{/* <GoogleMapReact
				bootstrapURLKeys={{key: `${process.env.REACT_APP_API_KEY}`}}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
				margin={[50, 50, 50, 50]}></GoogleMapReact> */}
		</MapSection>
	)
}

export default Map
