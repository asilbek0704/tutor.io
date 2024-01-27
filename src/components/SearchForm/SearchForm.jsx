import classNames from "classnames";
import s from "./SearchForm.module.scss";
import { useRef, useState } from "react";

export const SearchForm = ({ className }) => {
  const prompt = useRef();
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    if (prompt.current.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div className={classNames(className, s.search)}>
      <div
        className={classNames(s.icon, isActive ? s.active : null)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.501 9.74816C19.501 11.8998 18.8025 13.8874 17.6259 15.5L23.5605 21.4394C24.1465 22.0253 24.1465 22.9769 23.5605 23.5629C22.9746 24.1489 22.0229 24.1489 21.437 23.5629L15.5023 17.6235C13.8897 18.8048 11.9021 19.4986 9.75048 19.4986C4.36428 19.4986 0 15.1344 0 9.74816C0 4.36196 4.36428 -0.00231934 9.75048 -0.00231934C15.1367 -0.00231934 19.501 4.36196 19.501 9.74816ZM9.75048 16.4985C10.6369 16.4985 11.5147 16.3239 12.3337 15.9846C13.1527 15.6454 13.8969 15.1482 14.5237 14.5214C15.1505 13.8945 15.6477 13.1504 15.987 12.3314C16.3262 11.5124 16.5008 10.6346 16.5008 9.74816C16.5008 8.86169 16.3262 7.9839 15.987 7.16492C15.6477 6.34593 15.1505 5.60178 14.5237 4.97495C13.8969 4.34813 13.1527 3.8509 12.3337 3.51167C11.5147 3.17243 10.6369 2.99783 9.75048 2.99783C8.86401 2.99783 7.98622 3.17243 7.16724 3.51167C6.34825 3.8509 5.6041 4.34813 4.97727 4.97495C4.35045 5.60178 3.85322 6.34593 3.51398 7.16492C3.17475 7.9839 3.00015 8.86169 3.00015 9.74816C3.00015 10.6346 3.17475 11.5124 3.51398 12.3314C3.85322 13.1504 4.35045 13.8945 4.97727 14.5214C5.6041 15.1482 6.34825 15.6454 7.16724 15.9846C7.98622 16.3239 8.86401 16.4985 9.75048 16.4985Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <input
        placeholder="Найти репетитора"
        className={s.input}
        type="search"
        ref={prompt}
        onChange={toggleActive}
      />
    </div>
  );
};
