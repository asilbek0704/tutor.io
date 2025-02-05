import { JoinBanner } from "../../components/JoinBanner/JoinBanner";
import { Title } from "../../components/Title/Title";
import { Slider } from "../Slider/Slider";
import { Tutors } from "../Tutors/Tutors";
// import s from "./Main.module.scss";

export const Main = () => {
  return (
    <main>
      <Title />
      <Slider />
      <Tutors />
      <JoinBanner />
    </main>
  );
};
