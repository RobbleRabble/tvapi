import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowProfile = (props) => {
  const showId = props.match.params.showId

  const [info, setInfo] = useState({})

  const getShowInformation = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=1dec07b813675b0a973263be687652ca&language=en-US&page=1${showId}`
    )
    console.log(resp.data)
    setInfo(resp.data)
  }

  useEffect(() => {
    getShowInformation()
  }, [])
  return (
    <div>
      Show page for {info.name} {info.rating}!
    </div>
  )
}

export default ShowProfile
