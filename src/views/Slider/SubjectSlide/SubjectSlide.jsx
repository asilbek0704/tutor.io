import s from "./SubjectSlide.module.scss";

export const Subject = ({ subject, img }) => (
  <li>
    <a className={s.link} href="#!">
      <img className={s.img} src={img} alt="" />
      <h2 className={s.title}>{subject}</h2>
    </a>
  </li>
);
