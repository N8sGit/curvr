import axios from 'axios';

async function request(params = []) {
    return await axios.get('https://api.covid19api.com/', {
        params: { ...params },
    });
}
export default request;
