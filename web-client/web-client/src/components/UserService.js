import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'http://178.128.111.201:49161/';

class UserService {
  getProjects() {
    return axios.post(API_URL + 'projects', {}, { headers: authHeader() });
  }

  getExpenses(project_id) {
    return axios.post(API_URL + 'expenses', {project_id}, { headers: authHeader() });
  }

  addExpenses(project_id, category_id, name, description, amount) {
    return axios.post(API_URL + 'addExpense', {project_id, category_id, name, description, amount}, { headers: authHeader() });
  }

}

export default new UserService();