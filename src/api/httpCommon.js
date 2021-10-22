import axios from "axios";

export default {
  axios: axios.create({
    baseURL: "http://dkne.169.56.174.139.nip.io/",
    headers: {
      "Content-Type": "application/json",
    },
  }),
};
