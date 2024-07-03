import classNames from 'classnames';
import { FilterBtn } from '../../components/FilterBtn/FilterBtn';
import { LangBtn } from '../../components/LangBtn/LangBtn';
import { Logo } from '../../components/Logo/Logo';
import { MessageBtn } from '../../components/MessageBtn/MessageBtn';
import { Profile } from '../../components/Profile/Profile';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { SignBtn } from '../../components/SignBtn/SignBtn';
import { ContainerExtra } from '../Container/ContainerExtra/ContainerExtra';
import s from './Header.module.scss';
import { useLocation } from 'react-router-dom';

export const Header = ({
  hideSettings,
  hideSearchBar,
  hideLangBtn,
  hideMessageBtn,
  noShadow,
}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isAuthorized = searchParams.get('authorized');

  return (
    <header className={classNames(s.header, noShadow ? 'no-shadow ' : null)}>
      <ContainerExtra className={s.headerContainer}>
        <div className={s.left}>
          <Logo className={s.logo} />
          <MessageBtn
            className={classNames(
              s.message,
              hideMessageBtn ? 'visually-hidden' : null
            )}
          />
        </div>

        <div
          className={classNames(
            s.searchBar,
            hideSearchBar ? 'visually-hidden' : null
          )}
        >
          <SearchForm className={s.search} />
          <FilterBtn className={s.filter} />
        </div>

        <div
          className={classNames(
            s.settings,
            hideSettings ? 'visually-hidden' : null
          )}
        >
          <LangBtn
            className={classNames(
              s.lang,
              hideLangBtn ? 'visually-hidden' : null
            )}
          />

          {isAuthorized ? (
            <Profile className={s.profile} />
          ) : (
            <SignBtn className={s.sign} />
          )}
        </div>
      </ContainerExtra>
    </header>
  );
};
