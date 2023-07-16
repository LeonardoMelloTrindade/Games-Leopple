import Api from "./api.service";

export default class GameService {

  async getGames() {
    try {
      const response = await Api.get("/games", {
        params: {
         page: 1,
         page_size: 30
        }
      })
      return response.data;
    } catch (error) {
      console.error("Ocorreu um erro ao obter os jogos:", error);
      throw error;
    }
  }
  async getGamespPerId(ID) {
    try {
    const response = await Api.get(`/games`, {
        params: {
          id: ID
        }
      })
      return response.data;
    } catch (error) {
      console.error("Ocorreu um erro ao obter o jogo pelo ID:", error);
      throw error;
    }
  }
}
