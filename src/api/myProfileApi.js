import axiosClient from "api/axiosClient"


// api/productApi.js

const myProfileAPI = {
    get: (header) => {
        const url = '/users/my-profile';
        return axiosClient.get(url, {
            headers: {
                'x-access-token': `${header}`
            }
        });
    },
}


export default myProfileAPI;