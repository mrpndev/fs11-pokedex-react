import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Input({ setSearch }) {
	// ? allows you to handle navigation without rendering anchors, buttons, etc
	let nav = useNavigate()

	function updateSearch(e) {
		
		let input = e.target.previousSibling
		let value = input.value

		setSearch(value)
		
		nav(value ? `/${value}` : `/`, { replace: true})

		input.value = ""
	}
	return (
		<form action="">
			<input type="text" placeholder="Enter Pokemon" />
			<button type='button' onClick={updateSearch}>Go</button>
		</form>
	)
}
