import React from 'react'
import { Link } from 'react-router-dom'
const Show = (props) => {
  const { id, name, rating } = props
  const posterURL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`
  return (
    <li>
      <Link to={`/show/${id}`}></Link>
      <li>
        <h2>{props.name}</h2>
        {/* name */}
        <img src={posterURL} />
        {/* overview */}
        <p>{props.overview}</p>
        {/* vote_average */}
        <p>{props.vote_average}</p>
        {/* vote count */}
        <p>{props.vote_count}</p>
      </li>
    </li>
  )
}

export default Show
