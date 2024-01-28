import s from "./TutorCard.module.scss";

export const TutorCard = () => (
  <article className={s.card}>
    <figure className={s.img}>
      <img src="./img/tutors/honJong.png" alt="" />
    </figure>

    <div className={s.content}>
      <div className={s.about}>
        <h2 className={s.name}>Алесандро Агостини</h2>

        <div className={s.rate}>
          <div className={s.stars}></div>
          <p className={s.reviews}>42 отзывов</p>
        </div>

        <ul className={s.subjects}>
          <li>Биология</li>
        </ul>
      </div>

      <a className={s.contactBtn} href="#!">
        Связаться
      </a>
    </div>
  </article>
);
