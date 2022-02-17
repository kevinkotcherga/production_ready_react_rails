import axios from 'axios';

// const baseUrl = 'http://localhost:3001/';
const baseUrl = 'https://react-testing-deploying.herokuapp.com/';

const updatePassword = payload =>
  axios.put(`${baseUrl}api/v1/password/update`, payload);

const registrationsApi = {
  updatePassword,
};

export default registrationsApi;
