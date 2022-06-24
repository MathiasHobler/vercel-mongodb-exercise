import {useState, useEffect} from 'react';
import styled from 'styled-components';

import ListItem from '../components/ListItem';

const Home = () => {
	const [{data, error}, setData] = useState({data: [], error: null});

	useEffect(() => {
		fetchPerson();
	}, []);

	function fetchPerson() {
		fetch('/api/users')
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				setData({
					data: data.data,
					error: null,
				});
			})
			.catch(error => {
				setData({
					data: [],
					error: error.message,
				});
			});
	}
	return (
		<HomeContainer>
			{data.map(user => {
				return <ListItem key={user._id} user={user}></ListItem>;
			})}
		</HomeContainer>
	);
};

export default Home;

const HomeContainer = styled.section`
	width: min(100% - 3rem);
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 1em;
	justify-content: center;

	ul {
		margin: 0;
		padding: 0;
	}
`;
