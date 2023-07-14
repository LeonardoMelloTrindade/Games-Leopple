import axios from "axios";

const api = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "9cc768f052af4553891c3ca53b733532"
  }
});

export default api;