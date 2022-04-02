import styled from 'styled-components'
export const Header = styled.header`
	width: 100%;
	height: 5vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #000;
	box-shadow: 0 1px 5px 1px grey;
	/* padding: 0 0.5rem; */
`
export const Title = styled.h4`
	color: #000;
	width: max-content;
	margin-left: 0.5rem;
`
export const ExploreSection = styled.section`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 1rem;
	/* border: 2px solid green; */
	margin-right: 0.5rem;
`
export const ExploreTitle = styled.h5`
	color: #000;
	width: max-content;
`
export const SearchSection = styled.section`
	border-bottom: 2px solid rgba(194, 194, 194, 0.7);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`
export const SearchIconDiv = styled.div``
export const Input = styled.input`
	border: none;
	outline: none;
`
