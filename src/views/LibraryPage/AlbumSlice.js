
import { createSlice } from '@reduxjs/toolkit'
const album = createSlice({
    name: 'album',
    initialState: [],
    reducers: {
        addAlbum: (state, action) => {
            state.push(action.payload)
        }
    }
});
const { reducer, actions } = album;
export const { addAlbum } = actions;
export default reducer;