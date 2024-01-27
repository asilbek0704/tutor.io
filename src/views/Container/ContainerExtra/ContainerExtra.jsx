import classNames from "classnames";
import s from "./ContainerExtra.module.scss";

export const ContainerExtra = ({children, className}) => (
  <div className={classNames(s.container, className)}>{children}</div>
);
