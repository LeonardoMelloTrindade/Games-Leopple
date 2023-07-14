import Api from "./api.service";

export default class GameService {

  async getGames() {
    try {
      const response = await Api.get("/games", {
        params: {
          genres: 'shooter'
        }
      })
      return response.data;
    } catch (error) {
      console.error("Ocorreu um erro ao obter os jogos:", error);
      throw error;
    }
  }
}
