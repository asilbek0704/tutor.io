import { Container } from "../../views/Container/Container";
import s from "./JoinBanner.module.scss";

export const JoinBanner = () => (
  <Container>
    <div className={s.banner}>
      <div className={s.content}>
        <p className={s.text}>
          Раскройте свой потенциал в обучении, присоединяйтесь к нам и
          встречайтесь с мотивированными учениками для роста вашего опыта
          репетиторства
          <br />
          <br />
          Измените свой путь к успеху всего несколькими щелчками мыши уже
          сегодня!
        </p>

        <div className={s.buttons}>
          <a href="#!" className={s.joinBtn}>Стать репетитором</a>
          <a href="#!" className={s.detailedBtn}>Подробнее</a>
        </div>
      </div>

      <figure className={s.img}>
        <img src="./img/illustrations/join_banner.png" alt="" />
      </figure>
    </div>
  </Container>
);
