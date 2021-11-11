import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'http://178.128.111.201:49161/';

class UserService {
  getProjects() {
    return axios.post(API_URL + 'projects', {}, { headers: authHeader() });
  }
}

export default new UserService();