import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
const initialState = {
    albums: [
        { id: 1, name: 'album nhạc trẻ', description: 'sống động, mạnh mẽ' },
        { id: 2, name: 'album nhạc hàn', description: 'tình cảm' },
        { id: 3, name: 'album nhạc thư giãn', description: 'áp dụng khi ngủ, khiến giấc ngủ sâu hơn' },
        { id: 4, name: 'album nhạc của tôi', description: 'sở thích bản thân' },
        { id: 5, name: 'album top 10 tracks 2020', description: 'top 10 in the world    ' },
    ]
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    const removeAlbum = (id) => {
        dispatch({
            type: 'REMOVE_ALBUM',
            payload: id
        })
    }
    const addAlbum = (album) => {
        dispatch({
            type: 'ADD_ALBUM',
            payload: album
        })
    }
    const editAlbum = (album) => {
        dispatch({
            type: 'EDIT_ALBUM',
            payload: album
        })
    }
    const fetchAlbum = (album) => {
        dispatch({
            type: 'FETCH_ALBUM',
            payload: album
        })
    }
    return (
        <GlobalContext.Provider value={{
            albums: state.albums,
            removeAlbum,
            addAlbum,
            editAlbum,
            fetchAlbum
        }}>
            {children}
        </GlobalContext.Provider>
    )
}