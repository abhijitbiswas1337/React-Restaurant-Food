import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';

function App() {
	const [search, setSearch] = useState('');
	const oninputChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className='App'>
			<Header search={search} oninputChange={oninputChange} />
			<Recipes />
		</div>
	);
}

export default App;
