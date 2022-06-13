import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const EditUser = ({user}) => {
	const [{data, error}, setData] = useState({data: [], error: null});
	const [userEdited, setUserEdited] = useState(false);
	const [editUser, setEditUser] = useState({
		_id: user._id,
		name: user.name,
		email: user.email,
		age: user.age,
	});

	// useEffect(() => {
	// 	console.log(editUser);
	// }, [editUser]);

	async function updateUser(id, data) {
		fetch(`/api/users/${id}`, {
			method: 'PUT',
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
					age: 35,
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
		<EditUserContainer
			onSubmit={e => {
				e.preventDefault();
				updateUser(user._id, editUser);
				setUserEdited(!userEdited);
			}}
		>
			<>
				{userEdited && (
					<>
						<Link to="/">Go back</Link>
						<p>User successfully edited</p>
					</>
				)}
				{!userEdited && (
					<>
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							name="name"
							value={editUser.name}
							onChange={e => setEditUser({...editUser, name: e.target.value})}
						></input>
						<label htmlFor="email">E-Mail:</label>
						<input
							type="text"
							name="email"
							value={editUser.email}
							onChange={e => setEditUser({...editUser, email: e.target.value})}
						></input>
						<label htmlFor="age">Age</label>
						<input
							type="number"
							name="age"
							value={editUser.age}
							onChange={e => setEditUser({...editUser, age: e.target.value})}
						></input>
						<button type="submit">Edit User</button>
					</>
				)}
			</>
		</EditUserContainer>
	);
};

// onClick={() => setUserEdited(!userEdited)}

export default EditUser;

const EditUserContainer = styled.form`
	width: min(100% - 3rem);
	margin: auto;
	background-color: lightgreen;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 0.25em;

	a {
		color: black;
	}
`;
