import styles from "./contact.module.css";
import Instagram_icon from "../../images/Instagram.svg";
import WhatsApp_icon from "../../images/WhatsApp.svg";

export const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <div className={styles.conectWrapper}>
          <h2>Contact</h2>
          <p className={styles.phone}>
            {" "}
            <a href="tel:+499999999999">+49 999 999 99 99</a>
          </p>
          <div className={styles.iconsContainer}>
            <div className={styles.instagram}>
              <a href="#">
                <img src={Instagram_icon} alt="Logo instagram" />
                <p>Instagram</p>
              </a>
            </div>
            <div className={styles.whatsUp}>
              <a href="#">
                <img src={WhatsApp_icon} alt="Logo WhatsApp" />
                <p>WhatsApp</p>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.adressWrapper}>
          <h2>Address</h2>
          <a href="https://www.google.com/search?q=telranDE">
            Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
          </a>
          <p className={styles.workingTime}>Working Hours:</p>
          <p className={styles.time}>24 hours a day</p>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          className={styles.googleMap}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409222750825!2d13.37285601580702!3d52.50793287981184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1sru!2sde!4v1689597113339!5m2!1sru!2sde"
        ></iframe>
      </div>
    </div>
  );
};
