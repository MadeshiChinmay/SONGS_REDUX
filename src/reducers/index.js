//REDUCERS
// Song List and Selected Song


import {combineReducers} from 'redux';


const songsReducer=()=>{//Static Reducers therefore no arguements required
    return [
        {title : 'No Scrubs',duration: '4:05'},
        {title : 'Macarena' , duration : '2:30'},
        {title : 'I want it that Way', duration: '1:45'}
    ];
};

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==="SONG_SELECTED"){
        console.log("reducer called")
        return action.payload;
    }
    console.log("reducer called outside if")
    return selectedSong;
}


export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
})