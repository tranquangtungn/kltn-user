import axiosClient from "api/axiosClient"




const top100TracksApi = {
    get: (header) => {
        const url = 'tracks/top-music';
        return axiosClient.get(url, {
            headers: {
                'x-access-token': `${header}`
            }
        });
    },
}


export default top100TracksApi;