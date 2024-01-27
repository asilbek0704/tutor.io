import { useEffect, useState } from "react";
import s from "./Title.module.scss";
import TextTransition from "react-text-transition";
import { Container } from "../../views/Container/Container";

export const Title = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  let titles = ["английскому", "физикe", "истории", "алгебре", "биологии"];

  return (
    <Container>
      <h1 className={s.title}>
        Репетиторы по
        <TextTransition inline>
          <span className={s.subject}>
            &nbsp;{titles[index % titles.length]}
          </span>
        </TextTransition>
      </h1>
    </Container>
  );
};
