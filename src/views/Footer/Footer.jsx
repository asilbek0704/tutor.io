import classNames from "classnames";
import { Logo } from "../../components/Logo/Logo";
import { Container } from "../Container/Container";
import s from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

export const Footer = () => (
  <footer className={s.footer}>
    <Container className={s.footerContainerTop}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.content}>
        <div className={s.contacts}>
          <a className={s.contactsLink} href="tel:+998935886413">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.93066 1.11622C6.64999 2.00804 6.95812 2.50329 7.57462 3.3951C8.29395 4.38584 8.08848 5.77291 7.06075 6.46659L5.31391 7.65552C3.1561 9.14181 10.657 19.4459 12.9178 17.9594L14.6646 16.7705C15.6921 16.0769 17.1306 16.275 17.85 17.266C18.4665 18.1578 18.8774 18.653 19.4939 19.5449C20.2132 20.5356 20.2132 22.319 19.1856 23.0126C10.4519 28.9573 -6.39943 6.36756 2.5401 0.323334C3.56755 -0.370289 5.21157 0.12518 5.9309 1.11594L5.93066 1.11622Z"
                fill="#7232F2"
              />
            </svg>
            <span>+</span>998 93 588 64 13
          </a>
          <a className={s.contactsLink} href="#!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M14 0C21.7339 0 28 6.26613 28 14C28 21.7339 21.7339 28 14 28C6.26613 28 0 21.7339 0 14C0 6.26613 6.26613 0 14 0ZM20.8306 9.59677C21.0565 8.69355 20.4919 8.29839 19.871 8.52419L6.37903 13.7177C5.47581 14.0565 5.47581 14.621 6.20968 14.8468L9.65323 15.9194L17.6694 10.8387C18.0645 10.6129 18.4032 10.7823 18.121 11.0081L11.629 16.879L11.4032 20.4355C11.7419 20.4355 11.9113 20.2661 12.0806 20.0968L13.7742 18.4597L17.2742 21.0565C17.9516 21.3952 18.4032 21.2258 18.5726 20.4355L20.8306 9.59677Z"
                fill="#7232F2"
              />
            </svg>
            <span>@</span>abrorkhon
          </a>
        </div>

        <nav className={s.navigation}>
          <ul className={s.list}>
            <li>
              <NavLink to="/" className={classNames(s.link, s.active)}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/chats" className={s.link}>
                Сообщения
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className={s.link}>
                О нас
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Container>

    <hr className={s.border} />

    <Container className={s.footerContainerBottom}>
      <p className={s.copyright}>
        <span>©</span> 2024 tutor.io <span>/</span> All rights reserved
      </p>

      <ul className={s.socials}>
        <li>
          <a href="#!" className={s.socialsLink}>
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#!" className={s.socialsLink}>
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#!" className={s.socialsLink}>
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#!" className={s.socialsLink}>
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </Container>
  </footer>
);
