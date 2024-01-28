import { RoleCard } from "../../components/RoleCard/RoleCard";
import { ContainerExtra } from "../Container/ContainerExtra/ContainerExtra";
import s from "./Roles.module.scss";

export const Roles = () => {
  const rolesData = [
    {
      role: "ученик",
      descr: "Хочу найти репетитора и начать обучение!",
      img: "./img/roles/student.png",
    },
    {
      role: "родитель",
      descr: "Хочу помочь своему ребенку найти качественного репетитора!",
      img: "./img/roles/parent.png",
    },
    {
      role: "репетитор",
      descr: "Хочу поделится знаниями со студентами!",
      img: "./img/roles/tutor.png",
    },
  ];

  return (
    <ContainerExtra>
      <div className={s.content}>
        {rolesData.map((item) => (
          <RoleCard key={item.role} {...item} />
        ))}
      </div>
    </ContainerExtra>
  );
};
