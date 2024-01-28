
import { Container } from "../../views/Container/Container";
import s from "./SignIn.module.scss";

export const SignIn = () => (
  <Container className={s.signInContainer}>
    <div className={s.content}>
      <h2 className={s.title}>Вход в аккаунт</h2>

      <form className={s.form} action="">
        <label className={s.label} htmlFor="signIn_username">
          Юзернейм
        </label>
        <input
          className={s.input}
          type="text"
          id="signIn_username"
          placeholder="Введите юзернейм"
        />

        <label className={s.label} htmlFor="signIn_password">
          Пароль
        </label>
        <input
          className={s.input}
          type="password"
          id="signIn_password"
          placeholder="Введите пароль"
        />

        <button className={s.submit}>Войти</button>
      </form>

      <p className={s.text}>
        Еще нет аккаунта?{" "}
        <a href="#!" className={s.link}>
          Создать аккаунт
        </a>
      </p>
    </div>
  </Container>
);
