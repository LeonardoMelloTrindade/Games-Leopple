import { Button } from "react-bootstrap";

export default function edtitarPerfilBtn(props) {
  const { editarPerfil  } = props;

  return (
    <>
      <Button className="btn" variant="outline-warning" size="lg">{editarPerfil}</Button>

     
    </>
  );
}
