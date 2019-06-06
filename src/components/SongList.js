import React from 'react'
import {connect} from 'react-redux'
import {SelectSong} from '../actions'

class SongList extends React.Component {

    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={()=>{this.props.SelectSong(song)}}
                            >
                            Select
                        </button>                    
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }

    render(){
        //console.log(this.props)
        return(
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps=(state)=>{//convert state stored in redux store to props
    //in our component
    //console.log(state);
    console.log(state)
    return {songs : state.songs};


}
//every time we make change anything to reducers
//or every time the reducers are called
//mapStateToProps is run with the new state provided to it
//by reducers


export default connect(mapStateToProps,{
    SelectSong:SelectSong//this actioncreater is now passed to component
    //as a prop by the connect method and the action returned
    // by it is passed automatically to the dispatch function
})(SongList);
// func()() is way to invoke nested function


//connection has to be established in all those components in which provider
// has to provide data.