import React, {useState} from 'react'
import {Form, Label, ListContainer, ListTitle, Option, Select} from './styles'
type ListProps = {}

function List({}: ListProps): JSX.Element {
	const [type, setType] = useState<string>('restaurants')
	const [rating, setRating] = useState<string>('')
	console.log('type: ', type)
	console.log('rating: ', rating)
	return (
		<ListContainer>
			<ListTitle>Restaurants, Hotels and Attractions around you</ListTitle>
			<Form>
				<Label>Type</Label>
				<Select
					value={type}
					onChange={(e: React.FormEvent<HTMLSelectElement>) =>
						setType(e.currentTarget.value)
					}>
					<Option value='restaurants'>Restaurants</Option>
					<Option value='hotels'>Hotels</Option>
					<Option value='attractions'>Attractions</Option>
				</Select>
			</Form>
			<Form>
				<Label>Rating</Label>
				<Select
					value={rating}
					onChange={(e: React.FormEvent<HTMLSelectElement>) =>
						setRating(e.currentTarget.value)
					}>
					<Option value={0}>All</Option>
					<Option value={3}>Above 3.0</Option>
					<Option value={4}>Above 4.0</Option>
					<Option value={4.5}>Above 4.5</Option>
				</Select>
			</Form>
		</ListContainer>
	)
}

export default List
