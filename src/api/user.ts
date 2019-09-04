import { get, post } from '../utils/config';
export async function login(username: any, password: any) {
  let result = await post('/', {
    username,
    password
  });
  return result;
}
