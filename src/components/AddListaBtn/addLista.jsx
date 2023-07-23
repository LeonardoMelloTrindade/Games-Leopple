import { Button } from "react-bootstrap";
import './addLista.css'

export default function addLista(props) {
  const { nome } = props;

  return (
    <>
      <article className="containerButton">
        <Button variant="light">{nome}</Button>
      </article>
    </>
  );
}
