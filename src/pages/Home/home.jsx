import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Carrossel from "../../components/carrossel/carrossel";
import GameService from "../../services/games.service";
import "./home.css";

export default function Home() {
  const [jogosEmAlta, SetJogosEmAlta] = useState([]);
  const [jogosDeAcao, SetJogosDeAcao] = useState([]);
  const [divMain, SetDivMain] = useState({})
  const gameService = new GameService();

  useEffect(() => {
    gameService
      .getGames("1")
      .then((games) => {
        //console.log(games.results);
        SetJogosEmAlta(games.results);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao obter os jogos:", error);
      });
    gameService
      .getGames("2")
      .then((games) => {
        //console.log(games.results);
        SetJogosDeAcao(games.results);
      })
      .catch((error) => {
        console.error(
          "Ocorreu um erro ao obter os jogos de acordo com o genero:",
          error
        );
      });
   
  }, []);

  const handleSlideHover = (game_slug) => {
    console.log(game_slug);
    gameService
      .getGamesPerSlug(game_slug)
      .then((gameData) => {
        console.log(gameData);
        SetDivMain(gameData);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao obter o jogo pelo slug:", error);
      });
  };

  return (
    <>
      <header className="d-flex justify-content-between">
        <section className="section_canto">
          <NavLink to={"/Home"}>
            <img
              className="logotipo"
              src="https://cdn.discordapp.com/attachments/1077316357550518357/1124481276531970048/Sem_Titulo-1.jpg"
            />
          </NavLink>
        </section>
        <section>
          <Nav>
            <Navbar>
              <Container className="nav-container">
                <Nav className="me-auto p-1">
                  <Nav.Link className="text-light" href="/Home">
                    <span>Início</span>
                  </Nav.Link>
                  <Nav.Link className="text-light">
                    <span className="">Pesquisa</span>
                  </Nav.Link>
                  <Nav.Link className="text-light">
                    <span className="">+ Minha Lista</span>
                  </Nav.Link>
                  <Nav.Link className="text-light">
                    <span className="">Jogos Online</span>
                  </Nav.Link>
                  <Nav.Link className="text-light">
                    <span className="">Jogos Offline</span>
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Nav>
        </section>
        <section className="section_canto">
          <Dropdown>
            <Dropdown.Toggle className="dropdown bg-black border-black" />

            <Dropdown.Menu className=" text-white bg-secondary">
              <Dropdown.Item href="/EditarPerfil" className="dropdown-item">
                <span className="under text-black">Editar perfis</span>
              </Dropdown.Item>
              <Dropdown.Item href="/">
                <span className="under text-black">Sair</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </section>
      </header>

      <main>
        <div className="img_bg" style={{ backgroundImage: `url(${divMain.background_image_additional})` }}>

          <h2>{divMain.name}</h2>
          <p>{divMain.released}</p>
          <h5>{divMain.stores.map((stores) => (
            console.log(stores)
            
          ))}</h5>

        </div>
        <section>
          <Carrossel
            titulo="Em alta"
            jogos={jogosEmAlta}
            onSlideHover={handleSlideHover}
          />
          <Carrossel
            titulo="Ação"
            jogos={jogosDeAcao}
            onSlideHover={handleSlideHover}
          />
        </section>
      </main>
    </>
  );
}
