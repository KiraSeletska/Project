import styles from "./successfullySent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const SuccessfullySent = ({ totalPrice, phoneNumber }) => {
  const [time, setTime] = useState(false);

  const fistImg = <FontAwesomeIcon icon={faCircleCheck} beat />;
  const defaultImg = <FontAwesomeIcon icon={faCircleCheck} />;

  setTimeout(() => {
    setTime(true);
  }, 3000);
  return (
    <div className={styles.saccessSendPhoneNumber}>
      <div className={styles.info}>
      <h3>Your order has been sent </h3>
      <p className={styles.text1}>Order price:  <span className={styles.price}> {totalPrice}$</span></p>
     
      <p className={styles.text2}> Expect a delivery message to the number: 
      <span className={styles.phone}>{phoneNumber}</span>
      </p>

      </div>
      <div className={styles.imageContainer}>
        {!time ? fistImg : defaultImg}
      </div>
    </div>
  );
};
