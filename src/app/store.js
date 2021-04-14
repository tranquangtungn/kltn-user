import { configureStore } from '@reduxjs/toolkit'
import albumsReducer from 'views/LibraryPage/AlbumSlice'
const rootReducer = {
    albums: albumsReducer,
}

const store = configureStore({
    reducer: rootReducer,
});
export default store;