import Api from "./api.service";

let key = "9cc768f052af4553891c3ca53b733532"

export default class GameService {

  async getGames() {
    try {
      const response = await Api.get("/games", {
        params: {
          key: key
        }
      })
      return response.data;
    } catch (error) {
      console.error("Ocorreu um erro ao obter os jogos:", error);
      throw error;
    }
  }
}
