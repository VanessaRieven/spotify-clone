import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Body from './Body'

function Player({ spotify }) {
  return (
    <div className="player">
       <div className="playerBody">
              <Sidebar />
              <Body />
       </div>
       <Footer />
    </div>
  )
}

export default Player
