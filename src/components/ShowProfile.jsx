import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import Credit from '../components/Credit'
import axios from 'axios'
// import Show from '../components/Show'

const ShowProfile = (props) => {
  const showId = props.match.params.showId
  // const showName = props.match.params.name

  const [crew, setCrew] = useState([])
  const [cast, setCast] = useState([])
  const [details, setDetails] = useState({})

  // const getShowInformation = async () => {
  //   const resp = await axios.get(
  //     `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=1dec07b813675b0a973263be687652ca&language=en-US`
  //   )
  //   setInfo(resp)
  //   console.log(resp)
  // }
  // useEffect(() => {
  //   getShowInformation()
  // }, [])

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=1dec07b813675b0a973263be687652ca&language=en-US`
      )
      .then((response) => {
        const apiData = response.data
        const newCast = apiData.cast
        const newCrew = apiData.crew

        setCast(newCast)
        setCrew(newCrew)
      })

    const detailsUrl = `https://api.themoviedb.org/3/tv/${showId}?api_key=1dec07b813675b0a973263be687652ca&language=en-US`
    axios.get(detailsUrl).then((detailsResponse) => {
      const detailsApiData = detailsResponse.data

      setDetails(detailsApiData)
    })
  }, [showId])

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=1dec07b813675b0a973263be687652ca&language=en-US`
  //   )
  //     .then((response) => response.json())
  //     .then((apiData) => {
  //       const cast = apiData.results
  //       setInfo(cast)
  //       console.log(info)

  //       // getARandom()
  //     })
  // }, [])

  // const getSelectedShow = async () => {
  //   const resp = await axios.get(
  //     `https://api.themoviedb.org/3/tv/top_rated?api_key=1dec07b813675b0a973263be687652ca&language=en-US&page=1/`
  //   )
  //   console.log(resp.data)
  //   setSelectedShow(resp.data)
  // }

  // useEffect(() => {
  //   getSelectedShow()
  //   console.log('now logged', info)
  // }, [])

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/tv/top_rated?api_key=1dec07b813675b0a973263be687652ca&language=en-US&page=1/${showId}`
  //   )
  //     .then((response) => response.json())
  //     .then((apiData) => {
  //       const jsonData = apiData.results
  //       setInfo(jsonData)
  //       console.log(jsonData)
  //       // getARandom()
  //     })
  // }, [])

  // const cast = [
  //   {
  //     id: 11113,
  //     name: 'Bobby',
  //   },
  //   {
  //     id: 11114,
  //     name: 'Peggy',
  //   },
  // ]

  // const crew = [
  //   {
  //     id: 222224,
  //     name: 'Fred',
  //   },

  //   {
  //     id: 222225,
  //     name: 'Nancy',
  //   },
  // ]

  return (
    <div>
      <header>
        <h1>Show page for {details.name}! </h1>
      </header>
      <h2>Details</h2>
      <h3>Cast!</h3>
      <ul>
        {cast.map((person) => {
          return <li>{person.name}</li>
        })}

        {/* {info.map((credit, index) => {
          return (
            <Credit
              character={credit.character}
              poster_path={credit.profile_path}
              name={credit.name}
            />
          )
        })} */}
      </ul>
      <h3>Crew!</h3>
      <ul>
        {crew.map((person) => {
          return <li>{person.name}</li>
        })}
      </ul>
    </div>
  )
}

export default ShowProfile
// key={show.id}
// id={show.id}
// name={show.name}
// poster_path={show.poster_path}
// popularity={show.popularity}
// overview={show.overview}
// vote_average={show.vote_average}
// vote_count={show.vote_count}
