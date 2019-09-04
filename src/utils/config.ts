import axios from 'axios';
import { formatData } from './common';
let Instance = axios.create({
  baseURL: '',
  timeout: 12000
});
Instance.interceptors.request.use(req => {
  return req;
});
Instance.interceptors.response.use(
  resp => {
    return resp;
  },
  err => console.log
);

export async function get(url: string, data?: any) {
  // data是可选参数
  let resultUrl = `${url}?${formatData(data)}`;
  let result = await Instance.get(resultUrl);
  return result;
}
export async function post(url: string, data?: any) {
  let result = await Instance.post(url, data);
  return result;
}
export default Instance;
