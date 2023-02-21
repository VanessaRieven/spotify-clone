import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  //WE ARE ONLY GETTING THE PLAYLISTS FROM THE DATA LAYER, SINCE ITS ALL WE NEED HERE
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
       <img className="sidebarLogo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
       <SidebarOption title="Home" Icon={HomeOutlinedIcon}/>
       <SidebarOption title="Search" Icon={SearchOutlinedIcon}/>
       <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon}/>
       <br />
       <strong className="sidebarTitle">PLAYLISTS</strong>
       <hr />

      { playlists?.items?.map(playlist => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}
    </div>
  )
}

export default Sidebar
