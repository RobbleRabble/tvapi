import React from 'react'
import { Link } from 'react-router-dom'
const Credit = (props) => {
  const { character, id, name } = props
  const actorURL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`

  return (
    <li>
      <h2>{character}</h2>
      {/* name */}
      <img src={actorURL} />
      {/* overview */}
      <p>Played by: {name}</p>
    </li>
  )
}

export default Credit

// key={credit.id}
// id={credit.id}
// character={credit.character}
// poster_path={credit.profile_path}
// name={credit.name}
