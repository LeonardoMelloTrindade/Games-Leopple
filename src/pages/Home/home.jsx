import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./home.css";

export default function home() {
  return (
    <>
      <header className="d-flex justify-content-between">
        <section>
          <img
            className="logotipo"
            src="https://cdn.discordapp.com/attachments/1077316357550518357/1124481276531970048/Sem_Titulo-1.jpg"
          />
        </section>
        <section>
          <nav>
            <Navbar>
              <Container className="nav-container">
                <Nav className="me-auto p-1">
                  <Nav.Link className="text-light">
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
          </nav>
        </section>
        <section>
          <img
            className="img-perfil"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/BA2B0A0DBDAED26E6546A7533238E3F41F811DD1D3B20DF41992D856C64D9CDB/scale?width=280&aspectRatio=1.00&format=png"
          />
        </section>
      </header>
    </>
  );
}
