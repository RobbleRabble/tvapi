import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import Credit from '../components/Credit'
// import Show from '../components/Show'

const ShowProfile = (props) => {
  const showId = props.match.params.showId
  // const showName = props.match.params.name

  const [info, setInfo] = useState([])
  // const [selectedShow, setSelectedShow] = useState([])

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
    fetch(
      `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=1dec07b813675b0a973263be687652ca&language=en-US`
    )
      .then((response) => response.json())
      .then((apiData) => {
        const cast = apiData.results
        setInfo(cast)
        console.log(info)

        // getARandom()
      })
  }, [])

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

  return (
    <div>
      <header>Show page for {showId}! That's</header>
      <h1>
        {/* {setSelectedShow.filter(showId).map((show) => {
          return
          ;<Show name={show.name} />
        })}
        } */}
      </h1>
      <ul class="show">
        {info.map((credit, index) => {
          return (
            <Credit
              character={credit.character}
              poster_path={credit.profile_path}
              name={credit.name}
            />
          )
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
