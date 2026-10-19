import React from 'react'

export default function Card({ data }) {
	console.log(data)
	return (
		<div>
			<div className="poke-img">
				<img src={data.sprites.front_shiny} alt="" />
			</div>
			<p className="name">Name {data.name}</p>
			<p className="weight">Weight {data.weight}</p>
			<p className="base-experience">Base Experience</p>
			<div className="abilities">
				<p>Abilities</p>
				{data.abilities.map((a, i) => <p key={i}>{a.ability.name}</p>)}
			</div>
		</div>
	)
}
