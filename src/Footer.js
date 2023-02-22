import React from 'react'
import './Footer.css'
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import QueueMusicSharpIcon from '@mui/icons-material/QueueMusicSharp';
import PhonelinkSharpIcon from '@mui/icons-material/PhonelinkSharp';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Grid from '@mui/material/Grid';


function Footer() {
  return (
    <div className='footer'>
      <div className='footerLeft'>
        <img className="footerAlbumLogo" src="https://upload.wikimedia.org/wikipedia/pt/2/23/Linkin_Park_Hybrid_Theory.jpg" alt=""/>  
        <div className="footerSongInfo">
          <h4>Crawling</h4>
          <p>Linkin Park</p>
        </div>
      </div> 
      <div className='footerCenter'>
        <ShuffleOutlinedIcon className="footerIcon footerIconSmallSize" />
        <SkipPreviousIcon className="footerIcon" />
        <PlayCircleFilledOutlinedIcon className='footerIcon footerPlayIcon'/>
        <SkipNextIcon className="footerIcon" />
        <RepeatOutlinedIcon className="footerIcon footerIconSmallSize" />
      </div> 
      <div className='footerRight'>
      <Grid container spacing={2}>
        <Grid item>
          <QueueMusicSharpIcon />
        </Grid>
        <Grid item>
          <PhonelinkSharpIcon />
        </Grid>
        <Grid item xs className='footerGridFlex'>
          <VolumeDown />
          <Slider />
        </Grid>
      </Grid>
      </div> 
    </div>
  )
}

export default Footer
