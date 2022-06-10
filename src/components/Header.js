import styled from 'styled-components';

const Header = ({titel}) => {
	return (
		<HeaderContainer>
			<h1>{titel}</h1>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.header`
	background-color: lightcoral;
	width: 100%;
	text-align: center;

	h1 {
		margin: 0;
		padding: 0.25em;
	}
`;
