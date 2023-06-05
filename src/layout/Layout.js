import styles from "./Wrapper.module.css";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
export const Layout = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
