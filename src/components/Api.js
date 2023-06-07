import axios from "axios";

//=============jwt==============
//decode user token
export const decode = async (token) =>
  await axios.post(`http://localhost:8080/api/decode`, { token: token });