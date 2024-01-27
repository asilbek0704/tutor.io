import classNames from "classnames"
import s from "./LangBtn.module.scss"

export const LangBtn = ({className}) => (
  <div className={classNames(s.switch, className)}>
    <a className={s.active} href="#!">Ру</a>
    <a href="#!">O’z</a>
  </div>
)