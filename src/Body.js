import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SongRow from './SongRow';

function Body({spotify}) {
       const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className='bodyInfo'>
        <img src={discover_weekly?.images[0].url} alt="Discover Weekly" />
        <div className='bodyInfoText'>  
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className='bodySongs'>
        <div className="bodyIcons">
          <PlayCircleFilledOutlinedIcon className='bodyShuffle'/>
          <FavoriteBorderOutlinedIcon fontSize="large" />
          <MoreHorizOutlinedIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>  
    </div>
  )
}

export default Body
