import styles from "./styles.module.css";
import img from "../../images/image2.svg";
import { NavLink } from "react-router-dom";

export const SalesSection = () => {
  return (
    <section className={styles.salesContainer}>
      <div className={styles.textContainer}>
        <h1>
          Sale <br />
          <span>New season</span>
        </h1>
          <NavLink to="/sales">
            <button className={styles.btn}>Sale</button>
          </NavLink>
    
      </div>

      <div className={styles.imgContainer}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};
