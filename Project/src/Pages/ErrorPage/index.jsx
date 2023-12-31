
import errorImg from "../../images/Error.svg";
import { Contact } from "../../components/Contact";
import { Header } from "../../components/Header";
import styles from "./styles.module.css";

export const ErrorPage = () => {

  return (
    <div className={styles.errorPage}>
      <Header />
      <img className={styles.errorImg} src={errorImg} alt="404 error" />
      <Contact />
    </div>
  );
};
