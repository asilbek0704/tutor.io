import { Link } from "react-router-dom";
import s from "./SubjectSlide.module.scss";

export const Subject = ({ subject, img }) => (
  <li>
    <Link to={`result/${subject}`} className={s.link}>
      <img className={s.img} src={img} alt="" />
      <h2 className={s.title}>{subject}</h2>
    </Link>
  </li>
);
