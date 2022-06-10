import {useState} from 'react';

export default function Exercise2() {
	const [{data, error}, setData] = useState({data: '', error: null});

	function fetchExercise2(id) {
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
			<h2>Exercise 2</h2>
			<button
				onClick={() => {
					fetchExercise2('62a2f7686648afedc65a2e93');
				}}
			>
				Load example Data from api/users/[id]
			</button>
			{error && <div>An error occured: {error}</div>}
			<pre>{data}</pre>
		</>
	);
}
