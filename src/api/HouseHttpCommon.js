import axios from "axios";

const BASE_URL =
  process.env.BACKEND_BASE_URL_HOUSE || "dkne.169.56.174.139.nip.io";

export default {
  axios: axios.create({
    baseURL: "http://" + BASE_URL + "/house/v1/api",
    headers: {
      "Content-Type": "application/json",
    },
  }),
};
