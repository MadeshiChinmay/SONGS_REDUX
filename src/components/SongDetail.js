import React from 'react'
import {connect} from 'react-redux'

const SongDetail=(/*props*/{song})=>{
    if(!song)
    {
        return <div>Select a Song</div>
    }
    //console.log(props)
    return (
        <div>
        <div>{song.title}</div>
        <br></br>
        <div>{song.duration}</div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        song:state.selectedSong
    }
}



export default connect(mapStateToProps)(SongDetail)