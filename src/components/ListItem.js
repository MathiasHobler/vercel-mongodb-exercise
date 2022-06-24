import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ListItem = ({user}) => {
	return (
		<ListContainer>
			<p>{user.name}</p>
			<button>
				<Link to={`/users/${user._id}`}>Details</Link>
			</button>
		</ListContainer>
	);
};

export default ListItem;

const ListContainer = styled.section`
	width: 100%;
	background-color: lightgreen;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.5em;
	border-radius: 0.25em;

	button {
		height: min(100% - 2em);
		text-decoration: none;
	}

	a {
		text-decoration: none;
		color: gray;
	}
`;
