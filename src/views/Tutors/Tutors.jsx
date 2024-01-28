import { useEffect, useState } from "react";
import { FilterBtn } from "../../components/FilterBtn/FilterBtn";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { TutorCard } from "../../components/TutorCard/TutorCard";
import { Categories } from "../Categories/Categories";
import { Container } from "../Container/Container";
import s from "./Tutors.module.scss";

export const Tutors = () => {
  const [tutorsInfo, setTutorsInfo] = useState([]);
  const API_URL =
    "https://tutor-bed3b-default-rtdb.asia-southeast1.firebasedatabase.app";

  useEffect(() => {
    fetch(`${API_URL}/tutors.json`)
      .then((res) => res.json())
      .then((data) => setTutorsInfo(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section className={s.tutors}>
      <Container>
        <div className={s.sorting}>
          <SearchForm className={s.search} />
          <FilterBtn className={s.filter}>Фильтры</FilterBtn>
        </div>
        <Categories />
      </Container>

      <Container>
        <div className={s.cards}>
          {tutorsInfo.map((item) => (
            <TutorCard key={item.name} {...item} />
          ))}
        </div>

        <button className={s.load}>Загрузить ещё</button>
      </Container>
    </section>
  );
};
