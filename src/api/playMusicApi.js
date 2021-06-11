import axiosClient from "api/axiosClient"




const playMusicApi = {
    get: (header, trackId, userId) => {
        const url = `tracks/play/${trackId}/${userId}`;
        return axiosClient.get(url, {
            responseType: 'blob',
            headers: {
                'x-access-token': `${header}`,
                'Content-Type': 'audio/mpeg',
            }
        });
    },
}


export default playMusicApi;