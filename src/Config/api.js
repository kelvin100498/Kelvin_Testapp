import axios from 'axios';

const baseUrl = 'https://simple-contact-crud.herokuapp.com/';
axios.defaults.validateStatus = status => status <= 510;

export const apiGetAllContact = () => {
  return axios({
    method: 'GET',
    url: baseUrl + `contact`,
  });
};

export const apiGetContactById = id => {
  return axios({
    method: 'GET',
    url: baseUrl + `contact/${id}`,
  });
};

export const apiSaveContact = dataContact => {
  return axios({
    method: 'POST',
    url: baseUrl + `contact`,
    data: dataContact,
  });
};

export const apiDeleteContact = id => {
  return axios({
    method: 'DELETE',
    url: baseUrl + `contact/${id}`,
  });
};

export const apiEditContact = (dataContact, id) => {
  return axios({
    method: 'PUT',
    url: baseUrl + `contact/${id}`,
    data: dataContact,
  });
};
