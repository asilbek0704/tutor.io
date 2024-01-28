import logoSvg from "./logo.svg";
import s from "./Logo.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Logo = ({ className }) => (
  <Link to="/" className={classNames(s.link, className)}>
    <img
      className={s.img}
      src={logoSvg}
      alt="Логотип для поиска репетиторов tutor.io"
    />
  </Link>
);
