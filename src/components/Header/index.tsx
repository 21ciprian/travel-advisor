// import {Autocomplete} from '@react-google-maps/api'
import {Search} from '@mui/icons-material'
import React from 'react'
import {
	ExploreSection,
	ExploreTitle,
	Header,
	Input,
	SearchIconDiv,
	SearchSection,
	Title,
} from './styles'
type Props = {}

function HeaderComponent({}: Props) {
	return (
		<Header>
			<Title>Travel Guide</Title>
			<ExploreSection>
				<ExploreTitle>Explore new places</ExploreTitle>
				{/* <Autocomplete> */}
				<SearchSection>
					<SearchIconDiv>
						{' '}
						<Search />
					</SearchIconDiv>
					<Input placeholder='Search' />
				</SearchSection>
				{/* </Autocomplete> */}
			</ExploreSection>
		</Header>
	)
}

export default HeaderComponent
