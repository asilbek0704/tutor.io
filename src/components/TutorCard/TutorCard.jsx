import { Link } from "react-router-dom";
import { getRating } from "../../helpers/stars";
import s from "./TutorCard.module.scss";

export const TutorCard = ({name, img, rating, reviews, subjects}) => (
  <article className={s.card}>
    <figure className={s.img}>
      <img src={img} alt="" />
    </figure>

    <div className={s.content}>
      <div className={s.about}>
        <h2 className={s.name}>{name}</h2>

        <div className={s.rate}>
          <div className={s.stars}>
            {getRating(rating)}
          </div>
          <p className={s.reviews}>{reviews} отзывов</p>
        </div>

        <ul className={s.subjects}>
          {subjects.split(", ").map((subjectName, i) => (
            <li key={subjectName + i}>{subjectName}</li>
          ))}
        </ul>
      </div>

      <Link to="/chats" className={s.contactBtn}>
        Связаться
      </Link>
    </div>
  </article>
);
