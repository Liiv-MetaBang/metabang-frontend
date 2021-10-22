import axios from "axios";

const BASE_URL =
  process.env.BACKEND_BASE_URL_USER || "dkne.169.56.174.139.nip.io";

export default {
  axios: axios.create({
    baseURL: "http://" + BASE_URL + "/user/v1/",
    headers: {
      "Content-Type": "application/json",
    },
  }),
};
