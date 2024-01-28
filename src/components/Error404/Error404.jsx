import { Container } from "../../views/Container/Container";
import s from "./Error404.module.scss";

export const Error404 = () => (
  <Container>
    <div className={s.info}>
      <div className={s.content}>
        <h1 className={s.title}>404!</h1>

        <p className={s.text}>Упс, эта страничка покинула чат!</p>

        <a href="/" className={s.btn}>
          Вернуться на главную
        </a>
      </div>

      <figure className={s.img}>
        <img src="./img/illustrations/not_found.png" alt="" />
      </figure>
    </div>
  </Container>
);
