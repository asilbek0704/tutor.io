import classNames from "classnames";
import s from "./Container.module.scss";

export const Container = ({children, className}) => (
  <div className={classNames(s.container, className)}>{children}</div>
);
