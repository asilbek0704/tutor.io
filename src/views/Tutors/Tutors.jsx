import { FilterBtn } from "../../components/FilterBtn/FilterBtn";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { TutorCard } from "../../components/TutorCard/TutorCard";
import { Categories } from "../Categories/Categories";
import { Container } from "../Container/Container";
import s from "./Tutors.module.scss";

export const Tutors = () => {
  return (
    <section className={s.tutors}>
      <Container>
        <div className={s.sorting}>
          <SearchForm className={s.search} />
          <FilterBtn className={s.filter}>Фильтры</FilterBtn>
        </div>
        <Categories />
        <TutorCard />
      </Container>
    </section>
  );
};
