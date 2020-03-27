import React, { useState, useEffect } from 'react'
// import HelloWorld from '../components/HelloWorld'
import Show from '../components/Show'
import axios from 'axios'
// import Shows from '../components/Shows'

// import items from '../data/grocery-items.json'

const HomePage = () => {
  const [tvShows, setTvShows] = useState([])
  // // ([{ name: 'Simpsons', rating: 'PG' }])
  // const [searchFilter, setSearchFilter] = useState('')
  // const [newShowName, setnewShowName] = useState(0)
  // const [newShowRating, setShowRating] = useState(0)
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=1dec07b813675b0a973263be687652ca&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((apiData) => {
        const allShows = apiData.results
        setTvShows(allShows)
      })
  }, [])

  // const getAllShows = async () => {
  //   const response = await axios.get(
  //     'https://api.themoviedb.org/3/tv/top_rated?api_key=1dec07b813675b0a973263be687652ca&language=en-US'
  //   )
  //   console.log(response.data)
  // }

  // useEffect(() => {
  //   console.log('its working?')
  //   console.log(response.data)
  //   setTvShows(response.data)
  //   // if (
  //   //   props.location.state !== undefined &&
  //   //   props.location.state.who !== undefined
  //   // ) {
  //   //   const name = props.location.state.who.firstName
  //   //   setMessage(`Good news! ${name} was just created`)
  //   // }
  // }, [])

  // const updateSearchFilter = (e) => {
  //   setSearchFilter(e.target.value)
  // }

  // // const addShowToList = (e) => {
  // //   e.preventDefault()
  // //   const newList = [...tvShows, { name: newShowName, rating: newShowRating }]

  // //   setTvShows(newList)
  // // }

  // // const deleteItem = (show, index) => {
  // //   console.log('deleting an item', show)
  // //   // splice(index to start, how many to remove)
  // //   const newList = [...tvShows]
  // //   newList.splice(index, 1)
  // //   setTvShows(newList)
  // // }

  return (
    <main>
      <header>
        <h1>These are TV shows</h1>
        <p>Made by Rob</p>
      </header>
      {/* <input
        type="search"
        placeholder="search your list"
        // onChange={updateSearchFilter}
      /> */}
      <ul class="show">
        {tvShows.map((show) => {
          return (
            <Show
              name={show.name}
              poster_path={show.poster_path}
              popularity={show.popularity}
              overview={show.overview}
            />
          )
        })}
        <li>{/* name, overview, poster_path, vote_average vote_count */}</li>
        {/* {tvShows
          .filter((show) => {
            return show.name.toLowerCase().includes(searchFilter.toLowerCase())
          }) */}

        {/* {tvShows.map((show) => {
          console.log('got here', show)
          return (
            <Show
              key={show.id}
              id={show.id}
              name={show.name}
              rating={show.rating}
            />
          )
        })} */}
      </ul>
    </main>
  )
}

export default HomePage
