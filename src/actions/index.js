
//Action creator

export const SelectSong=(song)=>{
    //Return an action
    //console.log("Action Called")
    //console.log(song)
    return{
        type: 'SONG_SELECTED',
        payload: song
    };
};

//export default SelectSong;
//NAMED EXPORT