import React from 'react'
import './SongRow.css'

function SongRow({ track, playSong }) {
  return (
    <div className='songRow'>
      <img src={track.album.images[0].url} alt="" className='songRowAlbum'/>
       <div className="songRowInfo">
              <h1>{track.name}</h1>
              <p>
                 {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                     {track.album.name}
              </p>
       </div>
    </div>
  )
}

export default SongRow
