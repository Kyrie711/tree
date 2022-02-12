import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://118.31.78.224:20001',
    timeout: 5000
  })
  // console.log(config);
  return instance(config)
}