import axios from '../axios/index';

let ajax = {};
ajax.api = ({ url, method, data }) => {
  return axios({
    url,
    method,
    data,
  });
};

export default ajax;
