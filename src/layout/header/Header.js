import s from "./Header.module.css";
import { Button } from "../../ui/Button";
import logo from "../../assets/images/header/logo.png";

export const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" title="logo" className={s.logo} />
      <Button children={"Sign In"} className={s.headerBtn} />
    </header>
  );
};
