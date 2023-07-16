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
  const [imagemMain, SetImagemMain] = useState([]);
  const gameService = new GameService();

  useEffect(() => {
    gameService
      .getGames()
      .then((games) => {
        console.log(games.results);
        SetImagemMain(games.results);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao obter os jogos:", error);
      });

    gameService
      .getGamespPerId("grand-theft-auto-v")
      .then((game) => {
        console.log(game);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao obter os jogos:", error);
      });
  }, []);

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
        <div className="img_bg"></div>
        <section>
          <Carrossel titulo="Em alta" jogos={imagemMain} />
        </section>
      </main>
    </>
  );
}
