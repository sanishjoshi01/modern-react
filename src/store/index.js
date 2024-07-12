import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { reset } from "./actions";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    }
});

export { store, addSong, removeSong, addMovie, removeMovie, reset };

// console.log(store.getState());

// store.dispatch({
//     type: 'song/addSong',
//     payload: 'new song'
// });

// console.log(store.getState());
