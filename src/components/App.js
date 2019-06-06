import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'
const App=()=>{
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
            <div className="column eight wide">
                <SongDetail />
            </div>
            </div>
            
        </div>
    );
}
export default App


/*

Brief Outline
App contains :
1. SongList
2.SongDetail

Redux :

1.REDUCERS : these store the current state data
and help in changing the state.

The reducer is a pure function that takes the 
previous state 
and an action, and returns the next state.

SongListReducer
SelectedSongReducer

2.Action CREATORS: these help in changing state

SelectSong



Store(passed as props)->Provider(implemented by react-redux)->App->Connect->songlist


 */