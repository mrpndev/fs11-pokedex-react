import { useState, useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import Card from './components/Card'
import NoPokemon from './components/NoPokemon'

function App() {

	let [search, setSearch] = useState("")
	let [data, setData] = useState(null)
	console.log(data)

	useEffect(() => {
		if (search) {
			fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
			.then(res => res.json())
			.then(d => setData(d))
		}
	}, [search])

	return (
		<>
			<Input setSearch={setSearch} />
			{ !data ? <NoPokemon/> : <Card data={data} /> }
		</>
	)
}

export default App
