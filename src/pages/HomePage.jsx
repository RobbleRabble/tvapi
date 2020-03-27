import React, { useState, useEffect } from 'react'
import HelloWorld from '../components/HelloWorld'
import Show from '../components/Show'
import axios from 'axios'

// import items from '../data/grocery-items.json'

const HomePage = () => {
  // const [tvShows, setTvShows] = useState([])
  // // ([{ name: 'Simpsons', rating: 'PG' }])
  // const [searchFilter, setSearchFilter] = useState('')
  // const [newShowName, setnewShowName] = useState(0)
  // const [newShowRating, setShowRating] = useState(0)

  // const getAllShows = async () => {
  //   const response = await axios.get(
  //     'https://api.themoviedb.org/3/tv/top_rated?api_key=1dec07b813675b0a973263be687652ca&language=en-US'
  //   )
  //   console.log(response.data)
  //   setTvShows(response.data)
  // }

  // useEffect(() => {
  //   console.log('its working?')
  //   getAllShows()
  //   // if (
  //   //   props.location.state !== undefined &&
  //   //   props.location.state.who !== undefined
  //   // ) {
  //   //   const name = props.location.state.who.firstName
  //   //   setMessage(`Good news! ${name} was just created`)
  //   // }
  // }, [])

  // // useEffect(() =>
  // //   fetch(
  // //     'https://api.themoviedb.org/3/tv/top_rated?api_key=1dec07b813675b0a973263be687652ca&language=en-US&page=1'
  // //   )
  // //     .then((response) => response.json())
  // //     .then((apiData) => {
  // //       const allShows = apiData.results
  // //       setTvShows(allShows)
  // //     })
  // // )

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
      <input
        type="search"
        placeholder="search your list"
        // onChange={updateSearchFilter}
      />
      <ul class="show">
        <li>
          <Show
            name="Rick and Morty"
            overview="Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school."
            poster_path="/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg"
            vote_average="8.6"
            vote_count="1855"
          />
          <Show
            name="I Am Not an Animal"
            poster_path="/nMhv6jG5dtLdW7rgguYWvpbk0YN.jpg"
            vote_average="9.4"
            vote_count="418"
          />
          <Show name="Chernobyl" poster_path="" vote_average="" vote_count="" />
          <h2>I am not an animal</h2>
          {/* name */}
          <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2//nMhv6jG5dtLdW7rgguYWvpbk0YN.jpg" />
          {/* overview */}
          <p>
            I Am Not An Animal is an animated comedy series about the only six
            talking animals in the world, whose cosseted existence in a
            vivisection unit is turned upside down when they are liberated by
            animal rights activists.
          </p>
          {/* vote_average */}
          <p>9.4</p>
          {/* vote count */}
          <p>418</p>
        </li>
        <li>
          Chernobyl
          <h2>Chernobyl</h2>
          <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg" />
          <p>
            The true story of one of the worst man-made catastrophes in history:
            the catastrophic nuclear accident at Chernobyl. A tale of the brave
            men and women who sacrificed to save Europe from unimaginable
            disaster.
          </p>
          {/* vote_average */}
          <p>8.7,</p>
          {/* vote count */}
          <p>984</p>
        </li>
        <li>Rick and Morty</li>
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
