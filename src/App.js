import {Routes, Route} from 'react-router-dom';

import {Header, Navbar} from './components/components.js';
import Create from './pages/Create';
import Home from './pages/Home';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Header titel={'titel'} />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="create" element={<Create />}></Route>
			</Routes>
			<Navbar />
		</>
	);
}
