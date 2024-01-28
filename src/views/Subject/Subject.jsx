import { useEffect, useState } from "react";
import { FilterBtn } from "../../components/FilterBtn/FilterBtn";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Container } from "../Container/Container";
import s from "./Subject.module.scss";
import { TutorCard } from "../../components/TutorCard/TutorCard";
import { Slider } from "../Slider/Slider";
import { Link, useParams } from "react-router-dom";

export const Subject = () => {
  const { subject } = useParams();


  const [tutorsList, setTutorsList] = useState([]);
  const API_URL =
    "https://tutor-bed3b-default-rtdb.asia-southeast1.firebasedatabase.app";

  useEffect(() => {
    fetch(`${API_URL}/tutors.json`)
      .then((res) => res.json())
      .then((tutors) => {
        const filtered = tutors.filter((item) => item.subjects.includes(subject));
        setTutorsList(filtered)
      })
      .catch((err) => console.log(err.message));
  }, [subject]);

  return (
    <>
      <section className={s.subject}>
        <Container>
          <h2 className={s.title}>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="48"
                viewBox="0 0 28 48"
                fill="none"
              >
                <path
                  d="M1.02519 21.5794C-0.34173 22.9182 -0.34173 25.0925 1.02519 26.4313L22.0211 46.9959C23.388 48.3347 25.6079 48.3347 26.9748 46.9959C28.3417 45.657 28.3417 43.4828 26.9748 42.1439L8.4503 24L26.9639 5.85607C28.3308 4.51724 28.3308 2.34297 26.9639 1.00413C25.597 -0.334709 23.3771 -0.334709 22.0102 1.00413L1.01426 21.5687L1.02519 21.5794Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            Подборка <b>“{subject}”</b>
          </h2>

          <div className={s.sorting}>
            <SearchForm className={s.search} />
            <FilterBtn className={s.filter}>Фильтры</FilterBtn>
          </div>

          <div className={s.cards}>
            {tutorsList.map((item) => (
              <TutorCard key={item.name} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <div className={s.content}>
        <h2 className={s.others}>
          Другие <b>подброки</b>
        </h2>
        <Slider />
      </div>
    </>
  );
};
