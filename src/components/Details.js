import {useState, useEffect} from 'react';
import {useParams, Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';

import {EditUser} from './components';

const Details = () => {
	const [{data, error}, setData] = useState({data: [], error: null});
	const [userExist, setUserExist] = useState(true);
	const [editUser, setEditUser] = useState(false);
	const params = useParams();
	// console.log(useLocation());

	useEffect(() => {
		readUser(params.userId);
	}, [params]);

	function readUser(id) {
		fetch(`/api/users/${id}`)
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

	async function deleteUser(id) {
		fetch(`/api/users/${id}`, {
			method: 'DELETE',
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
					data: JSON.stringify(data.data, null, 4),
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

	async function updateUser(id, editUser) {
		fetch(`/api/users/${id}`, {
			method: 'PUT',
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
		<DetailsContainer>
			{userExist && !editUser && (
				<>
					<Link to="/">Go back</Link>
					<p>
						Name:
						<span>{data.name}</span>
					</p>

					<p>
						Email:
						<span>{data.email}</span>
					</p>
					<p>
						Age:
						<span>{data.age}</span>
					</p>
					<button
						onClick={() => {
							deleteUser(params.userId);
							setUserExist(false);
						}}
					>
						Delete
					</button>
					<button onClick={() => setEditUser(true)}>Edit</button>
				</>
			)}
			{!userExist && (
				<>
					<Link to="/">Go back</Link>
					<p>User successfully deleted</p>
				</>
			)}
			{editUser && (
				<EditUser
					user={data}
					updateUser={editUser => {
						updateUser(editUser);
					}}
				/>
			)}
		</DetailsContainer>
	);
};

export default Details;

const DetailsContainer = styled.section`
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
