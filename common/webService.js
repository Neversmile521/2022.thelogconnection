import axios from 'axios'

export const fetcher = (url) => axios.get(url).then(res => res.data);

export const postData = (url, data) => axios.post(url, JSON.stringify(data)).then(res => res.data);

export const getData = (url) => {
  if (url.substr(-4) === "json") {
    let path = url.split("/_data");
    let downloadpath = path[0] + "/download.php?/_data" + path[1]
    return axios.get(downloadpath).then(res => res.data);
  }
  return axios.get(url).then(res => res.data);
}


var fileDownload = require('js-file-download');

export const downloadFile = (url, payload, fileName) => {
  const fileUrl = url;
  axios({
    url: fileUrl,
    method: 'POST',
    responseType: 'blob', // Important
    data: payload
  }).then((response) => {
    fileDownload(response.data, fileName);
  });
}


export const readTextFile = (url) => {
  return new Promise((resolve, reject) => {

    let path = url.split("/_assets");
    let downloadpath = path[0] + "/download.php?/_assets" + path[1]
    axios.get(downloadpath).then(res => {
      resolve(res.data)
    }).catch(()=>{
      reject("")
    })
  })
}