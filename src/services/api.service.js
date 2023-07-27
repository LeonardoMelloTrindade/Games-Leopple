import axios from "axios";

const api = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "52396458e1ee4fabaa28a2904ea519de"
  }
});

export default api;