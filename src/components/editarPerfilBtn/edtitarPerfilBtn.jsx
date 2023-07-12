import { Button } from "react-bootstrap";

export default function edtitarPerfilBtn(props) {
  const { editarPerfil, min, max } = props;

  return (
    <>
      <Button className="btn" variant="outline-warning" size="lg">{editarPerfil}</Button>

      {/*<p>{parseInt(Math.random() * (max - min)) + min}</p>*/}
    </>
  );
}
