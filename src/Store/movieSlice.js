import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const movieSlice = createSlice({
    name : "movie",
    initialState :{movies  : [{
        id : uuidv4(),
        title : "the godfather",
        description : "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
        posterUrl : "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg" ,
        rating : 9 ,
        videoUrl : "https://youtu.be/UaVTIH8mujA",
        isUpdated : false,
    },{
        id : uuidv4(),
        title : "The lord of the rings",
        description : "The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King." ,
        posterUrl : "https://i.pinimg.com/originals/f1/43/69/f14369fb56e47283f02038b920654056.jpg",
        rating : 10,
        videoUrl : "https://youtu.be/x8UAUAuKNcU",
        isUpdated : false,
    }
    ]},
    reducers : {
     addMovie : (state,action)=> {
    state.movies.push(action.payload)
     },
     deleteMovie : (state,action)=>{
    state.movies = state.movies.filter((el)=> el.id !== action.payload)
     },

     upDateMovie : (state,action)=>{
       state.movies = state.movies.map((el)=>el.id === action.payload.id ? el = action.payload.upDatedMovie : el)
     }
    }
}) 

export const {addMovie,deleteMovie,upDateMovie} = movieSlice.actions
export default movieSlice.reducer