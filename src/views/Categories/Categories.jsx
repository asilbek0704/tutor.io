import classNames from "classnames";
import s from "./Categories.module.scss";
import { useEffect, useState } from "react";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  const API_URL =
    "https://tutor-bed3b-default-rtdb.asia-southeast1.firebasedatabase.app";

  useEffect(() => {
    fetch(`${API_URL}/categories.json`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className={s.categories}>
      <ul className={s.list}>
        <li>
          <a href="#!" className={classNames(s.link, s.active)}>
            Все
          </a>
        </li>

        {categories.map((item, i) => (
          <li key={i}>
            <a href="#!" className={s.link}>
              {item.category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
