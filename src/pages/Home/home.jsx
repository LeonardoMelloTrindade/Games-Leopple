import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Carrossel from "../../components/carrossel/carrossel";
import AddLista from "../../components/AddListaBtn/addLista";
import GameService from "../../services/games.service";
import "./home.css";

export default function Home() {
  const [jogosEmAlta, SetJogosEmAlta] = useState([]);
  const [primeiroJogos, SetprimeiroJogos] = useState([]);
  const [recomendados, SetRecomendados] = useState([]);
  const [divMain, SetDivMain] = useState(
    {
      name: 'Grand Theft Auto V',
      background_image_additional: 'https://media.rawg.io/media/resize/1920/-/screenshots/422/422565e2157ceb47b51014f3f34d4840.jpg',
      released: 'Sep 17, 2013',
      stores: []
    }
  );
  const gameService = new GameService();

  useEffect(() => {
    gameService
      .getGames("1")
      .then((games) => {
        //console.log(games.results);
        SetprimeiroJogos(games.results);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao obter os jogos:", error);
      });
    gameService
      .getGames("2")
      .then((games) => {
        //console.log(games.results);
        SetJogosEmAlta(games.results);
      })
      .catch((error) => {
        console.error(
          "Ocorreu um erro ao obter os jogos:",
          error
        );
      });
    gameService
      .getGames("3")
      .then((games) => {
        //console.log(games.results);
        SetRecomendados(games.results);
      })
      .catch((error) => {
        console.error(
          "Ocorreu um erro ao obter os jogos:",
          error
        );
      });
  });

  const handleSlideHover = (game_slug) => {
    console.log(game_slug)
    
    gameService
      .getGamesPerSlug(game_slug)
      .then((gameData) => {
        //console.log(gameData);
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
        <div
          className="img_bg"
          style={{
            backgroundImage: `url(${divMain.background_image_additional})`,
            
          }}
        >
          <h2 className="nomeJogo">{divMain.name}</h2>
          <p className="LancamentoJogo">{divMain.released}</p>
          <article>
            {divMain.length === 0 ? (
              <span></span>
            ) : (
              divMain.stores.map((storeItem, index) => {
                const nameStore = storeItem.store.name;
                return (
                  <span className="infoMain" key={index}>
                    {nameStore} * &nbsp;
                  </span>
                );
              })
            )}
            <AddLista nome="Adicionar a lista"/>
          </article>
        </div>
        <section className="carrossel">
          <Carrossel
            jogos={primeiroJogos}
            onSlideHover={handleSlideHover}
          />
          <Carrossel
            titulo="Em alta"
            jogos={jogosEmAlta}
            onSlideHover={handleSlideHover}
          />
          <Carrossel
            titulo="Recomendados para você"
            jogos={recomendados}
            onSlideHover={handleSlideHover}
          />
        </section>
      </main>
    </>
  );
}
