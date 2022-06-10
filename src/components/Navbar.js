import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<NavContainer>
			<NavLink to="/">
				Home<div></div>
			</NavLink>
			<NavLink to="/create">
				Create<div></div>
			</NavLink>
		</NavContainer>
	);
};

export default Navbar;

const NavContainer = styled.nav`
	width: 100%;
	background-color: lightcoral;
	position: fixed;
	bottom: 0;
	height: 3em;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	a {
		text-decoration: none;
		color: black;

		&:hover {
			transform: scale(1.2);
		}
		&.active div {
			margin-top: 5px;
			margin: auto;
			height: 5px;
			width: 5px;
			border-radius: 50%;
			background-color: black;
		}
	}
`;
