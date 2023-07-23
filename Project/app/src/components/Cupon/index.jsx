import styles from "./styles.module.css";
import gnome from "../../images/gnome.svg";
import { usePostPhoneNumberForDiscountMutation } from "../../redux/categoriesApi";
import { useState } from "react";
import { FormMessage } from "./formMessage";
import { ValidInput } from "../ValidInput";
export const Cupon = () => {
  
  const [postNumberForDiscount, { isError, isLoading, isSuccess }] =
    usePostPhoneNumberForDiscountMutation();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true); //1 - valid, 2 - not valid

  const sendPhoneNumber = () => {
    const rool = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    if (rool.test(phoneNumber) === false) {
      setValid(false);
      setTimeout(() => setValid(true), 2000);
          
    } else {
      setValid(true);
      postNumberForDiscount(phoneNumber);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={gnome} alt="gnome" />
      </div>
      <div className={styles.form}>
        <div className={styles.text}>
          <span>5% off </span>
          <br />
          on the first order
        </div>
        {isLoading ? (
          <h3>Loading</h3>
        ) : isSuccess ? (
          <div className={styles.saccessSendPhoneNumber}>
            <h3>
            Your application has been sent. 
            Wait for a message to the phone number: <span>{phoneNumber}</span>
            </h3>
          </div>
        ) : isError ? (
          <h3>ooops</h3>
        ) : (
          <form className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className={styles.inputWrapper}>
            <input
                type="tel"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={styles.input}
                placeholder="phone number"
                maxLength={14}
                minLength={4}
                defaultValue={'+47'}
          />
            </div>
            <div className={styles.errorWindow}>
            < FormMessage status={valid}/>
            </div>
  
            <button
              onClick={() => sendPhoneNumber()}
              className={styles.button}
              type="submit"
            >
              Cat a discount
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
