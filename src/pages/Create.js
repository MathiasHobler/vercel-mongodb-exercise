import {useState} from 'react';
import styled from 'styled-components';

const Create = () => {
	const [{data, error}, setData] = useState({data: '', error: null});
	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
		age: '',
	});

	function createUser(data) {
		fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
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
					data: '',
					error: error.message,
				});
			});
	}

	return (
		<CreateContainer
			onSubmit={e => {
				e.preventDefault();
				createUser(newUser);
				setNewUser({
					name: '',
					email: '',
					age: '',
				});
			}}
		>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				name="name"
				value={newUser.name}
				onChange={e => setNewUser({...newUser, name: e.target.value})}
			></input>
			<label htmlFor="email">E-Mail:</label>
			<input
				type="text"
				name="email"
				value={newUser.email}
				onChange={e => setNewUser({...newUser, email: e.target.value})}
			></input>
			<label htmlFor="age">Age</label>
			<input
				type="number"
				name="age"
				value={newUser.age}
				onChange={e => setNewUser({...newUser, age: e.target.value})}
			></input>
			<button type="submit">Create User</button>
		</CreateContainer>
	);
};

export default Create;

const CreateContainer = styled.form`
	width: min(100% - 3rem);
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 1em;
	justify-content: center;
`;
