import classNames from "classnames";
import s from "./FilterBtn.module.scss";

export const FilterBtn = ({ className, children }) => (
  <button className={classNames(s.btn, className)}>
    <svg
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M0.49552 1.22682C0.849102 0.4768 1.59912 0 2.42951 0H25.5731C26.4034 0 27.1535 0.4768 27.5071 1.22682C27.8606 1.97685 27.7535 2.8608 27.2285 3.50368L17.43 15.4773V22.2864C17.43 22.9346 17.0657 23.5293 16.4817 23.8186C15.8978 24.1079 15.2067 24.0489 14.687 23.6579L11.2583 21.0864C10.8244 20.7649 10.5726 20.256 10.5726 19.7149V15.4773L0.768743 3.49832C0.249084 2.8608 0.136581 1.97149 0.49552 1.22682Z"
        fill="currentColor"
      />
    </svg>

    {children}
  </button>
);
