import {useState} from 'react';

export default function Exercise4() {
	const [{data, error}, setData] = useState({data: '', error: null});

	async function fetchExercise4(id) {
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

	return (
		<>
			<h2>Exercise 4</h2>
			<button
				onClick={() => {
					fetchExercise4('62a1faf7a78c6cef7fe278ad');
				}}
			>
				Delete user via API
			</button>
			{error && <div>An error occured: {error}</div>}
			<pre>{data}</pre>
		</>
	);
}
