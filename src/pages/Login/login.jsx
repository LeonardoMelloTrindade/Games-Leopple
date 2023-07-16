import { NavLink } from "react-router-dom";
import BtnEditarPerfil from "../../components/EditarPerfilBtn/edtitarPerfilBtn";
import Perfis from "../../components/Perfis/perfis";
import "./login.css";

export default function login() {

  return (
    <>
      <header className="d-flex justify-content-between">
        <img
          className="logotipo"
          src="https://cdn.discordapp.com/attachments/1077316357550518357/1124481276531970048/Sem_Titulo-1.jpg"
        />

        <nav>
          <NavLink to={"/EditarPerfil"}>
            <BtnEditarPerfil editarPerfil="Editar Perfis" min={2} max={10} />
          </NavLink>
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
