import React from 'react'

export default function Input({ setSearch }) {

	function updateSearch(e) {
		setSearch(e.target.previousSibling.value)
		e.target.previousSibling.value = ""
	}
	return (
		<form action="">
			<input type="text" placeholder="Enter Pokemon" />
			<button type='button' onClick={updateSearch}>Go</button>
		</form>
	)
}
