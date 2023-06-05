import s from "./Button.module.css";
export const Button = ({ type, className, children }) => {
  return (
    <button type={type || "button"} className={`${s.btn} ${className}`}>
      {children}
    </button>
  );
};
