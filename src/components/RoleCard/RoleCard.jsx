import s from "./RoleCard.module.scss";

export const RoleCard = ({ role, descr, img }) => (
  <article className={s.card}>
    <h2 className={s.title}>Я {role}</h2>
    <p className={s.text}>{descr}</p>

    <figure className={s.img}>
      <img src={img} alt="" />
    </figure>

    <a className={s.btn} href="#!">
      Создать аккаунт
    </a>
  </article>
);
