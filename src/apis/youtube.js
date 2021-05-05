import axios from 'axios';

const KEY = 'AIzaSyB0HRjt4_YzyNba2PihjCE_X0DkRKZ4X2s'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})