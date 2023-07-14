import { Stack } from "react-bootstrap";
import "./perfis.css";
import { NavLink } from "react-router-dom";

export default function perfis() {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        className="d-flex justify-content-center container_perfis"
      >
        <article className="p-2">
          <figure>
            <NavLink to={"/Home"}>
              <img
                className="img_perfil"
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/BA2B0A0DBDAED26E6546A7533238E3F41F811DD1D3B20DF41992D856C64D9CDB/scale?width=280&aspectRatio=1.00&format=png"
              />
            </NavLink>
            <figcaption className="text-center nome_perfil">
              Leonardo
            </figcaption>
          </figure>
        </article>
        <article className="p-2">
          <figure>
            <NavLink to={"/Home"}>
              <img
                className="img_perfil"
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/BA2B0A0DBDAED26E6546A7533238E3F41F811DD1D3B20DF41992D856C64D9CDB/scale?width=280&aspectRatio=1.00&format=png"
              />
            </NavLink>

            <figcaption className="text-center nome_perfil">
              Leonardo
            </figcaption>
          </figure>
        </article>
        <article className="p-2">
          <figure>
            <NavLink to={"/Home"}>
              <img
                className="img_perfil"
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/BA2B0A0DBDAED26E6546A7533238E3F41F811DD1D3B20DF41992D856C64D9CDB/scale?width=280&aspectRatio=1.00&format=png"
              />
            </NavLink>

            <figcaption className="text-center nome_perfil">
              Leonardo
            </figcaption>
          </figure>
        </article>
      </Stack>
    </>
  );
}
