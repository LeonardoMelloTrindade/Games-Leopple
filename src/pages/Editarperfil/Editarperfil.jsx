import BtnEditarPerfil from "../components/edtitarPerfilBtn";
import Perfis from "../components/perfis";
import "./perfil.css";

export default function Editarperfil() {
  return (
    <>
      <header className="d-flex justify-content-between">
        <img
          className="logotipo"
          src="https://cdn.discordapp.com/attachments/1077316357550518357/1124481276531970048/Sem_Titulo-1.jpg"
        />

        <nav>
          <BtnEditarPerfil editarPerfil="Pronto" min={2} max={10} />
        </nav>
      </header>

      <main className="d-flex justify-content-center">
        <section className="editar_perfil">
          <h2 className="text-center">Editar Perfis</h2>
          <h3 className="text-center">Selecione um perfil para editar</h3>
          <Perfis />
        </section>
      </main>
    </>
  );
}
