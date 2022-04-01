import axios from 'axios';
import DataForm from 'form-data';

const baseUrl = 'https://simple-contact-crud.herokuapp.com/';
axios.defaults.validateStatus = status => status <= 510;

// export const apiGantiFoto = async (dataImage, token) => {
//   const body = new DataForm();
//   body.append('image', {
//     uri: dataImage.uri,
//     name: dataImage.fileName,
//     type: dataImage.type,
//   });
//   const headers = new Headers();
//   headers.append('authorization', `Bearer ${token}`);
//   headers.append('Content-Type', 'multipart/form-data');
//   const result = await fetch(baseUrl + 'profile/upload', {
//     body,
//     headers,
//     method: 'POST',
//   });
//   console.log(result, 'ini result');

//   return result.json();
// };

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
