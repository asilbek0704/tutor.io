import classNames from "classnames"
import s from "./Profile.module.scss"

export const Profile = ({className}) => (
  <a className={classNames(s.profile, className)} href="#!">
    <img className={s.img} src="./img/profile.jpg" alt="" />
    <h3 className={s.name}>Аброрхон</h3>
  </a>
)