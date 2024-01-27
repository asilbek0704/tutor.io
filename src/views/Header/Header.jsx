import { FilterBtn } from "../../components/FilterBtn/FilterBtn";
import { LangBtn } from "../../components/LangBtn/LangBtn";
import { Logo } from "../../components/Logo/Logo";
import { MessageBtn } from "../../components/MessageBtn/MessageBtn";
// import { Profile } from "../../components/Profile/Profile";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { SignBtn } from "../../components/SignBtn/SignBtn";
import { Container } from "../Container/Container";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <div className={s.left}>
          <Logo className={s.logo} />
          <MessageBtn className={s.message} />
        </div>

        <div className={s.searchBar}>
          <SearchForm className={s.search} />
          <FilterBtn className={s.filter} />
        </div>

        <div className={s.settings}>
          <LangBtn className={s.lang} />
          <SignBtn className={s.sign} />
          {/* <Profile className={s.profile} /> */}
        </div>
        
      </Container>
    </header>
  );
};
