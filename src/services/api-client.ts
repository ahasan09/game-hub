import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '663d2ae1fb0d449fa60aef4416b96fee'
    }
});