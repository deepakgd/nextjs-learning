import axios from "axios";
import to from 'await-to-js';

export default async (req, res) => {
  // send data to strapi backend
  let url = `${process.env.API_BASE_URL}/auth/local/register`;
  let [error, response] = await to(axios.post(url, req.body));
  if(error) return res.status(error.response.status || 500).json(error.response.data);

  res.status(200).json({ success: true, message: "success" });
}
