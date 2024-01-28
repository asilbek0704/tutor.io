import { SignIn } from "../components/SignIn/SignIn";
import { Header } from "../views/Header/Header";

export const Login = () => (
  <>
    <Header hideSettings hideLangBtn hideSearchBar hideMessageBtn noShadow />
    <SignIn />
  </>
);
