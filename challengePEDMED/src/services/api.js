import axios from 'axios';

const BASE_URL = 'https://private-54fe53-pebmeddesafio.apiary-mock.com';
export const pedMedApi = (sucess, error) => {
  const request = axios({
    method: 'GET',
    url: `${BASE_URL}/contents`,
    headers: [],
  });
  return request.then(response => sucess(response), err => error(err));
};
