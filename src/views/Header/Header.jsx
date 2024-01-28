import classNames from "classnames";
import { FilterBtn } from "../../components/FilterBtn/FilterBtn";
import { LangBtn } from "../../components/LangBtn/LangBtn";
import { Logo } from "../../components/Logo/Logo";
import { MessageBtn } from "../../components/MessageBtn/MessageBtn";
// import { Profile } from "../../components/Profile/Profile";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { SignBtn } from "../../components/SignBtn/SignBtn";
import { ContainerExtra } from "../Container/ContainerExtra/ContainerExtra";
import s from "./Header.module.scss";

export const Header = ({
  hideSettings,
  hideSearchBar,
  hideLangBtn,
  hideMessageBtn,
  noShadow
}) => {
  return (
    <header className={classNames(s.header, noShadow ? "no-shadow " : null)}>
      <ContainerExtra className={s.headerContainer}>
        <div className={s.left}>
          <Logo className={s.logo} />
          <MessageBtn
            className={classNames(
              s.message,
              hideMessageBtn ? "visually-hidden" : null
            )}
          />
        </div>

        <div
          className={classNames(
            s.searchBar,
            hideSearchBar ? "visually-hidden" : null
          )}
        >
          <SearchForm className={s.search} />
          <FilterBtn className={s.filter} />
        </div>

        <div
          className={classNames(
            s.settings,
            hideSettings ? "visually-hidden" : null
          )}
        >
          <LangBtn
            className={classNames(
              s.lang,
              hideLangBtn ? "visually-hidden" : null
            )}
          />
          <SignBtn className={s.sign} />
          {/* <Profile className={s.profile} /> */}
        </div>
      </ContainerExtra>
    </header>
  );
};
