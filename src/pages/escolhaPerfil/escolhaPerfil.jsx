import BtnEditarPerfil from "../../components/editarPerfilBtn/edtitarPerfilBtn";
import Perfis from "../../components/perfis/perfis";
import GameService from "../../services/games.service";
import "./escolhaPerfil.css";

export default function escolhaPerfil() {
  const gameService = new GameService();
  gameService
    .getGames()
    .then((games) => {
      console.log(games.results);
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao obter os jogos:", error);
    });

  return (
    <>
      <header className="d-flex justify-content-between">
        <img
          className="logotipo"
          src="https://cdn.discordapp.com/attachments/1077316357550518357/1124481276531970048/Sem_Titulo-1.jpg"
        />

        <nav>
          <BtnEditarPerfil editarPerfil="Editar Perfis" min={2} max={10} />
        </nav>
      </header>

      <main className="d-flex justify-content-center">
        <section className="editar_perfil">
          <h2 className="text-center">Quem vai entrar?</h2>
          <Perfis />
        </section>
      </main>
    </>
  );
}
