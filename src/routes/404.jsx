import { Error404 } from "../components/Error404/Error404";
import { Header } from "../views/Header/Header";

export const NotFound = () => (
  <>
    <Header hideSearchBar={true} />
    <Error404 />
  </>
);
