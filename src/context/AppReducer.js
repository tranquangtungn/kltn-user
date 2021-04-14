export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_ALBUM':
            return {
                albums: state.albums.filter(album => {
                    return album.id !== action.payload
                })
            }
        case 'ADD_ALBUM':
            return {
                albums: [action.payload, ...state.albums]
            }
        case 'FETCH_ALBUM':
            return {
                ...state.albums,
                albums: action.payload
            }
        case 'EDIT_ALBUM':
            const updateAlbum = action.payload;
            const updateAlbums = state.albums.map(album => {
                if (album.id === updateAlbum.id) {
                    return updateAlbum;
                }
                return album;
            })
            return {
                albums: updateAlbums
            }
        default:
            return state
    }
}