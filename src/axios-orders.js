import axios from 'axios';

const instance = axios.create(
    {
        baseURL:"https://burger-app-a10d6.firebaseio.com/",
    }
)

export default instance;