import axios from "axios";

function api() {
  return axios
    .get("https://economia.awesomeapi.com.br/last/USD-BRL")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      console.log("Deu errado");
    });
}

export default api;
