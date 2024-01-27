import logoSvg from "./logo.svg";
import s from "./Logo.module.scss";
import classNames from "classnames";

export const Logo = ({ className }) => (
  <a className={classNames(s.link, className)} href="/">
    <img
      className={s.img}
      src={logoSvg}
      alt="Логотип для поиска репетиторов tutor.io"
    />
  </a>
);
