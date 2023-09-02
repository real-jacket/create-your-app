import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {};

const $axios = axios.create(config);

$axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function removeLoadingDom() {
  const loadingNode = document.getElementById('loading-wrapper');
  const body = document.querySelector('body');
  if (loadingNode) body?.removeChild(loadingNode);
}

$axios.interceptors.response.use(
  function (response) {
    removeLoadingDom();
    return response;
  },
  function (error) {
    removeLoadingDom();
    return Promise.reject(error);
  }
);

export default $axios;
