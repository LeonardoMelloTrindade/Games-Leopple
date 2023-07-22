import Api from "./api.service";

export default class GameService {

  async getGames(page) {
    try {
      const response = await Api.get("/games", {
        params: {
         page: parseInt(page),
         page_size: 20
        }
      })
      return response.data;
    } catch (error) {
      console.error("Ocorreu um erro ao obter os jogos:", error);
      throw error;
    }
  }
  async getGamesPerSlug(SLUG) {
    try {
    const response = await Api.get(`/games/${SLUG}`, {
        params: {
          
        }
      })
      return response.data;
    } catch (error) {
      console.error("Ocorreu um erro ao obter o jogo pelo ID:", error);
      throw error;
    }
  }
  async getGamespPerGender() {
    try {
    const response = await Api.get(`/genres`, {
        params: {
          ordering: "name",
          page: 1,
          page_size: 20
        }
      })
      return response.data;
    } catch (error) {
      console.error("Ocorreu um erro ao obter o jogo pelo ID:", error);
      throw error;
    }
  }
  async getGamesScreenshots(ID) {
    try {
    const response = await Api.get(`/games/${ID}/screenshots`, {
        params: {
         
        }
      })
      return response.data;
    } catch (error) {
      console.error("Ocorreu um erro ao obter o jogo pelo ID:", error);
      throw error;
    }
  }


}
