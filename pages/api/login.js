import axios from "axios";
import { setCookie } from 'nookies';
import to from 'await-to-js';

export default async (req, res) => {
  // send data to strapi backend
  let url = `${process.env.API_BASE_URL}/auth/local`;
  let [error, response] = await to(axios.post(url, req.body));
  if(error) return res.status(error.response.status || 500).json(error.response.data);

  console.log(response)

  // set jwt token in cookie
  setCookie({ res }, 'jwt', response.data.jwt, {
    httpOnly:true,
    path: '/'
  });
  res.status(200).json(response.data);
}
